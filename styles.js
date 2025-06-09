import { StyleSheet, Platform } from 'react-native';

export const COLORS = {
  primary: '#ff6b6b',
  primaryDark: '#e55a5a',
  secondary: '#4b6584', 
  background: '#e9ecef',
  cardBg: '#ffffff',
  text: '#2d3436',     
  placeholderText: '#a0a0a0',
  borderColor: '#ced4da',
  completedText: '#b2bec3',
  defaultHeading: '#333',
};

const FONT_SIZE_BASE = 16;

export const commonCardShadow = {
  backgroundColor: '#fff', 
  borderRadius: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.05,
  shadowRadius: 8,
  elevation: 3,
};

export const commonInputShadow = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
}

export const globalStyles = StyleSheet.create({
  appContainer: {
    backgroundColor: COLORS.background,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
  },
  baseText: {
    color: COLORS.text,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
  },

  
  pageContainer: {
    // maxWidth: 900,
    marginHorizontal: Platform.OS === 'web' ? 'auto' : 0,
    // paddingHorizontal: 20,
    // paddingVertical: 40, 
  },

  
  headerText: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: FONT_SIZE_BASE * 2,
    color: COLORS.defaultHeading,
    fontWeight: 'bold',
  },

  
  // layout: {
  //   flexDirection: 'row', 
  //   gap: 30, 
  // },

  
  sidebar: {
    flex: 1, 
    ...commonCardShadow,
    padding: 20,
    flexDirection: 'column',
    gap: 20,
  },

  
  mainContentArea: {
    flex: 2,
    ...commonCardShadow,
    padding: 20,
  },

 
  formContainer: {
    flexDirection: 'column',
    gap: 15,
  },
  textInput: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 6,
    backgroundColor: '#f0f2f5',
    fontSize: FONT_SIZE_BASE * 0.95,
    color: COLORS.text,
    // transition: border 0.3s; // Handled by focus style
  },
  textInputFocused: {
    borderColor: COLORS.primary,
  },
  addButton: { // Corresponds to button.add
    alignSelf: 'flex-end',
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    // transition: background 0.3s; // Handled by pressed state
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButtonPressed: { // For :hover effect
    backgroundColor: COLORS.primaryDark,
  },

  // Styles that would be used inside Filter.jsx
  filterComponentContainer: { // Corresponds to .filter
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25, // From original .filter margin
  },
  filterLabel: { // Corresponds to .filter label
    fontWeight: '600',
    marginRight: 10,
    fontSize: FONT_SIZE_BASE,
    color: COLORS.text,
  },
  filterPickerContainer: { // For wrapping Picker, corresponds to .filter select
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    flex: 1, // Allow it to take space
  },
  filterCountText: { // Corresponds to .filter span
    fontSize: FONT_SIZE_BASE,
    color: COLORS.text,
  },

  // Styles that would be used inside TaskList.jsx and TaskItem.jsx
  taskItemContainer: { // Corresponds to .task-item
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 15,
    backgroundColor: COLORS.cardBg, // From var(--card-bg)
    borderLeftWidth: 5,
    borderLeftColor: COLORS.primary,
    borderRadius: 6,
    // commonInputShadow, // Or a lighter shadow
    // transition: transform 0.2s, box-shadow 0.2s; // Handled by pressed state
  },
  taskItemPressed: { // For :hover effect
    transform: [{ translateY: -2 }],
    // Optionally increase shadow intensity for pressed state
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 7,
  },
  taskInfo: { // Corresponds to .task-info
    flex: 1,
    marginHorizontal: 15,
  },
  taskTitle: { // Corresponds to .title
    fontSize: FONT_SIZE_BASE * 1.1,
    fontWeight: '600',
    color: COLORS.text,
  },
  taskTitleCompleted: { // Corresponds to .title.completed
    textDecorationLine: 'line-through',
    color: COLORS.completedText,
  },
  taskDescription: { // Corresponds to .description
    fontSize: FONT_SIZE_BASE * 0.9,
    color: COLORS.primary, // Original CSS var(--primary)
    marginTop: 4,
  },
  actionButtonContainer: {
    flexDirection: 'row', // To layout edit/delete buttons
  },
  actionButton: { // Corresponds to button.edit, button.delete
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLORS.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginLeft: 8, // Spacing between buttons
    // transition: background 0.3s, color 0.3s; // Handled by pressed state
  },
  actionButtonText: {
    color: COLORS.primary,
    fontSize: FONT_SIZE_BASE * 0.85,
    fontWeight: '500',
  },
  actionButtonPressed: { // For :hover effect
    backgroundColor: COLORS.primary,
  },
  actionButtonTextPressed: { // For text color change on press
    color: '#fff',
  },

  // Original .container style (600px, card-like) - might be useful for TaskForm or individual cards
  formCardContainer: {
    maxWidth: 600,
    marginVertical: 50,
    marginHorizontal: 'auto', // If web
    padding: 30,
    backgroundColor: COLORS.cardBg,
    borderRadius: 10,
    ...commonInputShadow,
  }
});