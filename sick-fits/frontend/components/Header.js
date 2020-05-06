import styled from "styled-components";
import Nav from "./Nav";
import Link from "next/link";

const Logo = styled.h1`
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  margin-left: 2rem;
  font-size: 4rem;
  a {
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.red};
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: 1px solid ${(props) => props.theme.black};
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${(props) => props.theme.lightGrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Sick Fits</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
);

export default Header;
