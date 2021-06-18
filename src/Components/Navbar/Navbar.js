import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  background: url(".../Images/background.gif") no-repeat top center;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  background-size: cover !important;
  -webkit-background-size: cover !important;
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  top: 0;
  right: 0;
  position: fixed;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  /* padding-bottom: 55px; */
  z-index:5 ;
  background-blend-mode: hue;
  backdrop-filter: blur(10px);
  /* margin-bottom: 60px;
  padding-bottom: 60px; */
`;

const Navbar = () => {
  return (
    <Nav >
      <div className="logo z-2 " ><p>Techny Teams</p></div>
      <Burger className=' z-6' />
    </Nav>
  );
};

export default Navbar;
