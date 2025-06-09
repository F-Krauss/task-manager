import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import CustomCheckBox from './CustomCheckBox'; 
import { globalStyles, COLORS } from '../styles';

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const handleEdit = () => {
    Alert.prompt(
      'Nueva descripción',
      'Ingresa la nueva descripción para la tarea:',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Guardar',
          onPress: (newDesc) => {
            if (newDesc !== undefined && newDesc !== null) {
              onEdit(task.id, newDesc);
            }
          },
        },
      ],
      'plain-text',
      task.description || ''
    );
  };

  return (
    <View style={globalStyles.taskItemContainer}>
      {/* Use CustomCheckBox instead of CheckBox */}
      <CustomCheckBox
        value={task.completed}
        onValueChange={() => onToggle(task.id)}
        style={localStyles.checkbox} // You can pass style to the container of CustomCheckBox
      />
      <Pressable
        style={globalStyles.taskInfo}
        onPress={() => onToggle(task.id)}
      >
        <Text style={[
          globalStyles.taskTitle,
          task.completed && globalStyles.taskTitleCompleted
        ]}>
          {task.title}
        </Text>
        {task.description ? (
          <Text style={globalStyles.taskDescription}>{task.description}</Text>
        ) : null}
      </Pressable>
      <View style={localStyles.buttonsContainer}>
        <Pressable
          style={({ pressed }) => [
            globalStyles.actionButton,
            pressed && globalStyles.actionButtonPressed,
            localStyles.editButton
          ]}
          onPress={handleEdit}
        >
          {({ pressed }) => (
            <Text style={[
              globalStyles.actionButtonText,
              pressed && globalStyles.actionButtonTextPressed,
            ]}>
              Editar
            </Text>
          )}
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            globalStyles.actionButton,
            pressed && globalStyles.actionButtonPressed,
          ]}
          onPress={() => onDelete(task.id)}
        >
          {({ pressed }) => (
            <Text style={[
              globalStyles.actionButtonText,
              pressed && globalStyles.actionButtonTextPressed,
            ]}>
              Eliminar
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  checkbox: {
    // This style will now apply to the Pressable container of CustomCheckBox
    // You might adjust marginRight within CustomCheckBox's own styles if preferred
    marginRight: 0, // Reset if CustomCheckBox handles its own margin
    // transform: [{ scale: 1.1 }] // This might not be needed or apply differently
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 8,
  }
});

