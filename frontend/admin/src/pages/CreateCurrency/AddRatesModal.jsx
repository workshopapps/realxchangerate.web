import { Modal, Box, Button } from '@mui/material';
// import Box from '@mui/material';
// import Button from '@mui/material';
import add from '../../assets/add.svg';
import Form from './AddRatesForm';

const ModalUi = ({ handleAddRate, handleAddRateClose, editVal, addRate }) => {
  return (
    <>
      {/* <Button
        onClick={handleAddRate}
        variant='contained'
        disableElevation
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        sx={{ height: 1 / 2 }}
      >
        <span style={{ textTransform: 'capitalize' }}>Add Rates</span>
        <img src={add} alt='add' style={{ marginLeft: '10px' }} />
      </Button> */}
      <Modal
        open={addRate}
        onClose={handleAddRateClose}
        sx={{
          height: '100vh',
          // border: '1px solid red',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '90%',
            maxWidth: '800px',
          }}
        >
          <Form handleAddRateClose={handleAddRateClose} editVal={editVal} />
        </Box>
      </Modal>
    </>
  );
};

export default ModalUi;
