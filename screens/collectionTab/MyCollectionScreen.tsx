import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { View } from "../../components/themed/View"
import { Text } from "../../components/themed/Text"
import { StackNavigationProp } from '@react-navigation/stack'
import { signOut } from '../../services/navigation/signOut'

export default function MyCollectionScreen({navigation}:{navigation:StackNavigationProp<CollectionParamList>}) {

    const navigateToDetails = ()=>{
        navigation.navigate("MyBookDetailsScreen",{bookId:1});
    }
    const navigateToRequest = ()=>{
        navigation.navigate("MySentRequestScreen",{requestId:1});
    }
    const navigateToNew = ()=>{
        navigation.navigate("NewBookScreen");
    }

    return (
        <View>
            <Text>MyCollectionScreen</Text>
            <Button title='Go to Details' onPress={navigateToDetails} />
            <Button title='Go to Request' onPress={navigateToRequest} />
            <Button title='Go to New' onPress={navigateToNew} />
            <Button title='signOut' onPress={()=>{
                console.log("signing out");
                signOut();
            }} />
        </View>
    )
}

const styles = StyleSheet.create({})
