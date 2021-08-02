using GithubSearch.Entities.Search;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GithubSearch.IServices
{
    public interface ISearchService
    {
        Task<List<SearchResult>> GetGithubResult(string query);
    }
}
