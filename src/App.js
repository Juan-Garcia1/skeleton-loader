import React, { useState, useEffect } from "react";
import { SkeletonLine, SkeletonCircle } from "./components/Skeleton";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  });

  let card1;
  if (loading) {
    card1 = (
      <div className="card1">
        <header className="card1__header">
          <div className="card1__profile-wrapper">
            <SkeletonCircle size={60} translucent={true} />
          </div>
          <SkeletonLine width={30} translucent={true} />
        </header>
        <p className="card1__text">
          <SkeletonLine translucent={true} />
          <SkeletonLine width={50} translucent={true} />
        </p>
      </div>
    );
  } else {
    card1 = (
      <div className="card1">
        <header className="card1__header">
          <div className="card1__profile-wrapper">
            <img
              className="card1__profile-img"
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="profile image"
            />
          </div>
          <h3 className="card1__profile-name">John Doe</h3>
        </header>
        <p className="card1__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus
          nec mi ut suscipit. Fusce blandit nec mauris vitae posuere.
        </p>
      </div>
    );
  }
  return card1;
};

export default App;
