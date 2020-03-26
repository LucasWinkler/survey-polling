using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
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

            return 0;
        }

        /// <summary>
        /// Gets the number of votes for a specific question.
        /// </summary>
        /// <param name="pollContext">The database context.</param>
        /// <param name="questionId">The question being queried.</param>
        /// <returns>The number of votes as an integer.</returns>
        public static async Task<int> GetQuestionVoteCountAsync(this PollContext pollContext, int questionId)
        {
            try
            {
                var votes = await pollContext.Votes
                    .CountAsync(v => v.QuestionId == questionId);

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

            return 0;
        }
    }
}
