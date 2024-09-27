import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back, you've been missed!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>

    
      <TouchableOpacity>
        <Text style={styles.createAccount}>Create new account</Text>
      </TouchableOpacity>

      <Text style={styles.continueText}>Or continue with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="#4267B2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="apple" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F7F8FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E3A8A',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#2563EB',
    borderWidth: 1,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#2563EB',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  signInText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  createAccount: {
    textAlign: 'center',
    color: '#2563EB',
    marginBottom: 30,
  },
  continueText: {
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 15,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    marginHorizontal: 10,
  },
});
