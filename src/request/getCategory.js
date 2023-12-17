import {url} from "../config/server";

const getCategory = async ({id}) => {
    const response = await fetch(url + "/wp-json/wp/v2/categories/" + id)
    const data = await response.json()
    return data
}

export default getCategory