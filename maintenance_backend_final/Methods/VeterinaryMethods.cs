using Maintaince_Project.Context;
using Maintaince_Project.Models;
using System;

namespace Maintaince_Project.Methods
{
    public class VeterinaryMethods
    {
        MtlsreportsContext db = new MtlsreportsContext();

        public bool InsertRequestClient(MtMaintainceBase data)
        {
            bool valid = false;
            try
            {
                MtMaintainceBase subject = new MtMaintainceBase();
                subject.IdMember = data.IdMember;
                subject.NameMember = data.NameMember;
                subject.Shop = data.Shop;
                subject.NameMember = data.NameMember;
                subject.TypeMember = data.TypeMember;
                subject.DateEvent = DateTime.Now;
                subject.NamePet = data.NamePet;
                subject.IdPetType = data.IdPetType;
                subject.DescType = data.DescType;
                subject.Age = data.Age;
                subject.Comments = data.Comments;
                db.MtMaintainceBases.Add(subject);
                db.SaveChanges();
                valid = true;
                return valid;
            }
            catch
            {

            }
            return true;
        }
    }
}
