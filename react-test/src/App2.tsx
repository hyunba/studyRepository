import { useEffect, useState } from 'react';
import uData from './dummy_data_for_test1.json';
import DataTable from 'react-data-table-component';
import ApexCharts from 'react-apexcharts';
import type { UserInterface } from './components/types';
import { Container, Header, Title, Section, UserLists, Users } from './components/styled';

function App() {
  const [userData, setUserData] = useState<UserInterface[]>([]);
  useEffect(() => {
    setUserData(uData);
  }, []);
   
  const columns = [
  {
    name: "key",
    selector: (row: { uid: string; }) => row.uid,
    sortable: true
  },
  {
    name: "lv",
    selector:(row: { lv: number; }) => row.lv,
    sortable: true
  },
  {
    name: "Runtime (m)",
    selector:(row: { created_at: string; }) => row.created_at,
    sortable: true,
    right: true
  }
];

  return (
    <Container>
      <Header>
        <Title>userList</Title>
      </Header>
      <Section>
        <h2>그래프</h2>
        <ApexCharts type="bar" series={[{name: "hi", data:[1,2,3,4,5]}, {name: "hsa", data:[3,6,7,4,5]},]} options={{chart: {width:500, height: 500,}}}/>
      </Section>
      <DataTable
        title="userList"
        data={userData}
        columns={columns}
        pagination
        selectableRows
      />
      <UserLists>
        {userData.map((name) => (
          <Users key={name.uid}>
            {name.created_at}
          </Users>
        ))}
      </UserLists>
    </Container>
  );
}

export default App;
