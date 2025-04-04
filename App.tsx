import React from 'react';
<<<<<<< HEAD
import { AuthProvider } from './src/contexts/AuthContext';
import { AppNavigator } from './src/navigation/AppNavigator';
import { ThemeProvider } from 'styled-components/native';
=======
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './src/routes';
>>>>>>> 24ae2a53f3e8b0d07a24c4d09ac84d373e765614
import theme from './src/styles/theme';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <AuthProvider>
=======
      <NavigationContainer>
>>>>>>> 24ae2a53f3e8b0d07a24c4d09ac84d373e765614
        <StatusBar 
          barStyle="light-content" 
          backgroundColor={theme.colors.primary} 
        />
<<<<<<< HEAD
        <AppNavigator />
      </AuthProvider>
=======
        <AppRoutes />
      </NavigationContainer>
>>>>>>> 24ae2a53f3e8b0d07a24c4d09ac84d373e765614
    </ThemeProvider>
  );
}
