import {url} from "../config/server";

const getCategories = async () => {
    const response = await fetch(url + "/wp-json/wp/v2/categories?_embed")
    const data = await response.json()
    return data.filter(i => i.count !== 0).map(category => {
        return {
            id: category.id,
            name: category.name,
            slug: category.slug
        }
    })
}

export default getCategories