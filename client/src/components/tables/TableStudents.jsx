import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

import useSWR from 'swr';
import axios from 'axios';

const TableStudents = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data.students);

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

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

  const rows = students.map((student) => ({
    id: student.id,
    studentFirstName: student.firstName,
    studentLastName: student.lastName,
    studentMiddleName: student.middleName,
    studentPhone: student.phone,
    studentPassportSeriesAndNumber: `${student.passportSeries} ${student.passportNumber}`,
    studentPassportDate: student.passportDate,
    studentPassportLocation: student.passportLocation,
  }));

  const columns = [
    { field: 'studentFirstName', headerName: "Ім'я", width: 150 },
    { field: 'studentLastName', headerName: 'Прізвище', width: 150 },
    { field: 'studentMiddleName', headerName: 'По-батькові', width: 150 },
    {
      field: 'studentPassportSeriesAndNumber',
      headerName: 'Серія та номер паспорта',
      width: 100,
    },
    { field: 'studentPassportDate', headerName: 'Дата видачі', width: 100 },
    {
      field: 'studentPassportLocation',
      headerName: 'Місце видачі',
      width: 200,
    },
    { field: 'studentPhone', headerName: 'Телефон', width: 150 },
    {
      field: 'actions',
      headerName: 'Дії',
      width: 150,
    },
  ];

  return (
    <div style={{ height: 750, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        pagination
        pageSizeOptions={[10, 25, 50]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </div>
  );
};

export default TableStudents;
