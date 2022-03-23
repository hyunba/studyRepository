import { useEffect, useState } from 'react';
import styled from 'styled-components';
import uData from './dummy_data_for_test.json';
import uData1 from './dummy_data_for_test1.json';
import DataTable from "react-data-table-component";
import ApexCharts from 'react-apexcharts';

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

// const userData = [
//   {
//     "uid": "724860",
//     "country": "kr",
//     "created_at": "2022-03-20 06:29:34",
//     "lv": 47,
//     "items": [
//       {
//         "itemId": 3,
//         "name": "armor",
//         "defence": 181
//       },
//       {
//         "itemId": 2,
//         "name": "shield",
//         "defence": 1
//       }
//     ],
//     "block_type": false,
//     "pvp_rank": 132,
//     "reward_type": "NORMAL",
//     "last_stage": "7-9"
//   },
//   {
//     "uid": "805805",
//     "country": "us",
//     "created_at": "2022-03-05 07:56:32",
//     "lv": 38,
//     "items": [
//       {
//         "itemId": 8,
//         "name": "wand",
//         "magic": 53
//       },
//       {
//         "itemId": 3,
//         "name": "armor",
//         "defence": 37
//       }
//     ],
//     "block_type": false,
//     "pvp_rank": 152,
//     "reward_type": "NORMAL",
//     "last_stage": "2-1"
//   },
// ];

interface UserInterface2 {
  "data" : {
    "success": boolean; 
    "error": null;
    "result": [
      {
        "uid": number;
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

interface UserInterface {
  "data" : {
    "success": boolean; 
    "error": null;
    "result": 
      {
        "uid": string
        "created_at": string
      }
      
    "country": string;
    "lv": number;
    "items": []; 
    "itemId": number;
    "name": string;
    "defence": number;  
    "block_type": boolean;
    "pvp_rank": number;
    "reward_type": string;
    "last_stage": string;
    }
  };

// const columns = [
//   {
//     name: "key",
    
//     sortable: true
//   },
//   {
//     name: "lv",
    
//     sortable: true
//   },
//   {
//     name: "Runtime (m)",
    
//     sortable: true,
//     right: true
//   }
// ];

function App() {
   const [userData, setUserData] = useState<UserInterface[]>([]);
   useEffect(() => {
    //  setUserData();
     (async () => {
       const response = await fetch("http://localhost:4000/data");
       const json = await response.json();
       setUserData(json);
     })();
   }, []);
   
  // const columns = [
  //   {
  //     name: "key",
  //     selctor:"uid",
  //     sortable: true
  //   },
  //   {
  //     name: "lv",
  //     selctor: "lv",
  //     sortable: true
  //   },
  //   {
  //     name: "Runtime (m)",
  //     selctor:"created_at",
  //     sortable: true,
  //     right: true
  //   }
  // ];

  return (
    <Container>
      <Header>
        <Title>userList</Title>
      </Header>
      {/* <DataTable
        title="userList"
        data={uData.data.result}
        columns ={columns}
        pagination
        selectableRows
      /> */}
    {/* <div>
      <ApexCharts
        type="line"
        series={[
          {
            name: "name",
            data: {uData?.data.result.map(uid => uid.uid)}
          },
        ]}
        options={{
          chart: {
            height: 500,
            width: 500,
          },
        }}
      />
    </div> */}
      <UserLists>
        {/* {uData.data.result.map((name)=>(
          <Users key={name.uid}>
            {name.created_at}
          </Users>
        ))} */}
        {userData.map((name) => (
          <Users key={name.data.result.uid}>
            {name.data.result.created_at}
          </Users>
        ))}
      </UserLists>
    </Container>
  );
}

export default App;
