import {useContext, useEffect, useState} from "react";
import axios from "axios";
import { GlobalSearchContext } from '../Layout';


type Post = {
    id: string,
    title: string,
    content: string,
    created_at: string
}


const PostList = () => {
    const { searchValue } = useContext(GlobalSearchContext);

   const [posts, setPosts] = useState<Post[]>([]);

   const findPostList = async () => {
       axios.get('/api/posts/' + searchValue)
           .then(response => {
               setPosts(response.data)
           })
           .catch(error => {
               console.error('에러 발생:', error);
           });
   }

   useEffect(() => {
       findPostList();
   }, [searchValue])

    return (
        <section className="post-list">
            {posts.map((post, index) => (
                <div className="post" key={index}>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-content">{post.content}</p>
                    <div className="post-footer">
                        <span>{post.created_at}</span>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default PostList;
