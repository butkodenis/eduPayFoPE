import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

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

  return (
    <table>
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Department</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td>{course.name}</td>
            <td>{course.department}</td>
            <td>{course.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCourses;
