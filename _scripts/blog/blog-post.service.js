/**
 * @typedef {{ short_URL: string, title: string, date: string, featured_image: string, excerpt: string }} BlogPost
 * @typedef {{found: number, posts: any[] }} WordPressApiResult
 */

class BlogPostService {
    
    _userAccount = 'giovanni0918';

    /**
     * @returns {Promise<BlogPost[]|Error>} A promise containing list of blog post
     */
    async getAll() {
        const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${this._userAccount}.wordpress.com/posts`);
        if (response.status === 200) {
            const json = await response.json();
            console.log(json);
            return this._mapPostCollection(json);
        }
        else {
            const errorMessage = `Unable to get list of github repos. An error occurred. Status code: ${response.status}`;
            throw new Error(errorMessage);
        }
    }

    /**
     * @param {WordPressApiResult} json Response JSON returned by WordPress
     * @returns {BlogPost[]} A list of blog post
     */
    _mapPostCollection(json) {
        return json.posts.map(post => {
            return {
              "short_URL": post.short_URL,
              "title": post.title,
              "date": new Date(post.date).toDateString(),
              "featured_image": post.featured_image,
              "excerpt": post.excerpt
            }
        }).sort((a, b) => b.id - a.id);
    }
}

export { BlogPostService };