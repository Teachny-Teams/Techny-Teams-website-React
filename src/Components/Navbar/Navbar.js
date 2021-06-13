import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  background: #161415 url("./img.gif") no-repeat top center;
  background-size: cover !important;
  -webkit-background-size: cover !important;
  width: 100;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
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
