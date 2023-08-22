import React from "react";
import './Header.css';
import blogHeader from '../assets/blogHeader.png'

export default function Header() {

    return (
        <img className="pic" src={blogHeader} alt="header" />
    )
}