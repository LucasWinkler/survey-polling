using survey_polling.api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace survey_polling.api.Data.Configuration
{
    public class VoteConfiguration : IEntityTypeConfiguration<Vote>
    {
        public void Configure(EntityTypeBuilder<Vote> builder)
        {
            builder.ToTable("Vote");

            builder.HasKey(v => v.Id);

            builder.Property(v => v.PollId)
                .IsRequired();

            builder.Property(v => v.QuestionId)
                .IsRequired();

            builder.Property(v => v.OptionId)
                .IsRequired();

            builder.HasOne(v => v.Poll)
                .WithMany(p => p.Votes)
                .HasForeignKey(v => v.PollId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(v => v.Question)
                .WithMany(q => q.Votes)
                .HasForeignKey(v => v.QuestionId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
