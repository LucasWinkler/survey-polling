using System.Collections.Generic;

namespace survey_polling.api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsTeacher { get; set; } // Temp prop for testing

        public ICollection<Poll> Polls { get; set; }
        public ICollection<Vote> Votes { get; set; }
    }
}
