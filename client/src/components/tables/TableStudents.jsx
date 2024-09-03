import { DataGrid } from '@mui/x-data-grid';

import useSWR from 'swr';
import axios from 'axios';

const TableStudents = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data.students);

  const { data: students, error } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/api/students`,
    fetcher
  );

  if (error) {
    return <p>{error.message}</p>;
  }
  if (!students) {
    return <p>Loading...</p>;
  }

  console.log(students);

  const columns = [
    { field: 'studentFirstName', headerName: "Ім'я", width: 150 },
    { field: 'studentLastName', headerName: 'Прізвище', width: 150 },
    { field: 'studentMiddleName', headerName: 'По-батькові', width: 150 },
    { field: 'studentPhone', headerName: 'Телефон', width: 150 },
    { field: 'studentPassportDate', headerName: 'Дата видачі', width: 200 },
    {
      field: 'studentPassportSeries',
      headerName: 'Серія паспорту',
      width: 120,
    },
    {
      field: 'studentPassportNumber',
      headerName: 'Номер паспорту',
      width: 200,
    },
    {
      field: 'studentPassportLocation',
      headerName: 'Місце видачі',
      width: 200,
    },
  ];

  const rows = students.map((student) => ({
    id: student.id,
    studentFirstName: student.firstName,
    studentLastName: student.lastName,
    studentMiddleName: student.middleName,
    studentPhone: student.phone,
    studentPassportDate: student.passportDate,
    studentPassportSeries: student.passportSeries,
    studentPassportNumber: student.passportNumber,
    studentPassportLocation: student.passportLocation,
  }));

  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default TableStudents;
