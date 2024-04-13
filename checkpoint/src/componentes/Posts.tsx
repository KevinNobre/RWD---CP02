import React, { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="text-xl">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
