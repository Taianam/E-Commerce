import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
  
    backgroundColor: '#7b99db',
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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Home 🎮"
          icon={<HomeIcon fontSize="small" />}
          onClick={handleClick}
        />
      </Link>
      <StyledBreadcrumb component="a" href="#" label="Produtos 🕹️ " onClick={handleClick} />
      <StyledBreadcrumb
        label="Outros 🏁"
        deleteIcon={<ExpandMoreIcon />}
        onClick={handleClick}
        onDelete={handleClick}
      />
    </Breadcrumbs>
  );
}
