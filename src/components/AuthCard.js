import React from 'react';
import { View } from 'react-native';

export default function AuthCard({ children }) {
  return (
    <View className="bg-cream rounded-3xl p-6 mx-4 mt-6 shadow-lg">
      {children}
    </View>
  );
}
