import {url} from "../config/server";

const getContent = async (slug) => {
    const response = await fetch(url + "/wp-json/wp/v2/posts?_embed&slug=" + slug)
    const data = await response.json()
    if (data.length > 0) {
        const content = {
            title: data[0].title.rendered,
            content: {__html: data[0].content.rendered},
            cover: data[0]._embedded["wp:featuredmedia"][0].source_url,
            tags: [],
            date: data[0].date
        }

        if (data[0]._embedded["wp:term"][1]) {
            content.tags = data[0]._embedded["wp:term"][1].map(tag => {
                return {
                    id: tag.id,
                    name: tag.name,
                    slug: tag.slug
                }
            })
        }

        return content
    } else {
        return undefined
    }
}

export default getContent