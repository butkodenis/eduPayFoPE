import { DataGrid } from '@mui/x-data-grid';

const TableStudents = ({ students }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'studentFirstName', headerName: "Ім'я", width: 150 },
    { field: 'studentLastName', headerName: 'Прізвище', width: 150 },
    { field: 'studentBirthDate', headerName: 'Дата народження', width: 200 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={students}
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
