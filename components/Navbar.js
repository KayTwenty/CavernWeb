import styled from 'styled-components';
import Link from 'next/link'

const Nav = styled.nav`
    height: 80px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled.a`
    padding: 0rem 2rem;
`;

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href='/' passHref>
                    <StyledLink>Midnight Cavern</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/' passHref>
                    <StyledLink>Home</StyledLink>
                </Link>
                <Link href='/livedemo' passHref>
                    <StyledLink>Live Demo</StyledLink>
                </Link>
                <Link href='/features' passHref>
                    <StyledLink>Features</StyledLink>
                </Link>
                <Link href='/about' passHref>
                    <StyledLink>About</StyledLink>
                </Link>
            </div>
        </Nav>
    );
};

export default Navbar
