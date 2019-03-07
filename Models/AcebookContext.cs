using Microsoft.EntityFrameworkCore;
namespace AcebookAPI.Models
{
    public class AcebookContext : DbContext
    {
        public AcebookContext(DbContextOptions<AcebookContext> options) : base(options)
        {
        }
        public DbSet<Post> AcebookPosts { get; set; }
    }
}
