import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const LoginScreen = ({ navigation, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'challenge@alkemy.org' && password === 'react') {
      // Autenticación exitosa
      onLogin(); // Llama a la función de inicio de sesión
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={{marginTop: 100}}>
      <Text>Inicio de Sesión</Text>
      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
