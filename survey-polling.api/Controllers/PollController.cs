using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using survey_polling.api.Hubs;

namespace survey_polling.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PollController : ControllerBase
    {
        private readonly IHubContext<PollingHub> _pollHub;
        private readonly ILogger<PollController> _logger;

        public PollController(IHubContext<PollingHub> pollHub, ILogger<PollController> logger)
        {
            _pollHub = pollHub;
            _logger = logger;
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
