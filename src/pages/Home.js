import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Calendar from '../components/Home/Calendar.js'
export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Calendar></Calendar>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{
        flex: 1,backgroundColor:'#f5f5f5'
    }
})