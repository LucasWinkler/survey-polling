using survey_polling.api.Data;

namespace survey_polling.api.Models
{
    public class Vote : Entity
    {
        public int StudentId { get; set; }
        public int OptionId { get; set; }

        public User Student { get; set; }
        public Option Option { get; set; }
    }
}
