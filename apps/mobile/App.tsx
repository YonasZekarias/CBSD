import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Badge, Card, Avatar, Input, Icon, Toggle, Progress } from '@cbsd/shared';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native App</Text>
      <View style={styles.userRow}>
        <Avatar name="Jane Smith" backgroundColor="#FF6B6B" />
        <Text style={styles.userName}>Jane Smith</Text>
        <Icon name="star" size={20} />
      </View>
      <Badge text="Monorepo Badge" color="#fff" backgroundColor="#34C759" />
      <Text style={styles.subtitle}>Shared Components from Monorepo</Text>
      <Button title="Primary Button" variant="primary" onPress={() => alert('Primary clicked!')} />
      <Button title="Secondary Button" variant="secondary" onPress={() => alert('Secondary clicked!')} />
      <Button title="Outline Button" variant="outline" onPress={() => alert('Outline clicked!')} />
      <ScrollView style={styles.cardContainer}>
        <Card title="Mobile Card" description="This Card component is shared across web and mobile apps in the monorepo." />
        <View style={{ marginTop: 16 }}>
          <Input label="Name" placeholder="Enter your name" />
        </View>
        <View style={{ marginTop: 24, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Text>Enable notifications</Text>
          <Toggle />
        </View>
        <View style={{ marginTop: 24 }}>
          <Text>Download Progress</Text>
          <Progress value={65} max={100} color="#34C759" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  userRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 },
  userName: { fontSize: 16, fontWeight: '600' },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 24 },
  cardContainer: { marginTop: 24, width: '100%' },
});
