import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@cbsd/shared';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native App</Text>
      <Text style={styles.subtitle}>Shared Button Component from Monorepo</Text>
      <Button title="Primary Button" variant="primary" onPress={() => alert('Primary clicked!')} />
      <Button title="Secondary Button" variant="secondary" onPress={() => alert('Secondary clicked!')} />
      <Button title="Outline Button" variant="outline" onPress={() => alert('Outline clicked!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 24 },
});
