import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";


const Copy = styled(Link) `
    text-decoration: none;
    color: #757575;`;


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Games-Dev © '}
        <Copy color="inherit" to="https://material-ui.com/">
          Velho da Lancha
        </Copy>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default Copyright;