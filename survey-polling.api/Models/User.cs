using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace survey_polling.api.Models
{
    public class User
    {
        [Required]
        [StringLength(15, MinimumLength = 3)]
        public string Name { get; set; }

        // Temp prop for testing
        public bool IsTeacher { get; set; }
    }
}
