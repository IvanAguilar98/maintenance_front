using System;
using System.Collections.Generic;
using Maintaince_Project.Models;
using Microsoft.EntityFrameworkCore;

namespace Maintaince_Project.Context;

public partial class MtlsreportsContext : DbContext
{
    public MtlsreportsContext()
    {
    }

    public MtlsreportsContext(DbContextOptions<MtlsreportsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<MtMaintainceBase> MtMaintainceBases { get; set; }

    public virtual DbSet<MtMaintainceMember> MtMaintainceMembers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server= DTNABSALW002;Database= MTLSReports; User ID= MTLSR_admin;Password=bu1lDmE8;TrustServerCertificate=True;Encrypt=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<MtMaintainceBase>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__MT_Maint__3214EC2735216329");

            entity.ToTable("MT_MaintainceBase");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Age).HasColumnName("age");
            entity.Property(e => e.Comments)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("comments");
            entity.Property(e => e.DateEvent)
                .HasColumnType("datetime")
                .HasColumnName("dateEvent");
            entity.Property(e => e.DescType)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("descType");
            entity.Property(e => e.IdMember).HasColumnName("idMember");
            entity.Property(e => e.IdPetType).HasColumnName("idPetType");
            entity.Property(e => e.NameMember)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nameMember");
            entity.Property(e => e.NamePet)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Shop)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("shop");
            entity.Property(e => e.TypeMember).HasColumnName("typeMember");
        });

        modelBuilder.Entity<MtMaintainceMember>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__MT_Maint__3214EC27329D2E04");

            entity.ToTable("MT_MaintainceMembers");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.DateEvent)
                .HasColumnType("datetime")
                .HasColumnName("dateEvent");
            entity.Property(e => e.DatefirstMember)
                .HasColumnType("datetime")
                .HasColumnName("datefirstMember");
            entity.Property(e => e.DatelastMember)
                .HasColumnType("datetime")
                .HasColumnName("datelastMember");
            entity.Property(e => e.Gender)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("gender");
            entity.Property(e => e.IsMember).HasColumnName("isMember");
            entity.Property(e => e.NameMember)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nameMember");
            entity.Property(e => e.PostalCode).HasColumnName("postalCode");
            entity.Property(e => e.Shop)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("shop");
            entity.Property(e => e.TypeMember).HasColumnName("typeMember");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
