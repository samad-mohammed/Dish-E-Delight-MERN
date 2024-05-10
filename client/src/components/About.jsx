import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About us</h1>
            <p>The only thing we're serious about is fo0D!!</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            ratione voluptates laborum deserunt in ad debitis omnis, perferendis
            quia, earum quam est nobis optio consequuntur ex tempora. Nihil
            nulla repellat ea nostrum.
          </p>
          <Link to={"/"}>
            Explore Menu <span> <HiOutlineArrowNarrowRight/> </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
