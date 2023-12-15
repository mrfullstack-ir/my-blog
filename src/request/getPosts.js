import {url} from "../config/server";

const getPosts = async (offset = 1) => {
    const response = await fetch(url + "/wp-json/wp/v2/posts?_embed&offset=" + offset)
    const data = await response.json()
    const posts = data.map(post => {
        return {
            id: post.id,
            title: post.title.rendered,
            slug: post.slug,
            excerpt: {__html: post.excerpt.rendered},
            category: post._embedded["wp:term"][0][0].name,
            cover: post._embedded["wp:featuredmedia"][0].source_url
        }
    })

    return {
        posts: posts,
        totalPosts: response.headers.get("X-WP-Total")
    }
}

export default getPosts