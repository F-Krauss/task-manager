import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { globalStyles, COLORS } from '../styles'; // Adjust path if styles.js is elsewhere

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

  const handleSubmit = () => { // Renamed from submit, e.preventDefault not needed
    if (!title.trim()) {
      // Optionally, show an alert or inline error message
      console.warn("Title is required.");
      return;
    }
    onAdd({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <View style={globalStyles.formContainer}>
      <TextInput
        style={[
          globalStyles.textInput,
          isTitleFocused && globalStyles.textInputFocused,
        ]}
        placeholder="Ingresar tarea..."
        placeholderTextColor={COLORS.placeholderText}
        value={title}
        onChangeText={setTitle} // Use onChangeText for React Native
        onFocus={() => setIsTitleFocused(true)}
        onBlur={() => setIsTitleFocused(false)}
      />
      <TextInput
        style={[
          globalStyles.textInput,
          isDescriptionFocused && globalStyles.textInputFocused,
          localStyles.textArea, // For minHeight or specific textarea styles
        ]}
        placeholder="Ingresar una descripción"
        placeholderTextColor={COLORS.placeholderText}
        value={description}
        onChangeText={setDescription}
        multiline={true}
        numberOfLines={2} // Suggests a height, actual height depends on content and style
        onFocus={() => setIsDescriptionFocused(true)}
        onBlur={() => setIsDescriptionFocused(false)}
      />
      <Pressable
        style={({ pressed }) => [
          globalStyles.addButton,
          pressed && globalStyles.addButtonPressed,
        ]}
        onPress={handleSubmit}
      >
        <Text style={globalStyles.addButtonText}>Agregar</Text>
      </Pressable>
    </View>
  );
}

const localStyles = StyleSheet.create({
  textArea: {
    minHeight: 60, // Give textarea some initial height
    textAlignVertical: 'top', // Start text from the top in multiline
  },
});