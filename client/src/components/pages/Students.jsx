import { Box, Typography, Button, Modal } from '@mui/material';

const Students = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'purple',
      }}
    >
      <h1>Студенти</h1>
      <Button variant="contained" color="primary">
        Додати студента
      </Button>
      <Modal open={true}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default Students;
