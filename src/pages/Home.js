import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Calendars from '../components/Home/Calendar.js';


export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Calendars></Calendars>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{
        flex: 1,backgroundColor:'#ffd194'
    }
})