import React, { useState } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TMScreenContainer } from './TMScreenContainer.js';
import { LiftScreenContainer } from './LiftScreenContainer.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TMScreen" component={TMScreenContainer} />
        <Stack.Screen name="LiftScreen" component={LiftScreenContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
