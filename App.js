import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import LoginScreen from './src/screens/Login'; // Corregir la importación
import PlatoScreen from './src/screens/PlatoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);

  const handleLogin = () => {
    setUserAuthenticated(true); // Cambiar a `true` si el usuario inicia sesión correctamente
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isUserAuthenticated ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              title: "Home",
              headerStyle: {
                backgroundColor: 'lightcoral'
              },
              headerRight: () => (
                <TouchableOpacity onPress={() => setUserAuthenticated(false)}>
                  <Text style={styles.headerRight}>Logout</Text>
                </TouchableOpacity>
              )
            })}
          />
        ) : (
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
          >
            {props => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}
        <Stack.Screen
          name="Plato"
          component={PlatoScreen}
          options={() => ({
            title: "Plato",
            headerStyle: {
              backgroundColor: 'lightgreen'
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    padding: 10,
  }
});
