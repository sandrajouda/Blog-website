import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data using Axios:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="menu">
          <h1 className="menuTitle">
            <i className="fa-solid fa-blog"></i> Blogs
          </h1>
          <div className="menuList">
            <ul>
              {data.map((post) => (
                <li key={post.id} className="menuItem">
                  <Link className="Title" to={`/post/${post.id}`}>
                    <i className="fa-solid fa-link"></i> {post.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="scroll-button" onClick={scrollToBottom}>
              <i className="fa-solid fa-angles-down"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
