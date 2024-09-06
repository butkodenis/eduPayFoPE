import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone Number', width: 150 },
];

const rows = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'john.doe@example.com',
    phone: '+1-555-5555',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    age: 30,
    email: 'jane.smith@example.com',
    phone: '+1-555-5556',
  },
  {
    id: 3,
    firstName: 'Paul',
    lastName: 'Jones',
    age: 28,
    email: 'paul.jones@example.com',
    phone: '+1-555-5557',
  },
  {
    id: 4,
    firstName: 'Emily',
    lastName: 'Johnson',
    age: 22,
    email: 'emily.johnson@example.com',
    phone: '+1-555-5558',
  },
  {
    id: 5,
    firstName: 'Michael',
    lastName: 'Brown',
    age: 35,
    email: 'michael.brown@example.com',
    phone: '+1-555-5559',
  },
  {
    id: 6,
    firstName: 'Linda',
    lastName: 'Davis',
    age: 26,
    email: 'linda.davis@example.com',
    phone: '+1-555-5560',
  },
  {
    id: 7,
    firstName: 'Robert',
    lastName: 'Miller',
    age: 40,
    email: 'robert.miller@example.com',
    phone: '+1-555-5561',
  },
  {
    id: 8,
    firstName: 'Laura',
    lastName: 'Wilson',
    age: 32,
    email: 'laura.wilson@example.com',
    phone: '+1-555-5562',
  },
  {
    id: 9,
    firstName: 'David',
    lastName: 'Moore',
    age: 29,
    email: 'david.moore@example.com',
    phone: '+1-555-5563',
  },
  {
    id: 10,
    firstName: 'Susan',
    lastName: 'Taylor',
    age: 24,
    email: 'susan.taylor@example.com',
    phone: '+1-555-5564',
  },
  {
    id: 11,
    firstName: 'Chris',
    lastName: 'Anderson',
    age: 27,
    email: 'chris.anderson@example.com',
    phone: '+1-555-5565',
  },
  {
    id: 12,
    firstName: 'Jessica',
    lastName: 'Thomas',
    age: 34,
    email: 'jessica.thomas@example.com',
    phone: '+1-555-5566',
  },
  {
    id: 13,
    firstName: 'Daniel',
    lastName: 'Jackson',
    age: 31,
    email: 'daniel.jackson@example.com',
    phone: '+1-555-5567',
  },
  {
    id: 14,
    firstName: 'Sara',
    lastName: 'White',
    age: 33,
    email: 'sara.white@example.com',
    phone: '+1-555-5568',
  },
  {
    id: 15,
    firstName: 'Tom',
    lastName: 'Harris',
    age: 38,
    email: 'tom.harris@example.com',
    phone: '+1-555-5569',
  },
  {
    id: 16,
    firstName: 'Anna',
    lastName: 'Martin',
    age: 23,
    email: 'anna.martin@example.com',
    phone: '+1-555-5570',
  },
  {
    id: 17,
    firstName: 'Steven',
    lastName: 'Lee',
    age: 36,
    email: 'steven.lee@example.com',
    phone: '+1-555-5571',
  },
  {
    id: 18,
    firstName: 'Kate',
    lastName: 'Walker',
    age: 39,
    email: 'kate.walker@example.com',
    phone: '+1-555-5572',
  },
  {
    id: 19,
    firstName: 'James',
    lastName: 'Hall',
    age: 21,
    email: 'james.hall@example.com',
    phone: '+1-555-5573',
  },
  {
    id: 20,
    firstName: 'Victoria',
    lastName: 'Young',
    age: 37,
    email: 'victoria.young@example.com',
    phone: '+1-555-5574',
  },
];

const TableTest = () => {
  return (
    <div style={{ height: 600 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default TableTest;
