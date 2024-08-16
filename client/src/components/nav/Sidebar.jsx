import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box sx={{ my: 4 }}>
      <h1>Sidebar</h1>
      <p>Welcome to the sidebar!</p>
      <Link to="/">Home</Link>
    </Box>
  );
};

export default Sidebar;
