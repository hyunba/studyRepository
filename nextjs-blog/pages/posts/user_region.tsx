import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Section, ChartContainer } from "../components/styled";
import { UserInterface } from "../components/types";
import uData from './dummy_data_for_test.json';


export default function App() {
    const [userData, setUserData] = useState<UserInterface[]>([]);
    useEffect(() => {
      setUserData(uData);
    }, []);

    return(
        <ChartContainer>
            <Section>
                <h2>지역별 유저 및 레벨 그래프</h2>
                    <ReactApexChart type="bar" series={[
                        {name: "us", data: userData?.map(e=> e.country ==="us" ? e.lv : null) },
                        {name: "korea", data: userData?.map(e=> e.country ==="kr" ? e.lv : null) },
                        {name: "japen", data: userData?.map(e=> e.country ==="jp" ? e.lv : null) },
                        {name: "china", data: userData?.map(e=> e.country ==="cn" ? e.lv : null) },
                        {name: "vietnam", data: userData?.map(e=> e.country ==="vn" ? e.lv : null) },
                        ]} options={{ chart: { toolbar:{show:false}}, grid:{show:false}, yaxis:{show:false}}}/>
            </Section>
        </ChartContainer>
    )
}