import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useLocale } from '../hooks/useLocale';
import ProfileScreen from '../screens/profile/ProfileScreen';

const ProfileStack = createStackNavigator<ProfileNavigationParamList>();

export default function ProfileNavigation() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerTitle: useLocale({},"ProfileHeader") }}
            />
           
        </ProfileStack.Navigator>
    )
}

const styles = StyleSheet.create({})
