import React from 'react';
import { Training } from '../../data/trainings';
import { TableCell, TableRow, Button, Chip } from '@mui/material';

interface TrainingItemProps {
  training: Training;
  onStatusChange: (id: number, newStatus: 'Victoire' | 'Défaite') => void;
}

const TrainingItem: React.FC<TrainingItemProps> = ({ training, onStatusChange }) => {
    const handleGoClick = () => {
      
      const newStatus = Math.random() < 0.5 ? 'Victoire' : 'Défaite';
      onStatusChange(training.id, newStatus);
    };
  
    const getStatusChipStyle = (status: string) => {
        switch (status) {
          case 'Victoire':
            return { backgroundColor: '#81c784', color: 'white' }; 
          case 'Défaite':
            return { backgroundColor: 'red', color: 'white' };
          case 'À commencer':
            return { backgroundColor: '#4fc3f7', color: 'white' }; 
          default:
            return {};
        }
      };
      
      
      return (
        <TableRow>
          <TableCell component="th" scope="row">
            {training.title}
          </TableCell>
          <TableCell align="right">{training.category}</TableCell>
          <TableCell align="right">
            <Chip label={training.status} style={getStatusChipStyle(training.status)} />
          </TableCell>
          <TableCell align="right">
            {training.status !== 'Victoire' && (
              <Button variant="contained" onClick={handleGoClick}>Go !</Button>
            )}
          </TableCell>
        </TableRow>
      );
      
  };
  

export default TrainingItem;
