using survey_polling.api.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace survey_polling.api.Models
{
    public class Question : Entity
    {
        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string Text { get; set; }

        [Required]
        public int PollId { get; set; }

        [Required]
        public int AnswerId { get; set; }

        public Poll Poll { get; set; }
        public Option Answer { get; set; }
        public ICollection<Option> Options { get; set; }
    }
}
