const Post = require('../domain/Post');
const postRepository = require('../infrastructure/PostRepository');

class PostService {
    async createPost(title, content) {
        const post = new Post(Date.now(), title, content, Date.now());
        await postRepository.save(post);
        return post;
    }

    async findPost(id) {
        return await postRepository.findById(id);
    }

    async findPostList(searchValue) {
        return await postRepository.findBySearchValue(searchValue);
    }
}

module.exports = new PostService();
