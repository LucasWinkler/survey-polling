using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace survey_polling.api.Hubs
{
    /// <summary>
    /// SignalR hub for polling.
    /// </summary>
    public class PollHub : Hub
    {
        /// <summary>
        /// Adds a user to a lobby.
        /// </summary>
        /// <param name="pin">The lobby pin</param>
        public async Task JoinLobby(string pin)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, pin);
            await Clients.Groups(pin).SendAsync(PollActions.USER_JOINED);
        }

        /// <summary>
        /// Removes a user to a lobby.
        /// </summary>
        /// <param name="pin">The lobby pin</param>
        public async Task LeaveLobby(string pin)
        {
            await Clients.Groups(pin).SendAsync(PollActions.USER_LEFT);
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, pin);
        }

        /// <summary>
        /// Tells all users of a specific lobby that the poll has started.
        /// </summary> 
        /// <param name="pin">The lobby pin</param>
        public async Task StartPoll(string pin)
        {
            await Clients.Groups(pin).SendAsync(PollActions.POLL_STARTED);
        }

        /// <summary>
        /// Sends a vote to all users of a specific lobby.
        /// </summary>
        /// <param name="pin">The lobby pin</param>
        public async Task SendVote(string pin)
        {
            await Clients.Group(pin).SendAsync(PollActions.USER_VOTED, "SendVote is under construction");
        }
    }
}

