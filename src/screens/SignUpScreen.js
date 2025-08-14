import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import AuthCard from '../components/AuthCard';
import TextField from '../components/TextField';
import PasswordField from '../components/PasswordField';
import { signUpSchema } from '../utils/validation';

export default function SignUpScreen({ navigation }) {
  const [values, setValues] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (text) => setValues({ ...values, [field]: text });

  const handleSubmit = async () => {
    try {
      await signUpSchema.validate(values, { abortEarly: false });
      setErrors({});
      Alert.alert('Account created!');
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
        <Text className="text-4xl font-extrabold text-text">Create</Text>
        <Text className="text-base text-sub mt-1">your account</Text>

        <TextField
          label="Name"
          placeholder="Enter Name"
          iconName="person"
          value={values.name}
          onChangeText={handleChange('name')}
          error={errors.name}
        />
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
        <PasswordField
          label="Confirm Password"
          placeholder="Confirm Password"
          iconName="lock-closed"
          value={values.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
          error={errors.confirmPassword}
        />

        <TouchableOpacity
          className="bg-peach-300 rounded-2xl py-3 items-center mt-5"
          accessible
          accessibilityLabel="Create Account"
          onPress={handleSubmit}
        >
          <Text className="text-text font-semibold">Create Account</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-6">
          <Text className="text-sub">Already have an account? </Text>
          <TouchableOpacity
            accessible
            accessibilityLabel="Log In"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-text font-bold">Log In</Text>
          </TouchableOpacity>
        </View>
      </AuthCard>
    </View>
  );
}
