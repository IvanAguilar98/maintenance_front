using Maintaince_Project.Context;
using Maintaince_Project.Models;
using System.Collections.Generic;

namespace Maintaince_Project.Methods
{
    public class PersonsMethods
    {
        MtlsreportsContext db = new MtlsreportsContext();
        public List<MtMaintainceMember> getCatalogMembers()
        {
            var data = new List <MtMaintainceMember>();
            try
            {
                data = db.MtMaintainceMembers.ToList();
                return data;
            }
            catch
            {

            }
            return data;
        }


        public bool InsertNewMember(MtMaintainceMember? data)
        {
            bool valid = false;
            try
            {
                MtMaintainceMember subject = new MtMaintainceMember();
                subject.Gender = data.Gender;
                subject.DatefirstMember = DateTime.Now;
                subject.IsMember = true;
                subject.NameMember = data.NameMember;
                subject.TypeMember = data.TypeMember;
                subject.PostalCode = data.PostalCode;
                subject.Shop = data.Shop;
                db.MtMaintainceMembers.Add(subject);
                db.SaveChanges();
                valid = true;
                return valid;
            }
            catch
            {
                return valid;
            }
            return valid;
        }

        public MtMaintainceMember getSpecificMember(int id)
        {
            var data = new MtMaintainceMember();
            try
            {
                data = db.MtMaintainceMembers.Single(x => x.Id == id);
                return data;
            }
            catch (Exception ex)
            {

            }
            return data;
        }

        public bool DeleteMember(int id)
        {
            var valid = false;
            try
            {
                var member = db.MtMaintainceMembers.Single(x => x.Id == id);
                db.MtMaintainceMembers.Remove(member);
                db.SaveChanges();
                return valid = true;
            }
            catch (Exception ex)
            {
                return valid = false;
            }
            return valid;
        }
    }

}
