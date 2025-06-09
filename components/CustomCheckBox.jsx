import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../styles'; 

const CustomCheckBox = ({ value, onValueChange, label, style, labelStyle }) => {
  return (
    <Pressable onPress={onValueChange} style={[styles.container, style]}>
      <View style={[styles.box, value && styles.boxChecked]}>
        {value && <Text style={styles.checkmark}>✓</Text>}
      </View>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8, 
  },
  box: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: COLORS.secondary, // Use your theme color
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  boxChecked: {
    backgroundColor: COLORS.primary, // Use your theme color
    borderColor: COLORS.primary,
  },
  checkmark: {
    color: '#fff', // White checkmark
    fontSize: 14,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: COLORS.text, // Use your theme text color
  },
});

export default CustomCheckBox;