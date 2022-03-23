import { useEffect, useState } from 'react';
import uData from './dummy_data_for_test1.json';
import DataTable from 'react-data-table-component';
import { Bar } from "react-chartjs-2"
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12,1,1,3],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
    borderWidth: 1,
  };

  return (
    <Container>
      <Header>
        <Title>userList</Title>
      </Header>
      <Section>
        <h2>그래프</h2>
        <Bar options={options} data={data} />
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
