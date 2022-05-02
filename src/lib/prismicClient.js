import * as prismic from '@prismicio/client'

const repoName = 'zwebdigital'
const accessToken = ''

const routes = [
    {
        type: 'page',
        // type: 'home_card',
        path: '/:',
        // path: '/:lib/HomeHandler'
    },
]

const createClient = (fetch) => {
    const clientOptions = {
        fetch,
        accessToken,
        routes,
    }
    const client = prismic.createClient(repoName, clientOptions)
    return client
}

export default createClient