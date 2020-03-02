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

            builder.Property(p => p.Title)
                .IsRequired();

            builder.Property(p => p.TeacherId)
                .IsRequired();

            builder.HasOne(p => p.Teacher)
                .WithMany(t => t.Polls)
                .HasForeignKey(q => q.TeacherId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Property(p => p.Title)
                .HasMaxLength(100);
        }
    }
}
