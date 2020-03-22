﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using survey_polling.api.Data;
using survey_polling.api.Models;
using survey_polling.api.Utils;

namespace survey_polling.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LobbyController : ControllerBase
    {
        private readonly PollContext _context;

        public LobbyController(PollContext context)
        {
            _context = context;
        }

        // GET: api/Lobby
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lobby>>> GetLobbies()
        {
            return await _context.Lobbies.ToListAsync();
        }

        // GET: api/Lobby/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Lobby>> GetLobby(int id)
        {
            var lobby = await _context.Lobbies.FindAsync(id);

            if (lobby == null)
            {
                return NotFound();
            }

            return lobby;
        }

        // PUT: api/Lobby/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLobby(int id, Lobby lobby)
        {
            if (id != lobby.Id)
            {
                return BadRequest();
            }

            _context.Entry(lobby).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LobbyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Lobby
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Lobby>> PostLobby(Lobby lobby)
        {
            lobby.Pin = PinGenerator.RandomPin().ToString();

            await _context.Lobbies.AddAsync(lobby);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLobby", new { id = lobby.Id }, lobby);
        }

        // DELETE: api/Lobby/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Lobby>> DeleteLobby(int id)
        {
            var lobby = await _context.Lobbies.FindAsync(id);
            if (lobby == null)
            {
                return NotFound();
            }

            _context.Lobbies.Remove(lobby);
            await _context.SaveChangesAsync();

            return lobby;
        }

        private bool LobbyExists(int id)
        {
            return _context.Lobbies.Any(e => e.Id == id);
        }
    }
}
