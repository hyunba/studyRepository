const BASE_URL = `https://api.coinpaprika.com/v1`

// react query를 사용하기 위해서는 fetcher 함수를 만들어야 한다.
// 이 함수는 json data를 return 해야한다. async 함수로 만든다.
export async function fetchCoins() {
    const response = await fetch(`${BASE_URL}/coins`); // API의 response를 받기 위해 await 사용
    const json = await response.json();
    
    return json;

    // 오래된 다른 방법
    // export function fetchCoins() {
    // return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    //   response.json()
    //);
    //}
}

export async function fetchCoinInfo(coinId:string){
    const response = await fetch(`${BASE_URL}/coins/${coinId}`);
    const json = await response.json();
    
    return json;
}

export async function fetchCoinTickers(coinId:string){
    const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
    const json = await response.json();
    
    return json;
}

export async function fetchCoinHistory(coinId:string){
    const endDate = Math.floor(Date.now() / 1000); // 2.8 -> 2 처럼 내림처리해준다. 반대로 ceil이 있다. ceil = 올림
    const startDate = endDate - 60* 60 * 24 * 7; // 이 계산식은 일주일 전을 나타냄
    const response = await fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`);
    const json = await response.json();
    
    return json;
}