class Post {
    constructor(id, title, content, nowDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.created_at = nowDate;
    }
}

module.exports = Post;
