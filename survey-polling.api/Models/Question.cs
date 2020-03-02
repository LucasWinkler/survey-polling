using survey_polling.api.Data;
using System.Collections.Generic;

namespace survey_polling.api.Models
{
    public class Question : Entity
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int PollId { get; set; }
        public int AnswerId { get; set; }

        public Poll Poll { get; set; }
        public Option Answer { get; set; }
        public ICollection<Option> Options { get; set; }
    }
}
