using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Hubs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PollController : ControllerBase
    {
        private readonly IHubContext<PollHub> pollHub;

        public PollController(IHubContext<PollHub> pollHub)
        {
            this.pollHub = pollHub;
        }

        // GET: api/Poll
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Poll/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Poll
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Poll/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
