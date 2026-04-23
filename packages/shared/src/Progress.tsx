import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface ProgressProps {
  value?: number;
  max?: number;
  color?: string;
}

const Progress: React.FC<ProgressProps> = ({ value = 0, max = 100, color = '#007AFF' }) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0);

  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${percentage}%`, backgroundColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    height: 8,
    backgroundColor: '#E5E5EA',
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 4,
  },
});

export { Progress };
export type { ProgressProps };