using survey_polling.api.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace survey_polling.api.Models
{
    public class Vote : Entity
    {
        [Required]
        public int PollId { get; set; }

        [Required]
        public int QuestionId { get; set; }

        [Required]
        public int OptionId { get; set; }

        [Required]
        public int StudentId { get; set; }

        public Poll Poll { get; set; }
        public Question Question { get; set; }
        public Option Option { get; set; }
        public User Student { get; set; }
    }
}
