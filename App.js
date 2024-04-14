import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Switch,
} from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function createProfile(BenchTM, SquatTM, DeadliftTM, PressTM) {
  return { BenchTM, SquatTM, DeadliftTM, PressTM };
}

const TMScreen = ({ navigation }) => {
  const [profile, setProfile] = useState(createProfile(0, 0, 0, 0));
  const [tempProfile, setTempProfile] = useState(createProfile(0, 0, 0, 0));
  const [choice, setChoice] = useState('BenchTM');
  const [weight, setWeight] = useState(profile.BenchTM);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Bench"
          onPress={() => {
            setChoice('BenchTM');
            setWeight(profile.BenchTM);
          }}
          color={`${choice == 'BenchTM' ? '#0ac9f5' : '#126aed'}`}
        ></Button>
        <Button
          title="Squat"
          onPress={() => {
            setChoice('SquatTM');
            setWeight(profile.SquatTM);
          }}
          color={`${choice == 'SquatTM' ? '#0ac9f5' : '#126aed'}`}
        ></Button>
        <Button
          title="Press"
          onPress={() => {
            setChoice('PressTM');
            setWeight(profile.PressTM);
          }}
          color={`${choice == 'PressTM' ? '#0ac9f5' : '#126aed'}`}
        ></Button>
        <Button
          title="Deadlift"
          onPress={() => {
            setChoice('DeadliftTM');
            setWeight(profile.DeadliftTM);
          }}
          color={`${choice == 'DeadliftTM' ? '#0ac9f5' : '#126aed'}`}
        ></Button>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder={weight.toString()}
          onChangeText={(weight) => {
            setTempProfile({ ...profile, [choice]: weight });
          }}
          inputMode="numeric"
          style={{
            backgroundColor: '#cccccc',
            width: '70%',
            minHeight: '5%',
          }}
        />
        <Button
          title="Add"
          onPress={() => {
            setProfile({ ...profile, ...tempProfile });
          }}
        ></Button>
      </View>
      <Text>Bench Training Max: {profile.BenchTM} KG</Text>
      <Text>Squat Training Max: {profile.SquatTM} KG</Text>
      <Text>Press Training Max: {profile.PressTM} KG</Text>
      <Text>Deadlift Training Max: {profile.DeadliftTM} KG</Text>
      <Button
        title="Confirm"
        onPress={() => navigation.navigate('LiftScreen')}
      ></Button>
    </View>
  );
};

const LiftScreen = ({ navigation }) => {
  return <Text>LiftScreen</Text>;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TMScreen" component={TMScreen} />
        <Stack.Screen name="LiftScreen" component={LiftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
