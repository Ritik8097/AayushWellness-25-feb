// PageSkeleton.js
import React from "react";
import "./PageSkeleton.css";

const PageSkeleton = () => {
  return (
    <>
    <div className="skeleton-page">
      <div className="skeleton-container">
        {/* Left column for image */}
        <div className="skeleton-image"></div>

        {/* Right column for text/info */}
        <div className="skeleton-details">
          <div className="skeleton-title"></div>
          <div className="skeleton-price"></div>
          <div className="skeleton-paragraph"></div>
          <div className="skeleton-paragraph short"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>

      <div className="skeleton-container">
        {/* Left column for image */}
        <div className="skeleton-image"></div>

        {/* Right column for text/info */}
        <div className="skeleton-details">
          <div className="skeleton-title"></div>
          <div className="skeleton-price"></div>
          <div className="skeleton-paragraph"></div>
          <div className="skeleton-paragraph short"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PageSkeleton;
