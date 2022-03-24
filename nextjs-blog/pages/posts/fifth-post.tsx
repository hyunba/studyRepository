import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Section, Container } from "../components/styled";
import { UserInterface } from "../components/types";
import uData from './dummy_data_for_test.json';


export default function App() {
    const [userData, setUserData] = useState<UserInterface[]>([]);
    const [userRegion, setUserRegion] = useState(0);
    const [userRegion2, setUserRegion2] = useState(0);
    useEffect(() => {
      setUserData(uData);
    }, []);
    const region = userData?.map(e=> e.country === "us") ? setUserRegion(prev => prev + 1) : setUserRegion2(prev => prev + 1);
    console.log(userData?.map(e=> e.country === "us"));
    return(
        <Container>
            <Section>
            <h2>그래프</h2>
                <ReactApexChart type="line" series={[
                    {name: "hi", data: region}, 
                    ]} options={{ chart: {width:500, height: 500,}}}/>
            </Section>
        </Container>
    )
}