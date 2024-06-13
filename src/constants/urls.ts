const baseUrl = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: {
        base: '/users',
        byId: (id: number) => urls.users.base + '/' + id,
    },
    posts: {
        base: '/posts',
        byId: (id: number) => urls.posts.base + '/' + id,
    }
}

export {
    baseUrl, urls
}