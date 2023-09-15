using System;
using System.Collections.Generic;

namespace Maintaince_Project.Models;

public partial class MtMaintainceMember
{
    public int Id { get; set; }

    public string? NameMember { get; set; } = null!;

    public string? Gender { get; set; } = null!;

    public string? Shop { get; set; }

    public int PostalCode { get; set; }

    public bool IsMember { get; set; }

    public int TypeMember { get; set; }

    public DateTime? DateEvent { get; set; }

    public DateTime DatefirstMember { get; set; }

    public DateTime? DatelastMember { get; set; }
}
