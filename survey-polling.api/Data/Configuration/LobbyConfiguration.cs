using survey_polling.api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace survey_polling.api.Data.Configuration
{
    public class LobbyConfiguration : IEntityTypeConfiguration<Lobby>
    {
        public void Configure(EntityTypeBuilder<Lobby> builder)
        {
            builder.ToTable("Lobby");

            builder.HasKey(v => v.Id);

            builder.Property(v => v.PollId)
                .IsRequired();

            builder.HasOne(v => v.Poll)
                .WithMany(p => p.Lobbies)
                .HasForeignKey(v => v.PollId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
