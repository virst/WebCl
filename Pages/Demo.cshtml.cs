using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebCl.Pages
{
    public class DemoModel : PageModel
    {
        public record ChItem(int id, string name);

        public readonly List<ChItem> ChItems = new ();

        [BindProperty]
        public int[]? ChVals { get; set; }

        public DemoModel()
        {
            ChItems.Add(new (1, "Январь"));
            ChItems.Add(new (2, "Февраль"));
            ChItems.Add(new (3, "Март"));
            ChItems.Add(new (4, "Апрель"));
        }

        public void OnGet()
        {
          
        }

        public void OnPost()
        {
            Console.WriteLine(string.Join(';', ChVals));
        }
    }
}
