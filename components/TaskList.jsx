
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';
import { globalStyles, COLORS } from '../styles';

export default function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return (
      <View style={localStyles.emptyContainer}>
        <Text style={localStyles.emptyText}>No hay tareas pendientes.</Text>
        <Text style={localStyles.emptySubText}>¡Agrega una nueva tarea para empezar!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
      keyExtractor={item => item.id.toString()}
      // contentContainerStyle={{ paddingBottom: 20 }} // Add padding at the bottom if needed
    />
  );
}

const localStyles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50, // Give some space from top
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
    textAlign: 'center',
  },
  emptySubText: {
    fontSize: 14,
    color: COLORS.text,
    marginTop: 8,
    textAlign: 'center',
  }
});