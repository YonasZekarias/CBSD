import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const icons: Record<string, string> = {
  home: '🏠',
  settings: '⚙️',
  user: '👤',
  star: '⭐',
  heart: '❤️',
  search: '🔍',
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#000' }) => {
  const iconChar = icons[name] || '•';
  return (
    <Text style={{ fontSize: size }}>{iconChar}</Text>
  );
};

export { Icon };
export type { IconProps };