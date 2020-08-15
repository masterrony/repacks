import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GamesIcon from '@material-ui/icons/Games';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <GamesIcon />
      </ListItemIcon>
      <ListItemText primary="Games" />
    </ListItem> 
  </div>
);