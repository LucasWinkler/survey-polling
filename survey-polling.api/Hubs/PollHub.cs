using Microsoft.AspNetCore.SignalR;
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
        /// Sends a message to all clients when a new connection has been made.
        /// </summary>
        public override async Task OnConnectedAsync()
        {
            await Clients.All.SendAsync(PollActions.USER_JOINED, "User connected: " + Context.ConnectionId);

            await base.OnConnectedAsync();
        }

        /// <summary>
        /// Sends a message to all clients when a client has disconnected.
        /// </summary>
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await Clients.All.SendAsync(PollActions.USER_LEFT, "User disconnected: " + Context.ConnectionId);

            await base.OnDisconnectedAsync(exception);
        }

        /// <summary>
        /// Adds a user to a lobby.
        /// </summary>
        /// <param name="pin">The lobby pin</param>
        public async Task JoinLobby(string pin)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, pin);
        }

        /// <summary>
        /// Sends a vote to all users of a specific lobby.
        /// </summary>
        /// <param name="pin">The lobby pin</param>
        public async Task SendVote(string pin)
        {
            await Clients.Group(pin).SendAsync(PollActions.USER_VOTED, "SendVote is under construction");
        }

        /// <summary>
        /// Tells all users of a specific lobby that the poll has started.
        /// </summary> 
        /// <param name="pin">The lobby pin</param>
        public async Task StartPoll(string pin)
        {
            await Clients.Groups(pin).SendAsync(PollActions.POLL_STARTED);
        }
    }
}

