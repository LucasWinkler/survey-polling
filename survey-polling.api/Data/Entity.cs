﻿using System;

namespace survey_polling.api.Data
{
    public class Entity
    {
        public DateTime DateCreated { get; set; }

        public Entity()
        {
            this.DateCreated = DateTime.UtcNow;
        }
    }
}
