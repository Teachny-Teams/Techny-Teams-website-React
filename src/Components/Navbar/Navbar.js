import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  background: url(".../Images/background.gif") no-repeat top center;
  color:black;
  font-size:1.5rem;
  font-weight:bold;
  background-size: cover !important;
  -webkit-background-size: cover !important;
  width: 100;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Techny Teams</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
