import styled from "styled-components";
import {  Link  } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        display: flex;
        padding: 20px;
        transition: color 0.3s ease-in;
        align-items: center;
    }
    &:hover {
        a{
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor}
`;

const Loader = styled.span`
    text-align: center;
    display: block;
    font-size: 30px;
    padding: 20px;
`;

const Img = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;

interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async() => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins"); // API의 response를 받기 위해 await 사용
            const json = await response.json();
            setCoins(json.slice(0, 100)); //slice를 사용함으로써 9028개의 코인이 100개 까지만 출력되게한다.
            setLoading(false); // json이 100까지 다 출력하면 false로 Loading을 끝낸다.
        })();// ()(); 이런식으로 작성하면 function이 바로 실행하게된다
    }, []);
    return (
        <Container>
            <Header>
                <Title>Coins</Title>
            </Header>
            {loading ? (<Loader>"Loading..."</Loader>) : (
            <CoinsList>
                {coins.map((coin) => (
                    <Coin key={coin.id}>
                        <Link to={{
                            pathname:`/${coin.id}`,
                            state: { name: coin.name },    
                        }}>
                            <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                                {coin.name} &rarr;</Link>
                    </Coin>
                ))}
            </CoinsList>
            )}
        </Container>
    );
}
export default Coins;