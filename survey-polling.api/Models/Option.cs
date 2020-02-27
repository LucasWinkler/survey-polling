using survey_polling.api.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace survey_polling.api.Models
{
    public class Option : Entity
    {
        [Required]
        [StringLength(40, MinimumLength = 1)]
        public string Text { get; set; }

        [Required]
        public int QuestionId { get; set; }

        public Question Question { get; set; }
    }
}
