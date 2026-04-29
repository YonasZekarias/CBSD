import React from 'react';
import { View, StyleSheet } from 'react-native';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
  color?: string;
  margin?: number;
}

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 1,
  color = '#E5E5EA',
  margin = 0,
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <View
      style={[
        isHorizontal ? styles.horizontal : styles.vertical,
        {
          backgroundColor: color,
          margin,
        },
        isHorizontal ? { height: thickness } : { width: thickness },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  horizontal: {
    width: '100%',
  },
  vertical: {
    height: '100%',
    alignSelf: 'stretch',
  },
});

export { Divider };
export type { DividerProps };