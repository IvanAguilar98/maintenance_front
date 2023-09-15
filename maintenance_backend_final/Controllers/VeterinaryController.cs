using Maintaince_Project.Methods;
using Maintaince_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Maintaince_Project.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class VeterinaryController : ControllerBase
    {
        public static VeterinaryMethods methods = new VeterinaryMethods();

        [HttpPost]
        public ActionResult InsertRequest(MtMaintainceBase v)
        {
            try
            {
                return Ok(new { name = "InsertRequest", validation = "Ok", data = methods.InsertRequestClient(v), error = false });
            }
            catch (Exception ex)
            {
                return Ok(new { name = "InsertRequest", validation = ex.Message, error = true });
            }
        }
    }
}
