import { useEffect, useState } from "react";
import { Container, UserLists, Users, Title } from "../components/styled";
import { UserInterface } from "../components/types";
import uData from './dummy_data_for_test.json';


export default function App() {
    const [userData, setUserData] = useState<UserInterface[]>([]);
    useEffect(() => {
      setUserData(uData);
    }, []);

    return(
        <Container>
            <Title>VIP 회원 명단</Title>
        <UserLists>
        {userData.map(name => {
            if(name.reward_type !== "NORMAL")
            return <Users key={name.uid}>{name.uid} [{name.country}] {name.created_at}</Users>
        }
        )}
      </UserLists>
      </Container>
    )
}