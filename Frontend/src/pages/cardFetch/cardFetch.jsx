import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import './cardFetchStyle.css';

const CardFetch = () => {
  const [card, setCard] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const blogPerPage = 4;

  const blogPage = useRef(null);
  const animationBlog = useInView(blogPage);

  const fetchData = async () => {
    try {
      const response = await fetch('/cardDes.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCard(data.blogs); 
      setMaxPage(Math.ceil(data.blogs.length / blogPerPage));
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const paginatedCard = () => {
    const startIndex = (currPage - 1) * blogPerPage;
    const endIndex = startIndex + blogPerPage;
    return card.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    if (currPage < maxPage) {
      setCurrPage(currPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  return (
    <div className='blogPage' ref={blogPage} style={{ background: animationBlog ? 'white' : '#b9b8b8ca', transition: 'all 2s' }}>
      <div className="blogTitle">
        <h2>Our Blogs</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum unde esse voluptatum odit. Sequi a vel voluptatibus eius, sunt saepe.</p>
      </div>
      <div className="blogCards">
        {paginatedCard().map((item) => (
          <Link to={`/blog/${encodeURIComponent(item.blog_title)}`} className="blogCard" key={item.blog_title}>
            <div className="blogImg">
              <img src={item.blog_image} alt="blog Photo" className='blogImage' />
            </div>
            <div className="blogText">
              <h3>{item.blog_title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currPage === 1}>
          Previous
        </button>
        <span>{currPage} of {maxPage}</span>
        <button onClick={handleNextPage} disabled={currPage === maxPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardFetch;
