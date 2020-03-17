﻿namespace survey_polling.api.Hubs
{
    /// <summary> 
    /// WebSocket actions for the PollHub.
    /// </summary>
    public static class PollActions
    {
        /// <summary>
        /// User joined an active poll
        /// </summary>
        public static readonly string USER_JOINED = "userJoined";

        /// <summary>
        /// User left an active poll
        /// </summary>
        public static readonly string USER_LEFT = "userLeft";

        /// <summary>
        /// User voted on a question.
        /// </summary>
        public static readonly string USER_VOTED = "userVoted";

        /// <summary>
        /// Teacher/host started a poll.
        /// </summary>
        public static readonly string POLL_STARTED = "pollStarted";

        /// <summary>
        /// Teacher/host ended a poll.
        /// </summary>
        public static readonly string POLL_ENDED = "pollEnded";
    }
}