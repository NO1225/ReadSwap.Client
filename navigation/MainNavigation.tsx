import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import SettingsScreen from '../screens/settings/SettingsScreen';

const MainStack = createStackNavigator<MainNavigationParamList>();

export default function MainNavigation() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="BottomTab"
                component={BottomTabNavigator}
                options={{ headerTitle: 'Main' }}
            />
            <MainStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerTitle: 'Settings' }}
            />
        </MainStack.Navigator>
    )
}

const styles = StyleSheet.create({})
