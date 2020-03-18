using Newtonsoft.Json;

namespace survey_polling.api.Models
{
    /// <summary>
    /// Contains information for which Vote corresponds to which Poll and Question.
    /// </summary>
    public class Vote
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        public int PollId { get; set; }

        [JsonProperty("QuestionId")]
        public int QuestionId { get; set; }

        [JsonProperty("OptionId")]
        public int OptionId { get; set; }

        public Poll Poll { get; set; }
        public Question Question { get; set; }
        public Option Option { get; set; }
    }
}
