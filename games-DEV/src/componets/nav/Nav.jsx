import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import Carrinho from '../carrinho/Carrinho'

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


export default function CustomizedBreadcrumbs(props) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/home">
        <StyledBreadcrumb
          label="Home 🎮"
          icon={<HomeIcon fontSize="small" />}
        />
      </Link>
      <Link to="/controle/produtos">
        <StyledBreadcrumb
          label="Produtos 🕹️ "  />
      </Link>
      <Link to="/cadastroPessoa">
        <StyledBreadcrumb
          label="Cadastro 🧙"  />
      </Link>
      <Link to="/controle/funcionario">
        <StyledBreadcrumb
          label="Funcionários 🤖"
          />
      </Link>
      <Link to="/">
        <StyledBreadcrumb
          label="Sair 🚪" />
      </Link>
    
      <Carrinho total={props.carrinho} />
    </Breadcrumbs>
  );
}

