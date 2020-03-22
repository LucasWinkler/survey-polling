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
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            return base.OnDisconnectedAsync(exception);
        }

        public async Task SendVote(int dataIndex)
        {
            await Clients.All.SendAsync(PollActions.USER_VOTED, "");
        }

        public async Task ActivatePoll(string msg)
        {
            await Clients.All.SendAsync(PollActions.POLL_ACTIVE, msg);
        }
    }
}

