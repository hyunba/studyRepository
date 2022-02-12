import styled from "styled-components";
import {  Link  } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";
//react qury는 데이터를 파괴하지 않고 캐시에 저장하기 때문에 loading이 안뜨게된다.

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
    background-color: ${(props) => props.theme.cardBgColor};
    color: ${(props) => props.theme.textColor};
    border-radius: 15px;
    margin-bottom: 10px;
    border: 1px solid white;
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
    // useQuery의 hook은 fetchCoins라는 fetcher 함수를 호출하고, fetcher 함수가 loading중이라면 react query는 알려준다.
    // useQuery가 fetcher 함수를 부르고 fetcher 함수가 끝나게되면 react query는 api.ts에 작성한 json을 {data}라는 곳에 들어가게된다.
    // react query를 사용해서 밑에서 작성한 10줄의 코드가 한줄의 코드와 동일한 기능을 하게된다.
    const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoins)

/*    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async() => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins"); // API의 response를 받기 위해 await 사용
            const json = await response.json();
            setCoins(json.slice(0, 100)); //slice를 사용함으로써 9028개의 코인이 100개 까지만 출력되게한다.
            setLoading(false); // json이 100까지 다 출력하면 false로 Loading을 끝낸다.
        })();// ()(); 이런식으로 작성하면 function이 바로 실행하게된다
    }, []); */

    //data에 slice를 직접 넣어주어서 100개 까지만 출력하게 해준다.
    //Helmet을 넣어준건 React App 이라는 홈페이지 이름을 바꿔주기 위해 사용

    const setAtom = useSetRecoilState(isDarkAtom);
    const toggleAtom = () => setAtom((prev) => !prev);

    return (
        <Container>
            <Helmet>
                <title>
                   coin tracker
                </title>
            </Helmet>
            <Header>
                <Title>Coins</Title>
                <button onClick={toggleAtom}>Toggle Mode</button>
            </Header>
            {isLoading ? (<Loader>"Loading..."</Loader>) : (
            <CoinsList>
                {data?.slice(0, 100).map((coin) => (
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