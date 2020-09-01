import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import MainScreen from '../../screens/mainTab/MainScreen';
import { useLocale } from '../../hooks/useLocale';
import IconButton from '../../components/customComponent/IconButton';
import { View } from '../../components/themed/View';
import SettingsIcon from '../../components/SettingIcon';

const MainStack = createStackNavigator<MainTabParamList>();

export default function MainTabStack({navigation}:{navigation:StackNavigationProp<MainNavigationParamList,"BottomTab">}) {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ 
                    headerTitle: useLocale({},"mainHeader") ,
                    headerRight: ()=> <SettingsIcon onClick={async ()=>navigation.navigate("Settings")}/>
                }}
            />
        </MainStack.Navigator>
    )
}

const styles = StyleSheet.create({})
