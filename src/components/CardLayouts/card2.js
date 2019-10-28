import React, { useState, useEffect } from "react";
import { SkeletonCircle, SkeletonLine } from "../Skeleton";

const Card2 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  });

  let card2;
  if (loading) {
    card2 = (
      <div className="card2">
        <div className="card2__thumbnail-wrapper">
          <SkeletonLine height={200} />
        </div>
        <div className="card2__content-wrapper">
          <SkeletonLine width={50} />
          <SkeletonLine width={80} />
          <div className="card2__comments">
            <SkeletonCircle size={40} />
            <SkeletonCircle size={40} />
            <SkeletonCircle size={40} />
          </div>
        </div>
      </div>
    );
  } else {
    card2 = (
      <div className="card2">
        <div className="card2__thumbnail-wrapper">
          <img
            className="card2__thumbnail"
            src="https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181_1280.jpg"
            alt="mountains"
          />
        </div>
        <div className="card2__content-wrapper">
          <h1 className="card2__header">Lorem ipsum se un just</h1>
          <p className="card2__author">
            Added by{" "}
            <a className="card2__author-link" href="#">
              John Doe
            </a>
          </p>
          <div className="card2__comments">
            <div className="card2__profile">
              <img
                className="card2__profile-img"
                src="https://cdn.pixabay.com/photo/2016/03/23/04/01/beautiful-1274056_1280.jpg"
              />
            </div>
            <div className="card2__profile">
              <img
                className="card2__profile-img"
                src="https://cdn.pixabay.com/photo/2017/06/28/04/29/adult-2449725_1280.jpg"
              />
            </div>
            <div className="card2__profile">
              <img
                className="card2__profile-img"
                src="https://cdn.pixabay.com/photo/2015/01/12/10/44/portrait-597173_1280.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return card2;
};

export default Card2;
