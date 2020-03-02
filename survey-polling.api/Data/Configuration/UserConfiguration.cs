using survey_polling.api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace survey_polling.api.Data.Configuration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("User");

            builder.HasKey(u => u.Id);

            builder.Property(u => u.Name)
                .IsRequired();

            builder.Property(u => u.IsHost)
                .HasDefaultValue(false);
        }
    }
}
