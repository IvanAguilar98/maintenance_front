using Maintaince_Project.Methods;
using Maintaince_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Maintaince_Project.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PersonsController : ControllerBase
    {
        public static PersonsMethods methods = new PersonsMethods();

        [HttpGet]
        public ActionResult GetCatalogMembers()
        {
            try
            {
                return Ok(new { name = "GetCatalogMembers", validation = "Ok", data = methods.getCatalogMembers(), error = false }) ;
            }
            catch (Exception ex)
            {
                return Ok(new { name = "GetCatalogMembers", validation = ex.Message, error = true });
            }
        }

        [HttpPost]
        public ActionResult InsertNewMember(MtMaintainceMember? p)
        {
            try
            {
                return Ok(new { name = "InsertNewMember", validation = "Ok", data = methods.InsertNewMember(p), error = false });
            }
            catch (Exception ex)
            {
                return Ok(new { name = "InsertNewMember", validation = ex.Message, error = true });
            }
        }

        [HttpPost]
        public ActionResult GetMemberEspecific(MtMaintainceMember p)
        {
            try
            {
                return Ok(new { name = "GetMemberEspecific", validation = "Ok", data = methods.getSpecificMember(p.Id), error = false });
            }
            catch (Exception ex)
            {
                return Ok(new { name = "GetMemberEspecific", validation = ex.Message, error = true });
            }
        }

        [HttpPost]
        public ActionResult DeleteMember(MtMaintainceMember p)
        {
            try
            {
                return Ok(new { name = "DeleteMember", validation = "Ok", data = methods.DeleteMember(p.Id), error = false });
            }
            catch (Exception ex)
            {
                return Ok(new { name = "DeleteMember", validation = ex.Message, error = true });
            }
        }
    }
}
