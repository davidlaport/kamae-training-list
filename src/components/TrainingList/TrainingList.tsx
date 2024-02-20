import React, { useState, useEffect } from 'react';
import { Training, trainings as initialTrainings } from '../../data/trainings';
import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Paper } from '@mui/material';
import TrainingItem from '../TrainingItem/TrainingItem';

const TrainingList: React.FC = () => {
  const [trainings, setTrainings] = useState<Training[]>([]);

  useEffect(() => {
    const sortedTrainings = [...initialTrainings].sort((a, b) => {
      const order = { 'À commencer': 1, 'Défaite': 2, 'Victoire': 3 };
      return order[a.status] - order[b.status];
    });
    setTrainings(sortedTrainings);
  }, []);

  const handleStatusChange = (id: number, newStatus: 'Victoire' | 'Défaite') => {
    const updatedTrainings = trainings.map(training => training.id === id ? { ...training, status: newStatus } : training);
    const sortedUpdatedTrainings = updatedTrainings.sort((a, b) => {
      const order = { 'À commencer': 1, 'Défaite': 2, 'Victoire': 3 };
      return order[a.status] - order[b.status];
    });
    setTrainings(sortedUpdatedTrainings);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Titre</TableCell>
            <TableCell align="right">Catégorie</TableCell>
            <TableCell align="right">Statut</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trainings.map((training) => (
            <TrainingItem key={training.id} training={training} onStatusChange={handleStatusChange} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TrainingList;
