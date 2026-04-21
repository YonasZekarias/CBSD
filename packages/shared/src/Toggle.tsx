import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

export interface ToggleProps {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ value = false, onValueChange, disabled = false }) => {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onValueChange?.(!value)}
      style={[
        styles.track,
        { backgroundColor: value ? '#34C759' : '#E5E5EA' },
        disabled && styles.disabled,
      ]}
    >
      <View style={[styles.thumb, { transform: [{ translateX: value ? 22 : 0 }] }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  track: {
    width: 51,
    height: 31,
    borderRadius: 16,
    padding: 2,
  },
  thumb: {
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  disabled: {
    opacity: 0.5,
  },
});

export { Toggle };
export type { ToggleProps };