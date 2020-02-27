using survey_polling.api.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace survey_polling.api.Models
{
    public class Poll : Entity
    {
        [Required]
        [StringLength(60, MinimumLength = 5)]
        public string Title { get; set; }

        [Required]
        public int TeacherId { get; set; }

        public bool IsActive { get; set; }

        public User Teacher { get; set; }
        public ICollection<Question> Questions { get; set; }
        public ICollection<Vote> Votes { get; set; }
    }
}
