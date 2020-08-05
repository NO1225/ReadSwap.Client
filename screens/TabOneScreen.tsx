import * as React from 'react';
import { useState } from 'react';

import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import TestComponent from '../components/TestComponent';

export default function TabOneScreen() {
  const [person, setPerson] = useState<Person>({
    firstName:"ahmad",
    lastName:"Hassan"
  });

  return (
    <View style={styles.container}>
      <TestComponent firstName="ahmd" lastName="ali"/>
      <TestComponent firstName="ahmd2" lastName="ali5"/>
      <TestComponent firstName={person.firstName} lastName={person.lastName}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
