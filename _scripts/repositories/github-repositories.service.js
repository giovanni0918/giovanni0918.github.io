/**
 * A number, or a string containing a number.
 * @typedef {{ id: string, name: string, description: string, homepage: string, html_url: string, updated_at: string }} GithubRepo
 */

class GithubRepositoriesService {

    _userAccount = 'giovanni0918';

    /**
     * @returns {Promise<GithubRepo[]|Error>} A promise containing a collection of github repos
     */
    async getAll() {
        const response = await fetch(`https://api.github.com/users/${this._userAccount}/repos`);
        if (response.status === 200) {
            const json = await response.json();
            return this._mapRepositoryCollection(json);
        }
        else {
            const errorMessage = `Unable to get list of github repos. An error occurred. Status code: ${response.status}`;
            throw new Error(errorMessage);
        }
    }

    /**
     * 
     * @param {any[]} json Array of objects returned by api
     * @returns {GithubRepo[]} A collection of github repos
     */
    _mapRepositoryCollection(json) {
        return json.map(repo => {
            return {
              "id": repo.id,
              "name": repo.name,
              "description": repo.description,
              "homepage": repo.homepage,
              "html_url": repo.html_url,
              "updated_at": new Date(repo.updated_at)
            }
        }).sort((a, b) => b.updated_at - a.updated_at);
    }

}

export { GithubRepositoriesService };