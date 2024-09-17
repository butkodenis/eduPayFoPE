import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import useSWR, { mutate } from 'swr';

import axios from 'axios';
import { Button, IconButton, Box, Modal } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import FormStudents from '../forms/FormStudents';

const TableStudents = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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

  // console.log(students);

  const rows = students.map((student) => ({
    id: student.id,
    studentFirstName: student.firstName,
    studentLastName: student.lastName,
    studentMiddleName: student.middleName,
    studentPhone: student.phone,
    studentPassportSeries: student.passportSeries,
    studentPassportNumber: student.passportNumber,
    studentPassportDate: student.passportDate,
    studentPassportLocation: student.passportLocation,
  }));

  const handleEdit = (student) => {
    console.log('Edit student:', student);
    setSelectedStudent(student);
    // Здесь можно добавить логику для редактирования
    setOpenModal(true);
  };

  const handleDelete = async (id) => {
    try {
      // Отправляем DELETE-запрос на сервер для удаления студента
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/api/student/delete/${id}`
      );

      // После удаления обновляем данные
      mutate(`${import.meta.env.VITE_BASE_URL}/api/students`);

      console.log(`Student with id ${id} deleted`);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const columns = [
    { field: 'studentLastName', headerName: 'Прізвище', width: 150 },
    { field: 'studentFirstName', headerName: "Ім'я", width: 150 },
    { field: 'studentMiddleName', headerName: 'По-батькові', width: 150 },
    {
      field: 'studentPassportSeries',
      headerName: 'Серія паспорта',
      width: 100,
    },
    {
      field: 'studentPassportNumber',
      headerName: 'Номер паспорта',
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
      width: 300,
      renderCell: (params) => (
        <>
          <IconButton
            color="primary"
            size="small"
            onClick={() => handleEdit(params.row)}
            style={{ marginRight: 8 }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 750, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        pagination
        pageSizeOptions={[10, 25, 50]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        initialState={{
          sorting: {
            sortModel: [{ field: 'studentLastName', sort: 'asc' }],
          },
        }}
      />
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
          }}
        >
          <FormStudents
            studentData={selectedStudent}
            isEditMode
            handleCloseModal={handleCloseModal}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default TableStudents;
