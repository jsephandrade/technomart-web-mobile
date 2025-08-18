import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

/**
 * Shared layout used for authentication screens.
 *
 * This component wraps its children in a safe area and a keyboard avoiding view.
 * The background colour is set to the light peach tone defined in the tailwind
 * config so that all auth screens share the same warm, friendly appearance.
 *
 * If you need additional padding or spacing around your screen contents, set
 * those directly on the children rather than here – this keeps the layout
 * flexible.
 */
export default function AuthLayout({ children }) {
  return (
    <SafeAreaView className="flex-1 bg-peach-50">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1">
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}