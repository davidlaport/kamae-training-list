import React from 'react';
import './App.css';
import TrainingList from './components/TrainingList/TrainingList';
import { AppBar, Toolbar, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Liste des Entraînements
          </Typography>
        </Toolbar>
      </AppBar>
      <TrainingList />
    </div>
  );
};

export default App;
