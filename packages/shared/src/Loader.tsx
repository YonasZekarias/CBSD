import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 'large', color = '#007AFF', text }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {text && <Text style={[styles.text, { color }]}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    marginTop: 8,
    fontSize: 14,
  },
});

export { Loader };
export type { LoaderProps };