import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PasswordField({ label, iconName, error, ...props }) {
  const [secure, setSecure] = useState(true);

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
          secureTextEntry={secure}
          placeholderTextColor="#5F5F5F"
          {...props}
        />
        <TouchableOpacity
          accessible
          accessibilityLabel={secure ? 'Show password' : 'Hide password'}
          onPress={() => setSecure(!secure)}
        >
          <View className="ml-2">
            <Ionicons name={secure ? 'eye-off' : 'eye'} size={20} color="#5F5F5F" />
          </View>
        </TouchableOpacity>
      </View>
      {error ? <Text className="text-red-500 text-sm mt-1">{error}</Text> : null}
    </View>
  );
}
