import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Section, Container } from "../components/styled";
import { UserInterface } from "../components/types";
import uData from './dummy_data_for_test.json';


export default function App() {
    const [userData, setUserData] = useState<UserInterface[]>([]);
    useEffect(() => {
      setUserData(uData);
    }, []);
    return(
        <Container>
            <Section>
            <h2>그래프</h2>
                <ReactApexChart type="line" series={[{name: "hi", data:userData.map(e=>{
                    if(e.reward_type !== "VVIP")
                        return e.uid;
             }) 
             }]} options={{chart: {width:500, height: 500,}}}/>
            </Section>
        </Container>
    )
}