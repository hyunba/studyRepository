import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justipy-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    background-color: black;
    height: 80px;
    font-size: 14px;
    padding: 20px 60px;
    color: white;
`;

const Col = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.svg`
    margin-right: 50px;
    width: 95px;
    height: 25px;
`;

const Items = styled.ul`
    display: flex;
    align-items: center;
`;

const Item = styled.li`
    margin-right: 20px;
`;

function Header() {
    return (
        <Nav>
            <Col>
                <Logo />
                <Items>
                    <Item>Home</Item>
                    <Item>Tv Shows</Item>
                </Items>
            </Col>
            <Col>
                <button>search</button>
            </Col>
        </Nav>
    );
}

export default Header;