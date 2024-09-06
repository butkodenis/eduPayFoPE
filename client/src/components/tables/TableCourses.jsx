import useSWR from 'swr';
import axios from 'axios';

import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const fetcher = (url) =>
  axios.get(url).then((response) => response.data.courses);

const TableCourses = () => {
  const { data: courses, error } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/api/courses`,
    fetcher
  );

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!courses) {
    return <p>Loading...</p>;
  }

  console.log(courses);

  const columns = [
    { field: 'name', headerName: 'Курс', width: 450 },
    { field: 'department', headerName: 'Кафедра', width: 400 },
    { field: 'price', headerName: 'Price', type: 'number' },
    { field: 'points', headerName: 'Points', type: 'number' },
    { field: 'typeCourse', headerName: 'Тип курсів', width: 200 },
    { field: 'date_start', headerName: 'Початок курсів' },
    { field: 'date_end', headerName: 'Закінчення курсів' },
  ];

  const rows = courses.map((course) => ({
    id: course.id,
    name: course.name,
    department: course.department,
    price: course.price,
    points: course.points,
    typeCourse: course.typeCourse,
    date_start: course.date_start,
    date_end: course.date_end,
  }));

  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[20]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default TableCourses;
