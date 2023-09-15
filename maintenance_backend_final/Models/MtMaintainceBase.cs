using System;
using System.Collections.Generic;

namespace Maintaince_Project.Models;

public partial class MtMaintainceBase
{
    public int Id { get; set; }

    public int? IdMember { get; set; }

    public string? NameMember { get; set; }

    public string? NamePet { get; set; }

    public int TypeMember { get; set; }

    public DateTime? DateEvent { get; set; }
    public string? Shop { get; set; }

    public int? IdPetType { get; set; }

    public string? DescType { get; set; }

    public int Age { get; set; }

    public string? Comments { get; set; }
}
