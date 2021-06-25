import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Container } from './Styles'

function Modal_(props) {

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'fixed',
      zIndex: '7 !important',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }
  }));

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] =useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button 
        type="button" 
        onClick={handleOpen}
        style={{border: 0, background: 'transparent'}}>
        {props.button}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        style={{zIndex: '7 !important' }}>
        <Container>
          {props.children}
        </Container>
      </Modal>
    </div>
  )
}

export default Modal_;