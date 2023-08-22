import React from "react";
import { Link } from "react-router-dom";
import YellowBlueIllustrationBusinessBlogBanner from '../assets/Images/CyberSecurity/YellowBlueIllustrationBusinessBlogBanner.png';
import cybersecuity from '../assets/Images/CyberSecurity/cybersecuity.gif';
import BluePurple from '../assets/Images/CyberSecurity/BluePurple.webp';
import TealIllustration from '../assets/Images/CyberSecurity/TealIllustration.webp';
import coding from '../assets/Images/CyberSecurity/coding.webp';
import TypesofCyberSecurity from '../assets/Images/CyberSecurity/TypesofCyberSecurity.jpg';

const cardData = [
  {
    title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    image: YellowBlueIllustrationBusinessBlogBanner,
    link: "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/",
    description: "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
    date: "27 December 2022",
    comments: "No Comments"
  },
  {
    title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    image: cybersecuity,
    link: "https://www.guvi.in/blog/what-is-cybersecurity/",
    description: "Look around today, you will witness that we are more reliant on technology and devices",
    date: "20 December 2022",
    comments: "No Comments"
  },
  {
    title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
    image: BluePurple,
    link: "https://www.guvi.in/blog/best-ethical-hacking-books/",
    description: "Did you know that according to the University of Maryland hackers attack every 39 seconds",
    date: "21 November 2022",
    comments: "No Comments"
  },
  {
    title: "8 Different Types of Cybersecurity and Threats Involved",
    image: TealIllustration,
    link: "https://www.guvi.in/blog/types-of-cybersecurity/",
    description: "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
    date: "9 November 2022",
    comments: "No Comments"
  },
  {
    title: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
    image: coding,
    link: "https://www.guvi.in/blog/coding-for-cybersecurity/",
    description: "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
    date: "22 June 2022",
    comments: "No Comments"
  },
  {
    title: "Top 7 Cyber Security Attacks in Real Life",
    image: TypesofCyberSecurity,
    link: "https://www.guvi.in/blog/cyber-security-attacks-in-real-life/",
    description: "Cyber security attacks are the type of actions that are designed to destroy, steal, modify,",
    date: "10 June 2022",
    comments: "No Comments"
  }
];

export default function Cybersecurity() {
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
