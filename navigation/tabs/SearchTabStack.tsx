import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import SearchScreen from '../../screens/searchTab/SearchScreen';
import BookDetailsScreen from '../../screens/searchTab/BookDetailsScreen';
import { useLocale } from '../../hooks/useLocale';
import SettingsIcon from '../../components/SettingIcon';

const SearchStack = createStackNavigator<SearchTabParamList>();

export default function SearchTabStack({navigation}:{navigation:StackNavigationProp<MainNavigationParamList,"BottomTab">}) {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ 
                    headerTitle: useLocale({},"searchForBookHeader"),
                    headerRight: ()=> <SettingsIcon onClick={async ()=>navigation.navigate("Settings")}/>
                 }}
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
