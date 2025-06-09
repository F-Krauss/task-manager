import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles, COLORS } from '../styles'; 

export default function Filter({ filter, onChange, count }) {
  return (
    <View style={globalStyles.filterComponentContainer}>
      <Text style={globalStyles.filterLabel}>Filtros:</Text>
      <View style={localStyles.pickerWrapper}>
        <Picker
          selectedValue={filter}
          onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
          style={localStyles.picker}
          dropdownIconColor={COLORS.primary} 
          mode="dropdown" 
        >
          <Picker.Item label="Todas" value="all" style={localStyles.pickerItem} />
          <Picker.Item label="Completadas" value="completed" style={localStyles.pickerItem} />
          <Picker.Item label="Pendientes" value="pending" style={localStyles.pickerItem} />
        </Picker>
      </View>
      <Text style={globalStyles.filterCountText}>({count})</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({

  pickerWrapper: {
    flex: 1, 
    marginHorizontal: 10,
    borderWidth: Platform.OS === 'ios' ? 0 : 1, 
    borderColor: Platform.OS === 'ios' ? 'transparent' : COLORS.borderColor,
    borderRadius: 6,

  },
  picker: {

    color: COLORS.text,

  },
  pickerItem: {

    color: COLORS.text,
    
    fontSize: Platform.OS === 'android' ? 16 : undefined, 
  },
});