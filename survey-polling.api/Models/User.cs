﻿namespace survey_polling.api.Models
{
    /// <summary>
    /// A User within the Poll.
    /// </summary>
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsHost { get; set; }
    }
}
