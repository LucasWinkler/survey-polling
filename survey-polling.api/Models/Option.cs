using survey_polling.api.Data;
using System.Collections.Generic;

namespace survey_polling.api.Models
{
    public class Option : Entity
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int QuestionId { get; set; }

        public Question Question { get; set; }
        public ICollection<Vote> Votes { get; set; }
    }
}
