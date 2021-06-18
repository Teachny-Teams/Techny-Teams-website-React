import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul className="z-2" open={open}>
      <li className="hover-underline-animation z-2">
        <Link to="/">Home</Link>
      </li>
      <li className="hover-underline-animation z-2">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="hover-underline-animation z-2">
        <Link to="/about">About Us</Link>
      </li>
      <li className="hover-underline-animation z-2">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="hover-underline-animation z-2">
        <Link to="/projects">Projects</Link>
      </li>
    </Ul>
  );
};
export default RightNav;

