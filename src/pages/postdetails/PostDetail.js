import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post data');
        }
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data using fetch:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className='Container'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button>
            <Link to="/">
              <i className="fa-solid fa-backward"></i>
            </Link>
          </button>
        </>
      )}
    </div>
  );
};

export default PostDetail;
