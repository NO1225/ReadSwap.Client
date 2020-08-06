import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../../screens/searchTab/SearchScreen';
import BookDetailsScreen from '../../screens/searchTab/BookDetailsScreen';

const SearchStack = createStackNavigator<SearchTabParamList>();

export default function SearchTabStack() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ headerTitle: 'Search for a Book' }}
            />
            <SearchStack.Screen
                name="BookDetailsScreen"
                component={BookDetailsScreen}
                options={{ headerTitle: 'Book Details' }}
            />
        </SearchStack.Navigator>
    )
}

const styles = StyleSheet.create({})
