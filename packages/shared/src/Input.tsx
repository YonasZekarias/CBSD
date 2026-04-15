import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  label?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, label }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 4, color: '#333' },
});

export { Input };
export type { InputProps };
