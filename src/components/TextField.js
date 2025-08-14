import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TextField({ label, iconName, error, ...props }) {
  return (
    <View className="mb-4">
      <Text className="text-text font-semibold mb-2">{label}</Text>
      <View className="flex-row items-center bg-peach-200 rounded-2xl px-4 py-3">
        {iconName && (
          <View className="mr-2">
            <Ionicons name={iconName} size={20} color="#5F5F5F" />
          </View>
        )}
        <TextInput
          className="flex-1 text-text"
          placeholderTextColor="#5F5F5F"
          {...props}
        />
      </View>
      {error ? <Text className="text-red-500 text-sm mt-1">{error}</Text> : null}
    </View>
  );
}
