using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace api.Hubs
{
    public class PollHub : Hub
    {
        public async Task SendToAll(string username, string message)
        {
            await Clients.All.SendAsync("sendToAll", username, message);
        }
    }
}

