using survey_polling.api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace survey_polling.api.Data.Configuration
{
    public class QuestionConfiguration : IEntityTypeConfiguration<Question>
    {
        public void Configure(EntityTypeBuilder<Question> builder)
        {
            builder.ToTable("Question");

            builder.HasKey(u => u.Id);

            builder.Property(q => q.PollId)
                .IsRequired();

            builder.Property(q => q.Content)
                .IsRequired()
                .HasMaxLength(100);
        }
    }
}
