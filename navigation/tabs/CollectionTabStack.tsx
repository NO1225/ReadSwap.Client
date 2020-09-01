import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import MyCollectionScreen from '../../screens/collectionTab/MyCollectionScreen';
import MyBookDetailsScreen from '../../screens/collectionTab/MyBookDetailsScreen';
import MyRequestScreen from '../../screens/collectionTab/MyRequestScreen';
import MySentRequestScreen from '../../screens/collectionTab/MySentRequestScreen';
import NewBookScreen from '../../screens/collectionTab/NewBookScreen';
import { useLocale } from '../../hooks/useLocale';
import SettingsIcon from '../../components/SettingIcon';

const CollectionStack = createStackNavigator<CollectionParamList>();

export default function CollectionTabStack({navigation}:{navigation:StackNavigationProp<MainNavigationParamList,"BottomTab">}) {
    return (
        <CollectionStack.Navigator>
            <CollectionStack.Screen
                name="MyCollectionScreen"
                component={MyCollectionScreen}
                options={{ 
                    headerTitle: useLocale({},"myCollectionHeader") ,
                    headerRight: ()=> <SettingsIcon onClick={async ()=>navigation.navigate("Settings")}/>
                }}
            />
            <CollectionStack.Screen
                name="MyBookDetailsScreen"
                component={MyBookDetailsScreen}
                options={{ headerTitle: 'Book Details' }}
            />
            <CollectionStack.Screen
                name="MyRequestScreen"
                component={MyRequestScreen}
                options={{ headerTitle: 'Request' }}
            />
            <CollectionStack.Screen
                name="MySentRequestScreen"
                component={MySentRequestScreen}
                options={{ headerTitle: 'Sent Request' }}
            />
            <CollectionStack.Screen
                name="NewBookScreen"
                component={NewBookScreen}
                options={{ headerTitle: useLocale({},"addNewBookHeader") }}
            />
        </CollectionStack.Navigator>
    )
}

const styles = StyleSheet.create({})
