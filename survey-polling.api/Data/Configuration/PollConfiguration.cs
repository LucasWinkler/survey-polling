using survey_polling.api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace survey_polling.api.Data.Configuration
{
    public class PollConfiguration : IEntityTypeConfiguration<Poll>
    {
        public void Configure(EntityTypeBuilder<Poll> builder)
        {
            builder.ToTable("Poll");

            builder.HasKey(u => u.Id);

            builder.Property(p => p.HostId)
                .IsRequired();

            builder.Property(p => p.Title)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(u => u.IsActive)
               .HasDefaultValue(false);
        }
    }
}
