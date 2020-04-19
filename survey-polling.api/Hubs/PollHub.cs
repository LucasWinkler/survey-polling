using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using survey_polling.api.Data;
using System;
using System.Diagnostics;
using System.Linq;
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

        public override Task OnConnectedAsync()
        {
            Clients.Caller.SendAsync("userConnected", Context.ConnectionId);
            return base.OnConnectedAsync();
        }

        /// <summary>
        /// Adds a user to a lobby.
        /// </summary>
        /// <param name="pin">The lobby pin.</param>
        public async Task JoinLobby(string pin)
        {
            var scope = _serviceProvider.CreateScope();
            var pollContext = scope.ServiceProvider.GetRequiredService<PollContext>();

            try
            {
                var lobby = await pollContext.Lobbies.Include(l => l.Users).FirstOrDefaultAsync(l => l.Pin == pin);
                var user = await pollContext.Users.FirstOrDefaultAsync(u => u.ConnectionId == Context.ConnectionId);

                if (lobby.Users.Any(u => u.ConnectionId == null))
                {
                    pollContext.Attach(lobby);
                    lobby.Users.Add(user);
                    pollContext.Entry(lobby).State = EntityState.Modified;
                    await pollContext.SaveChangesAsync();
                    await Groups.AddToGroupAsync(Context.ConnectionId, pin);
                    await Clients.Groups(pin).SendAsync(PollActions.USER_JOINED, await pollContext.GetLobbyUserCountAsync(pin));
                }
                else if (lobby.Users.Any(u => u.ConnectionId == Context.ConnectionId))
                {
                    await Clients.Caller.SendAsync(PollActions.USER_ALREADY_JOINED);
                }
                else
                {
                   
                    pollContext.Attach(lobby);
                    lobby.Users.Add(user);
                    pollContext.Entry(lobby).State = EntityState.Modified;
                    await pollContext.SaveChangesAsync();
                    await Groups.AddToGroupAsync(Context.ConnectionId, pin);
                    await Clients.Groups(pin).SendAsync(PollActions.USER_JOINED, await pollContext.GetLobbyUserCountAsync(pin));
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine(e);
            }
        }

        /// <summary>
        /// Removes a user to a lobby.
        /// </summary>
        /// <param name="pin">The lobby pin.</param>
        public async Task LeaveLobby(string pin)
        {
            var scope = _serviceProvider.CreateScope();
            var pollContext = scope.ServiceProvider.GetRequiredService<PollContext>();

            try
            {
                var lobby = await pollContext.Lobbies.FirstOrDefaultAsync(l => l.Pin == pin);

                if (!lobby.Users.Any(u => u.ConnectionId == Context.ConnectionId))
                {
                    await Clients.Caller.SendAsync(PollActions.USER_NOT_FOUND);
                }
                else
                {
                    await Groups.RemoveFromGroupAsync(Context.ConnectionId, pin);
                    await Clients.Groups(pin).SendAsync(PollActions.USER_LEFT, await pollContext.GetLobbyUserCountAsync(pin));
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine(e);
            }
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
        public async Task SendVoteCount(string pin, int questionId)
        {
            using var scope = _serviceProvider.CreateScope();
            var pollContext = scope.ServiceProvider.GetRequiredService<PollContext>();

            await Clients.Group(pin).SendAsync(PollActions.USER_VOTED, questionId, await pollContext.GetQuestionVoteCountAsync(pin, questionId));
        }
    }
}

