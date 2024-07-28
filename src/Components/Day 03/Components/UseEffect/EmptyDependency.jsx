import React, { useState, useEffect } from 'react';
import '../../styles/EmptyDependency.css';

function EmptyDependency() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p><i>User ID : {post.userId}</i></p>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmptyDependency;
