const db = require('../../../config/db')

class PostRepository {
    async save(post) {
        const query = "INSERT INTO post (id, title, content, created_at) VALUES (?, ?, ?)";
        const values = [post.id, post.title, post.content, post.created_at];
        db.query(query, values)
    }

    async findById(postId) {
        const query = 'SELECT * FROM post WHERE id = ?';
        const [rows] = await db.query(query, [postId]);
        return rows[0]; // 첫 번째 행 반환
    }

    async findBySearchValue(searchValue) {
        const query = 'SELECT * FROM post WHERE title = ?';
        const [rows] = await db.query(query, [searchValue]);
        return rows; // 첫 번째 행 반환
    }
}

module.exports = new PostRepository();
