using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace survey_polling.api.Hubs
{
    public class PollHub : Hub
    {
        // This is an example of sending a message to all connected clients
        public async Task SendToAll(string username, string message)
        {
            await Clients.All.SendAsync("sendToAll", username, message);
        }
    }
}

