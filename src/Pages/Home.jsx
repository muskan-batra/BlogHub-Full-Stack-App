import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Home = () => {
   const posts = [
    {
      id: 1,
      title: "Brown Cat",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://media.istockphoto.com/id/962862864/photo/persian.jpg?s=1024x1024&w=is&k=20&c=1TYKZr-RTZbaVvTpCTTvXOGRN-kQuwN4RYqiJ9hLXLY=",
    },
    {
      id: 2,
      title: "White Cat",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://media.istockphoto.com/id/1409515292/photo/white-persian-cat.jpg?s=1024x1024&w=is&k=20&c=7aU1MlD0CFA3CeZOEwJpN-Zm-VEDlk7HW1h4Nis2N7s=",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://media.istockphoto.com/id/1335991010/photo/white-persian-cat-at-home.jpg?s=1024x1024&w=is&k=20&c=U7fraJ7y3JqmQNQR6Xo2r_6UTuGTB2L6VVlW2zK78cw=",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://media.istockphoto.com/id/1016698044/photo/angry-looking-persian-cat-at-home.jpg?s=1024x1024&w=is&k=20&c=iFIhBFQZIitN9d1lT1RhO0Mp5YhS0AgJMHEMsMso1Jw=",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src = {post.img} alt = "" />
              </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.title}</p>
             
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;