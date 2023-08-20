import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "The Top 10 Tools Every Full Stack Developer Should Master in 2023",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023.png",
    link: "https://www.guvi.in/blog/top-full-stack-developer-tools/",
    description: "As a full stack developer, having the right set of tools is crucial for your",
    date: "5 August 2023",
    comments: "No Comments"
  },
  {
    title: "The Ultimate Guide to Real-World Full Stack Development Applications",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications.png",
    link: "https://www.guvi.in/blog/top-must-know-full-stack-development-applications/",
    description: "Full stack development has become increasingly popular in recent years, with companies seeking professionals who",
    date: "5 August 2023",
    comments: "No Comments"
  },
  {
    title: "Best Ways to Learn Full Stack Development in 2023",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development.webp",
    link: "https://www.guvi.in/blog/best-ways-to-learn-full-stack-development/",
    description: "Full stack development is and will be a promising and an in-demand career in the",
    date: "4 August 2023",
    comments: "No Comments"
  },
  {
    title: "How Long Would It Take to Be a Full Stack Developer?",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-6.png",
    link: "https://www.guvi.in/blog/top-skills-to-become-a-full-stack-developer/",
    description: "Have you ever wondered how much time it would take to become a skilled Full",
    date: "4 August 2023",
    comments: "No Comments"
  },
  {
    title: "Top Full Stack Development Webinars and Workshops",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Full-Stack-Development-Webinars-and-Workshops.jpg",
    link: "https://www.guvi.in/blog/top-full-stack-development-webinars-and-workshops/",
    description: "Are you keen to elevate your web development skills and master the art of Full",
    date: "29 July 2023",
    comments: "No Comments"
  },
  {
    title: "The Future & Scope of Full Stack Developers in India",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/24746653_7002417-1-scaled.jpg",
    link: "https://www.guvi.in/blog/the-future-scope-of-full-stack-developers-in-india/",
    description: "Have you ever wondered about the future of full stack developers in India? These talented",
    date: "27 July 2023",
    comments: "No Comments"
  }
];

export default function Fullstack() {
  return (
    <div className="container">
      <div className="row g-4">
        {cardData.map((card, index) => (
          <div className="col-lg col-md-6" key={index}>
            <div className="card h-100">
              <div>
                <Link className="nav-link" to={card.link}>
                  <img src={card.image} className="card-img-top" alt="..." />
                </Link>
              </div>
              <div className="card-body">
                <p className="card-title">
                  <Link className="nav-link" to={card.link}>
                    {card.title}
                  </Link>
                </p>
                <p className="card-text">{card.description}</p>
                <p>
                  <Link className="nav-link read" to={card.link}>
                    READ MORE »
                  </Link>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary d-inline-flex w-100 text-align-left">
                  {card.date} <ul><li>{card.comments}</li></ul>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
