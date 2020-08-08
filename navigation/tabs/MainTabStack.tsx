import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../../screens/mainTab/MainScreen';
import { useLocale } from '../../hooks/useLocale';

const MainStack = createStackNavigator<MainTabParamList>();

export default function MainTabStack() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ headerTitle: useLocale({},"mainHeader") }}
            />
        </MainStack.Navigator>
    )
}

const styles = StyleSheet.create({})
