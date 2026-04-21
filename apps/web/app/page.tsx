import React from 'react';
import { Button, Badge, Card, Avatar, Input, Icon, Toggle } from '@cbsd/shared';

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: 'system-ui' }}>
      <h1>Next.js Web App</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <Avatar name="John Doe" backgroundColor="#FF6B6B" />
        <span>John Doe</span>
        <Icon name="star" size={20} />
      </div>
      <Badge text="Monorepo Badge" color="#fff" backgroundColor="#007AFF" />
      <p>Shared Components from Monorepo</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 300 }}>
        <Button title="Primary Button" variant="primary" onPress={() => alert('Primary clicked!')} />
        <Button title="Secondary Button" variant="secondary" onPress={() => alert('Secondary clicked!')} />
        <Button title="Outline Button" variant="outline" onPress={() => alert('Outline clicked!')} />
      </div>
      <div style={{ marginTop: 24, maxWidth: 300 }}>
        <Card title="Web Card" description="This Card component is shared across web and mobile apps in the monorepo." />
      </div>
      <div style={{ marginTop: 24, maxWidth: 300 }}>
        <Input label="Name" placeholder="Enter your name" />
      </div>
      <div style={{ marginTop: 24 }}>
        <span>Enable notifications</span>
        <Toggle />
      </div>
    </div>
  );
}
