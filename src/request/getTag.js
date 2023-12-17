import {url} from "../config/server";

const getTags = async ({id = ""}) => {
    const response = await fetch(url + "/wp-json/wp/v2/tags/" + id)
    const data = await response.json()
    return data
}

export default getTags