using Microsoft.AspNetCore.SignalR;
using survey_polling.api.Models;
using System;
using System.Threading.Tasks;

namespace survey_polling.api.Hubs
{
    public class PollHub : Hub
    {
        public async Task SendVote(Vote vote)
        {
            await Clients.All.SendAsync(WebSocketActions.VOTE_RECEIVED, vote);
        }
    }

    public struct WebSocketActions
    {
        public static readonly string USER_JOINED = "userJoined";
        public static readonly string USER_LEFT = "userLeft";
        public static readonly string VOTE_RECEIVED = "voteReceived";
    }
}

