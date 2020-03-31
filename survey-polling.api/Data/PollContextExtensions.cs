using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using survey_polling.api.Models;
using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace survey_polling.api.Data
{
    /// <summary>
    /// Extension class for the PollContext that contains 
    /// methods/functions for querying against the database.
    /// </summary>
    public static class PollContextExtensions
    {
        /// <summary>
        /// Gets the number of users in a specific lobby.
        /// </summary>
        /// <param name="pollContext">The database context.</param>
        /// <param name="lobbyPin">The lobbies pin code.</param>
        /// <returns>The number of users as an integer.</returns>
        public static async Task<int> GetLobbyUserCountAsync(this PollContext pollContext, string lobbyPin)
        {
            try
            {
                var lobby = await pollContext.Lobbies
                    .Include(l => l.Users)
                    .FirstOrDefaultAsync(l => l.Pin == lobbyPin);

                return lobby.Users.Count;
            }
            catch (SqlException sqlException)
            {
                Debug.WriteLine(sqlException.ToString());
            }
            catch (Exception exception)
            {
                Debug.WriteLine(exception.ToString());
            }

            return await Task.FromException<int>(new Exception("Unable to count users for a lobby with a pin of: " + lobbyPin));
        }

        /// <summary>
        /// Gets the number of votes for a specific question.
        /// </summary>
        /// <param name="pollContext">The database context.</param>
        /// <param name="questionId">The question being queried.</param>
        /// <returns>The number of votes as an integer.</returns>
        public static async Task<int[]> GetQuestionVoteCountAsync(this PollContext pollContext, string lobbyPin, int questionId)
        {
            try
            {
                var lobby = await pollContext.Lobbies
                       .Include(l => l.Users)
                       .Include(l => l.ActiveQuestion)
                            .ThenInclude(q => q.Options)
                       .FirstOrDefaultAsync(l => l.Pin == lobbyPin);

                Option[] options = new Option[lobby.ActiveQuestion.Options.Count];

                lobby.ActiveQuestion.Options.CopyTo(options, 0);

                int[] votes = new int[options.Length];

                for (int i = 0; i < options.Length; i++)
                {
                    votes[i] = await pollContext.Votes
                        .CountAsync(v => v.OptionId == options[i].Id);
                }

                return votes;
            }
            catch (SqlException sqlException)
            {
                Debug.WriteLine(sqlException.ToString());
            }
            catch (Exception exception)
            {
                Debug.WriteLine(exception.ToString());
            }

            return await Task.FromException<int[]>(new Exception("Unable to count votes for a question with an id of: " + questionId));
        }
    }
}
