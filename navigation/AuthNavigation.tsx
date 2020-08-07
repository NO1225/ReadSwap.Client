import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

const AuthStack = createStackNavigator<AuthNavigationParamList>();

export default function AuthNavigation() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{ headerTitle: 'Sign In' }}
            />
            <AuthStack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ headerTitle: 'Sign Up' }}
            />
        </AuthStack.Navigator>
    )
}

const styles = StyleSheet.create({})
