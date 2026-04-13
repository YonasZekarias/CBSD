import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface AvatarProps {
  name: string;
  size?: number;
  backgroundColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, size = 48, backgroundColor = '#007AFF' }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <View style={[styles.avatar, { width: size, height: size, backgroundColor, borderRadius: size / 2 }]}>
      <Text style={[styles.text, { fontSize: size * 0.4 }]}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});

export { Avatar };
export type { AvatarProps };
