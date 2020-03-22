using System.Collections.Generic;

namespace survey_polling.api.Models
{
    public class Lobby
    {
        public int Id { get; set; }
        public int PollId { get; set; }

        public Poll Poll { get; set; }
        public ICollection<User> Users { get; set; }
    }
}
