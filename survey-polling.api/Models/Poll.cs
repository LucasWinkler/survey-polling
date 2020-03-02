using survey_polling.api.Data;
using System.Collections.Generic;

namespace survey_polling.api.Models
{
    public class Poll : Entity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int TeacherId { get; set; }
        public bool IsActive { get; set; }

        public User Teacher { get; set; }
        public ICollection<Question> Questions { get; set; }
        public ICollection<Vote> Votes { get; set; }
    }
}
