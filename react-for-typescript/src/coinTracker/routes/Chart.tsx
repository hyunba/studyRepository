import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface graphData {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}
function Chart({ coinId }: ChartProps) {
    const isDark = useRecoilValue(isDarkAtom);

    const {isLoading, data} = useQuery<graphData[]>(["ohlcv", coinId], () => 
        fetchCoinHistory(coinId)
    );
    return <div>{isLoading ? ("Loading chart...") : (
    <ApexChart 
        type="line" 
        series={[
            {
                name: "Price",
                data: data?.map(price => price.close),
                // map은 return하는 값으로 array를 만들어준다.
            },
        ]}
        options={{
            theme: {
                mode: isDark ? "dark": "light",
            },
            chart: {
                height: 300,
                width: 500,
                toolbar: {
                    show: false,
                },
                background: "transparent", // 배경색과 동일하게 만듬
            },
            // grid: { // apexchart에 나와있는 그래프 수정.
            //     show: false,
            // },
            yaxis: { // y축 숫자를 안보이게함.
                show: false,
            },
            xaxis: {
                axisTicks:{ show:false },
                labels: { show:false },
                type: "datetime",
                categories: data?.map(price => price.time_close),
            },
            tooltip: {
                y: {
                    formatter: (value) => `$ ${value.toFixed((2))}`
                }
            },
            stroke: {
                curve: "smooth", // 선 둥글게 하는 부분
                width: 3,
            },
        }}
    />
    )}
    </div>;
}

export default Chart;