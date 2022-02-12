import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import { Switch, Route, useLocation, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import Chart from "./Chart";
import Price from "./Price";

interface RouteParams {
    coinId: string;
}

interface RouteState {
    name: string;
}

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      };
    };
}

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

const Title = styled.h1`
    font-size: 28px;
    color: ${(props) => props.theme.accentColor}
`;

const Loader = styled.span`
    text-align: center;
    display: block;
    font-size: 30px;
    padding: 20px;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${props => props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

const BackSpace = styled.button`
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin: 20px 0px;
    font-size: 13px;
    display: flex;
    text-transform: uppercase;
    color: ${(props) => props.theme.textColor};
`

function Coin() {
    
    const { coinId } = useParams<RouteParams>();
    const { state }= useLocation<RouteState>();
    const priceMatch = useRouteMatch(`/:coinId/price`);
    const chartMatch = useRouteMatch(`/:coinId/chart`);
    const {isLoading: infoLoading, data: infoData} = useQuery<InfoData>(["info", coinId], () => fetchCoinInfo(coinId));
    const {isLoading: tickersLoading, data: tickersData} = useQuery<PriceData>(["tickers", coinId], () => fetchCoinTickers(coinId));
/*    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState<InfoData>();
    const [priceInfo, setPriceInfo] = useState<PriceData>();
    //useRouteMatch는 특정한 URL에 있는지의 여부를 알려주는 Hook이다.
    useEffect(() => {
        (async () => { //const json = await response.json() 의 캡슐화 버전
            const infoData = await (
                await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
            ).json();
            const priceData = await (
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json();
        setInfo(infoData);
        setPriceInfo(priceData);
        setLoading(false);
        })();
    }, [coinId]); */
// useEffect에서 [] 빈값으로 두게되면 한번만 실행하는데 [coinId]를 넣게되면 coinId 값이 변경될때마다 변하게된다.
    const loading = infoLoading || tickersLoading;
// Helmet은 무엇을 render하던 문서의 head로 보내주는 역할을 한다. title을 넣었으니 문서의 head로 보내준다.
    return (
        <Container>
            <Helmet>
                <title>
                    {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
                </title>
            </Helmet>
            <Header>
                <Title>
                    {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
                </Title>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : (
            <>
            <Overview>
                <OverviewItem>
                    <span>Rank:</span>
                    <span>{infoData?.rank}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Symbol:</span>
                    <span>${infoData?.symbol}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Price:</span>
                    <span>{tickersData?.quotes.USD.price.toFixed(2)}</span>
                </OverviewItem>
            </Overview>
            <Description>{infoData?.description}</Description>
            <Overview>
                <OverviewItem>
                    <span>Total Suply:</span>
                    <span>{tickersData?.total_supply}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Max Supply:</span>
                    <span>{tickersData?.max_supply}</span>
                </OverviewItem>
            </Overview>
            <Tabs>
                <Tab isActive={chartMatch !== null}>
                    <Link to={`/${coinId}/chart`}>Chart Link</Link><br />
                </Tab>
                <Tab isActive={priceMatch !== null}>
                    <Link to={`/${coinId}/price`}>Price Link</Link>
                </Tab>
            </Tabs>
            <Switch>
                <Route path={`/${coinId}/price`}>
                    <Price coinId={coinId} tickersData={tickersData}/>
                </Route>
                <Route path={`/${coinId}/chart`}>                    
                    <Chart coinId = {coinId} />
                </Route>
            </Switch>
            </>
      )}
        <BackSpace>
            <Link to={{pathname:`/`}}>Back</Link>
        </BackSpace>
        </Container>
    );// API에는 state안에 name, 즉 코인들의 이름이 들어있기 때문에 로딩이 빠르다.
      // state에 ?의 의미는 state가 존재하면 name을 가져오고 없을 경우 Loading을 한다는 뜻이다.
}
export default Coin;