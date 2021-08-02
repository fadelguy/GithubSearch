using GithubSearch.Entities.Search;
using GithubSearch.IServices;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace GithubSearch.Services
{
    public class SearchService : ISearchService
    {
        public async Task<List<SearchResult>> GetGithubResult(string query)
        {
            using var client = new HttpClient();
            client.DefaultRequestHeaders.TryAddWithoutValidation("User-Agent", "http://developer.github.com/v3/#user-agent-required");
            var response = await client.GetAsync($"https://api.github.com/search/repositories?q={query}");

            string responseBody = await response.Content.ReadAsStringAsync();
            GithubSearchResult githubResult = JsonConvert.DeserializeObject<GithubSearchResult>(responseBody);

            List<SearchResult> result = githubResult.items.Select(x => new SearchResult() { id = x.id, name = x.name, url = x.html_url, description = x.description }).ToList();

            return result;
        }
    }
}
