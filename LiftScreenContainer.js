import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

const roundTo = (number) => {
  return 2.5 * Math.ceil(number / 2.5);
};

const getLiftWeight = (week, TM) => {
  if (week == 1) {
    return [roundTo(TM * 0.65), roundTo(TM * 0.75), roundTo(TM * 0.85)];
  } else if (week == 2) {
    return [roundTo(TM * 0.7), roundTo(TM * 0.8), roundTo(TM * 0.9)];
  } else if (week == 3) {
    return [roundTo(TM * 0.75), roundTo(TM * 0.85), roundTo(TM * 0.95)];
  }
};

const getReps = (week) => {
  if (week == 1) {
    return [5, 5, 5];
  } else if (week == 2) {
    return [3, 3, 3];
  } else if (week == 3) {
    return [5, 3, 1];
  }
};

const getLifts = (day) => {
  if (day == 1 || day == 3) {
    return ['Bench', 'Squat'];
  } else if (day == 2) {
    return ['Deadlift', 'OverheadPress'];
  }
};

export const LiftScreenContainer = ({ navigation, route }) => {
  const profile = route.params.profile;
  const [week, setWeek] = useState(1);
  const [day, setDay] = useState(1);
  const [lifts, setLifts] = useState(getLifts(day));
  const [reps, setReps] = useState(getReps(day));
  const [liftOneWeight, setLiftOneWeight] = useState(
    getLiftWeight(week, parseInt(profile[lifts[0] + 'TM']))
  );
  const [liftTwoWeight, setLiftTwoWeight] = useState(
    getLiftWeight(week, parseInt(profile[lifts[1] + 'TM']))
  );
  console.log(liftOneWeight);

  return (
    <View style={styles.container}>
      <Text>{lifts[0]}:</Text>
      <Text>
        {liftOneWeight[0]} x {reps[0]}
      </Text>
      <Text>
        {liftOneWeight[1]} x {reps[1]}
      </Text>
      <Text>
        {liftOneWeight[2]} x {reps[2]}
      </Text>
      <Text>5 sets of {liftOneWeight[0]} x 5 </Text>
      <Text> </Text>
      <Text>{lifts[1]}:</Text>
      <Text>
        {liftTwoWeight[0]} x {reps[0]}
      </Text>
      <Text>
        {liftTwoWeight[1]} x {reps[1]}
      </Text>
      <Text>
        {liftTwoWeight[2]} x {reps[2]}
      </Text>
      <Text>5 sets of {liftTwoWeight[0]} x 5 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
