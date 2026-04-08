export interface ButtonProps {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button: React.FC<ButtonProps> = ({ title, onPress, variant = 'primary' }) => {
  const styles = StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: variant === 'primary' ? '#007AFF' : variant === 'secondary' ? '#34C759' : 'transparent',
      borderWidth: variant === 'outline' ? 2 : 0,
      borderColor: variant === 'outline' ? '#007AFF' : undefined,
    },
    text: {
      color: variant === 'outline' ? '#007AFF' : '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button };
export type { ButtonProps };
