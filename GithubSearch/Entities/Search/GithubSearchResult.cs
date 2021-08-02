using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GithubSearch.Entities.Search
{
    public class GithubSearchResult
    {
        public int total_count { get; set; }
        public bool incomplete_results { get; set; }
        public List<Item> items { get; set; }
    }

    public class Item
    {
        public int id { get; set; }
        public string name { get; set; }
        public string html_url { get; set; }
        public string description { get; set; }
    }
}
