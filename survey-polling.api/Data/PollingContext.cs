using survey_polling.api.Models;
using Microsoft.EntityFrameworkCore;

namespace survey_polling.api.Data
{
    public class PollingContext : DbContext
    {
        public PollingContext(DbContextOptions<PollingContext> options) : base(options)
        {
            
        }

        public DbSet<Option> Answers { get; set; }
        public DbSet<Poll> Polls { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Vote> Votes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            base.OnConfiguring(options);
        }
    }
}
