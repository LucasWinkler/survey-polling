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

            builder.Property(q => q.Text)
                .IsRequired();

            builder.Property(q => q.PollId)
                .IsRequired();

            builder.Property(q => q.AnswerId)
                .IsRequired();

            builder.HasOne(q => q.Poll)
                .WithMany(p => p.Questions)
                .HasForeignKey(q => q.PollId)
                .OnDelete(DeleteBehavior.Restrict); 
            
            builder.HasOne(q => q.Answer)
                .WithOne(a => a.Question)
                .HasForeignKey<Question>(q => q.AnswerId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Property(o => o.Text)
                .HasMaxLength(100);
        }
    }
}
