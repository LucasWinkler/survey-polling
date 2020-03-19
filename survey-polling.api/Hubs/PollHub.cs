using Microsoft.AspNetCore.SignalR;
using survey_polling.api.Models;
using System;
using System.Threading.Tasks;

namespace survey_polling.api.Hubs
{
    /// <summary>
    /// SignalR hub for polling.
    /// </summary>
    public class PollHub : Hub
    {
        /// <summary>
        /// Sends a message to all clients which notifies them that there was a new vote.
        /// Used to visualize the new data on the front-end.
        /// </summary>
        public async Task SendVote(Vote vote)
        {
            await Clients.All.SendAsync(PollActions.USER_VOTED, vote);
        }

        /// <summary>
        /// Sends a message to all clients which notifies them that there is an active poll.
        /// </summary>
        public async Task ActivatePoll(string msg)
        {
            await Clients.All.SendAsync(PollActions.POLL_ACTIVE, msg);
        }
    }
}

