using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;
using survey_polling.api.Data;
using System;
using System.Threading.Tasks;

namespace survey_polling.api.Hubs
{
    /// <summary>
    /// SignalR hub for polling.
    /// </summary>
    public class PollHub : Hub
    {
        private readonly IServiceProvider _serviceProvider;

        /// <summary>
        /// Constructs a PollHub with a required IServiceProvider.
        /// </summary>
        /// <param name="serviceProvider"></param>
        public PollHub(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        /// <summary>
        /// Adds a user to a lobby.
        /// </summary>
        /// <param name="pin">The lobby pin.</param>
        public async Task JoinLobby(string pin)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, pin);

            using var scope = _serviceProvider.CreateScope();
            var pollContext = scope.ServiceProvider.GetRequiredService<PollContext>();

            await Clients.Groups(pin).SendAsync(PollActions.USER_JOINED, await pollContext.GetLobbyUserCountAsync(pin));
        }

        /// <summary>
        /// Removes a user to a lobby.
        /// </summary>
        /// <param name="pin">The lobby pin.</param>
        public async Task LeaveLobby(string pin)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, pin);

            using var scope = _serviceProvider.CreateScope();
            var pollContext = scope.ServiceProvider.GetRequiredService<PollContext>();

            await Clients.Groups(pin).SendAsync(PollActions.USER_LEFT, await pollContext.GetLobbyUserCountAsync(pin));
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
        /// Sends a count of votes for a specific question to all users of a specific lobby.
        /// </summary>
        /// <param name="pin">The lobby pin.</param>
        public async Task UpdateVoteCount(string pin, int questionId)
        {
            using var scope = _serviceProvider.CreateScope();
            var pollContext = scope.ServiceProvider.GetRequiredService<PollContext>();

            await Clients.Group(pin).SendAsync(PollActions.USER_VOTED, questionId, await pollContext.GetQuestionVoteCountAsync(pin, questionId));
        }
    }
}

