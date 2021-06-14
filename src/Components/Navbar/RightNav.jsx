import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import './style.css'
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

// const LI = styled.li`
//   transform: translate(0%);
//   transition: 0.3s ease-out;

//   ${(props) =>
//     props.animated &&
//     css`
//       &:hover {
//         position: fixed;
//         transform: translate(0%, -30%);
//         transition: 0.3s ease-out;
//       }
//     `}
// `;
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li className='hover-underline-animation'>
        <Link to="/">Home</Link>
      </li>
      <li className='hover-underline-animation'>
        <Link to="/about">About Us</Link>
      </li>
      <li className='hover-underline-animation'>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className='hover-underline-animation'>
        <Link to="/projects">Projects</Link>
      </li>
    </Ul>
  );
};
export default RightNav;
