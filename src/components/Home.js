import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default ({ data, page }) => {
  const [currentPage, setCurrentPage] = useState(page);

  // Change page
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  // Get current posts
  const postsPerPage = 8;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // test:
  // data = data.slice(0, 50);

  const currentVideos = data.slice(indexOfFirstPost, indexOfLastPost);
  const totalPage = Math.ceil(data.length / postsPerPage);

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          display: `flex`,
          justifyContent: `center`
        }}
      >
        <div>共 {data.length} 部</div>
      </div>
      <div className="video-container">
        {currentVideos ? (
          currentVideos.map(d => <VideoPreview key={d.title} data={d} />)
        ) : (
          <div>No video...</div>
        )}
      </div>

      <Pagination currentPage={currentPage} totalPage={totalPage} />
    </>
  );
};

const Pagination = ({ currentPage, totalPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="text-center">
      <ul className="pagination justify-content-center flex-wrap">
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item${currentPage === number ? " active" : ""}`}
          >
            <Link to={`/page/${number}`} className="page-link">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const VideoPreview = ({ data }) => {
  const { title, add_time, views, favorites, duration, img_src } = data;
  return (
    <>
      <div className="video">
        <Link to={`/video/${title}`}>
          <div className="image-container">
            <img src={img_src} className="image" alt="" />
          </div>
        </Link>
        <div>{title}</div>
        <div style={{ color: `#666`, fontSize: `12px` }}>
          <div>添加时间: {add_time}</div>
          <div>时长: {duration}</div>
          <div>查看: {views}</div>
          <div>收藏: {favorites}</div>
        </div>
      </div>
    </>
  );
};
