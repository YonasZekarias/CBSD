import React from 'react';
import { Button } from '@cbsd/shared';

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: 'system-ui' }}>
      <h1>Next.js Web App</h1>
      <p>Shared Button Component from Monorepo</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 300 }}>
        <Button title="Primary Button" variant="primary" onPress={() => alert('Primary clicked!')} />
        <Button title="Secondary Button" variant="secondary" onPress={() => alert('Secondary clicked!')} />
        <Button title="Outline Button" variant="outline" onPress={() => alert('Outline clicked!')} />
      </div>
    </div>
  );
}
