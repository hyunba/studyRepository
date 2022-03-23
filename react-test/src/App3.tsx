import { useEffect, useState } from 'react';
import styled from 'styled-components';
import uData from './dummy_data_for_test.json';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
  
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserLists = styled.div`
  
`;

const Users = styled.div`
  background-color: gray;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: "#7D7D7D";
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface UserInterface {
  "data" : {
    "success": boolean; 
    "error": null;
    "result": [
      {
        "uid": string;
        "country": string;
        "created_at": string;
        "lv": number;
        "items": [
          {
            "itemId": number;
            "name": string;
            "defence": number;
          }
        ]
        "block_type": boolean;
        "pvp_rank": number;
        "reward_type": string;
        "last_stage": string;
      }
    ]
  }
};

function App() {
  //  const [userData, setUserData] = useState<UserInterface[]>([]);
  //  useEffect(() => {
  //    setUserData();
  //  }, []);
   
  return (
    <Container>
      <Header>
        <Title>userList</Title>
      </Header>
      <UserLists>
        {/* {userData.map((name) => (
          <Users key={name.uid}>
            {name.created_at}
          </Users>
        ))} */}
      </UserLists>
    </Container>
  );
}

export default App;
