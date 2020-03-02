using survey_polling.api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace survey_polling.api.Data.Configuration
{
    public class OptionConfiguration : IEntityTypeConfiguration<Option>
    {
        public void Configure(EntityTypeBuilder<Option> builder)
        {
            builder.ToTable("Option");

            builder.HasKey(u => u.Id);

            builder.Property(o => o.Text)
                .IsRequired();

            builder.Property(o => o.QuestionId)
                .IsRequired();

            builder.HasOne(o => o.Question)
                .WithMany(q => q.Options)
                .HasForeignKey(o => o.QuestionId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Property(o => o.Text)
                .HasMaxLength(100);
        }
    }
}
