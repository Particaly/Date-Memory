import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text onPress={() => {
                    console.log(66666666)
                    this.props.navigation.navigate('Details')
                }}>Home Screen</Text>
            </View>
        );
    }
}