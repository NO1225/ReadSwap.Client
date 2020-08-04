import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import TabOneScreen from '../../screens/TabOneScreen';

const TabOneStack = createStackNavigator<TabOneParamList>();

export default function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{ headerTitle: 'Tab One Title' }}
            />
        </TabOneStack.Navigator>
    )
}

const styles = StyleSheet.create({})
