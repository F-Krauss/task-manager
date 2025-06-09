import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import TaskList from './components/TaskList';
import { globalStyles, COLORS } from './styles';

function App() {
  const [tasks, setTasks] = useState([

  ]);
  const [filter, setFilter] = useState('all');

  const addTask = ({ title, description }) => {
    setTasks(prev => [
      ...prev,
      { id: Date.now(), title, description, completed: false }
    ]);
  };
  const toggleTask = id =>
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  const deleteTask = id =>
    setTasks(prev => prev.filter(t => t.id !== id));
  const editDesc = (id, newDesc) =>
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, description: newDesc } : t
    ));

  const filteredTasks = tasks.filter(t => {
    if (filter === 'completed') return t.completed;
    if (filter === 'pending') return !t.completed;
    return true;
  });

  return (
    <SafeAreaView style={globalStyles.appContainer}>
      <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "default"} backgroundColor={COLORS.background} />
      <ScrollView contentContainerStyle={globalStyles.pageContainer}>
        <Text style={globalStyles.headerText}>Administrador de tareas</Text>
        <View style={globalStyles.layout}>
          <View style={globalStyles.sidebar}>
            <TaskForm onAdd={addTask} />
            <Filter filter={filter} onChange={setFilter} count={filteredTasks.length} />
          </View>
          <View style={globalStyles.mainContentArea}>
            <TaskList
              tasks={filteredTasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
              onEdit={editDesc}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;