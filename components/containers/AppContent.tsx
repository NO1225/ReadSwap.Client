import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

type AppContentProps = {
    signIn:()=>void;
    signOut:()=>void;
}

export default class AppContent extends Component<AppContentProps> {
    render() {
        return (this.props.children)
    }
}

const styles = StyleSheet.create({})
