import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import Carrinho from '../carrinho/Carrinho'
import styled from "styled-components";

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
  
    backgroundColor: '#ffffff',
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },

}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

const Barra = styled(Link) `
    text-decoration: none;`

export default function CustomizedBreadcrumbs(props) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
        <Barra to="/home">
          <StyledBreadcrumb
            label="Home 🎮"
            icon={<HomeIcon fontSize="small" />}
          />
        </Barra>
        <Barra to="/controle/produtos">
          <StyledBreadcrumb
            label="Produtos 🕹️ "  />
        </Barra>
        <Barra to="/cadastroPessoa">
          <StyledBreadcrumb
            label="Cadastro 🧙"  />
        </Barra>
        <Barra to="#">
        <StyledBreadcrumb
            label="Funcionários 🤖"
            />
            </Barra>
        <Barra to="/login">
          <StyledBreadcrumb
            label="Sair 🚪" />
        </Barra>
      
      <Carrinho total={props.carrinho} />
    </Breadcrumbs>
  );
}

