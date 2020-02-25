﻿using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace survey_polling.api.Hubs
{
    public class PollingHub : Hub
    {
        public async Task SendToAll(string username, string message)
        {
            await Clients.All.SendAsync("sendToAll", username, message);
        }
    }
}
