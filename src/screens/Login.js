import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'challenge@alkemy.org' && password === 'react') {
      // Autenticación exitosa
      onLogin(); // Llama a la función de inicio de sesión
      navigation.navigate('Home');
    } else {
      // Mostrar una alerta si el inicio de sesión falla
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6', // Un color suave y relajante
    justifyContent: 'center',
  },
  loginContainer: {
    marginHorizontal: 40,
    padding: 20,
    backgroundColor: '#ffffff', // Un color de fondo suave para el contenedor de inicio de sesión
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333333', // Un color de texto suave y oscuro
  },
  input: {
    height: 50,
    backgroundColor: '#f2f2f2', // Un color de entrada suave
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#ff6f00', // Un color de botón agradable y atractivo
    padding: 15,
    borderRadius: 25,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
