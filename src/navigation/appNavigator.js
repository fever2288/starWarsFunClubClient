import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import MoviesScreen from '../screens/movies';
import CharactersScreen from '../screens/characters'
import React from 'react'


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="Characters" component={CharactersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
