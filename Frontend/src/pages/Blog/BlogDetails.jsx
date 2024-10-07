import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Blog1 = () => {
  const { id } = useParams(); // Ensure parameter name matches route definition
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch('/cardDes.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const foundBlog = data.blogs.find(blog => blog.blog_title === decodeURIComponent(id));
        setBlog(foundBlog);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found.</div>;

  return (
    <div>
      <h1>{blog.blog_title}</h1>
      <img src={`./../${blog.blog_image}`} alt="Blog Photo" style={{ maxWidth: '100%', height: 'auto' }} />

      <p>{blog.description}</p>
    </div>
  );
};

export default Blog1;
