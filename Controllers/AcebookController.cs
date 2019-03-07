using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AcebookAPI.Models;

namespace AceBook_CS_NotSoSharp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AcebookController : ControllerBase
    {
        private readonly AcebookContext _context;

        public AcebookController(AcebookContext context)
        {
            _context = context;

        }

        [HttpGet]
        public ActionResult<List<Post>> GetAll()
        {
            return _context.AcebookPosts.ToList();
        }

        [HttpGet("{id}", Name = "GetPost")]
        public ActionResult<Post> GetById(long id)
        {
            var post = _context.AcebookPosts.Find(id);
            if (post == null)
            {
                return NotFound();
            }
            return post;
        }

        [HttpPost]
        public async Task<ActionResult<Post>> PostPost(Post post)
        {
            _context.AcebookPosts.Add(post);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = post.Id }, post);
        }
    }
}
