// App.js
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/man.png')} 
        style={styles.illustration} 
      />

      <Text style={styles.title}>Discover Your Dream Job here</Text>

 
      <Text style={styles.subtitle}>
        Explore all the existing job roles based on your interest and study major
      </Text>
 
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}onPress={() => router.push('/login')}>
          <Text style={styles.buttonText1}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}onPress={() => router.push('/register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F7F8FA',
  },
  illustration: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
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
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginRight: 10,
  },
  registerButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#2563EB',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#2563EB',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonText1: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
