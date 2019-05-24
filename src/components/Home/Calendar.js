import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import lunar from '../DateChange/Lunar.js'

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todayDate: lunar.Date('yyyy-m-dd')
        };

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.todayDate}</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{
        height:500,backgroundColor:'#e02e24'
    }
})