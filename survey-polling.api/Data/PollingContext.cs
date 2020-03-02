using survey_polling.api.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace survey_polling.api.Data
{
    public class PollingContext : DbContext
    {
        public PollingContext(DbContextOptions<PollingContext> options) : base(options) { }

        public DbSet<Option> Options { get; set; }
        public DbSet<Poll> Polls { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Vote> Votes { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Apply all entity type configurations by searching for 
            // all IEntityTypeConfiguration instances from this assembly
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
