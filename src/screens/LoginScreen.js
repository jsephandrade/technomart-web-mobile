import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import AuthCard from '../components/AuthCard';
import TextField from '../components/TextField';
import PasswordField from '../components/PasswordField';
import { loginSchema } from '../utils/validation';

export default function LoginScreen({ navigation }) {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (text) => setValues({ ...values, [field]: text });

  const handleSubmit = async () => {
    try {
      await loginSchema.validate(values, { abortEarly: false });
      setErrors({});
      Alert.alert('Logged in!');
    } catch (err) {
      const formErrors = {};
      if (err.inner) {
        err.inner.forEach((e) => {
          if (e.path) formErrors[e.path] = e.message;
        });
      }
      setErrors(formErrors);
    }
  };

  return (
    <View className="flex-1 bg-peach-100">
      <View className="items-center mt-10">
        <Image
          source={require('../../assets/logo.png')}
          className="w-32 h-32"
          resizeMode="contain"
        />
      </View>
      <AuthCard>
        <Text className="text-4xl font-extrabold text-text">Hello.</Text>
        <Text className="text-base text-sub mt-1">Welcome back</Text>

        <TextField
          label="Email"
          placeholder="Enter Email"
          iconName="mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={values.email}
          onChangeText={handleChange('email')}
          error={errors.email}
        />
        <PasswordField
          label="Password"
          placeholder="Enter Password"
          iconName="lock-closed"
          value={values.password}
          onChangeText={handleChange('password')}
          error={errors.password}
        />

        <TouchableOpacity
          className="bg-peach-300 rounded-2xl py-3 items-center mt-5"
          accessible
          accessibilityLabel="Log In"
          onPress={handleSubmit}
        >
          <Text className="text-text font-semibold">Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-3"
          accessible
          accessibilityLabel="Forgot password?"
          accessibilityHint="Recover your password"
          onPress={() => Alert.alert('Forgot password?')}
        >
          <Text className="text-sub underline text-center">Forgot password?</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-6">
          <Text className="text-sub">Don't have an account? </Text>
          <TouchableOpacity
            accessible
            accessibilityLabel="Sign Up"
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text className="text-text font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </AuthCard>
    </View>
  );
}
