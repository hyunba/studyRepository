import { useEffect, useState } from 'react';
import uData from './dummy_data_for_test.json';
import DataTable from 'react-data-table-component';
import type { UserInterface } from '../components/types';
import { Container, Header, Title } from '../components/styled';

export default function App() {
  const [userData, setUserData] = useState<UserInterface[]>([]);
  useEffect(() => {
    setUserData(uData);
  }, []);
   
  const columns = [
  {
    name: "user_name",
    selector: (row: { uid: string; }) => row.uid,
    sortable: true
  },
  {
    name: "lv",
    // selector:(row: { lv: number; }) => row.lv,
    sortable: true
  },
  {
    name: "created",
    // selector:(row: { created_at: string; }) => row.created_at,
    sortable: true,
    right: true
  }
];

  return (
    <Container>
      <Header>
        <Title>User DataTable</Title>
      </Header>
      <DataTable
        title="userList"
        data={userData}
        columns={columns}
        pagination
        selectableRows
      />
    </Container>
  );
}
