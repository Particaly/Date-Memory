import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
//import LinearGradient from 'react-native-linear-gradient';//渐变组件
import lunar from '../DateChange/Lunar.js'
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
    monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    monthNamesShort: ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'],
    dayNames: ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'],
    dayNamesShort: ['日','一','二','三','四','五','六'],
    today: '今日'
};
LocaleConfig.defaultLocale = 'fr';

let markedDates = {

}

class Days extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            today:lunar.Date()
        }
        markedDates[this.state.today]={selected: true, marked: true, selectedColor: 'blue'}
    }
    handleClick = (day)=>{
        console.log(day);
        this.props.onchange(day)
    }
    render() {
        return (
            <Calendar markedDates={markedDates} onPressArrowRight={console.log(123546789)}></Calendar>
        )
    }
}

export default class Calendars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todayDate: lunar.Date('yyyy, mm, dd')
        };
        console.log(666666);
    }
    changedays(days){
        this.setState({
            todayDate:days.toString()
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.title}>{this.state.todayDate}</Text>
                </View>
                <Days date={this.state.todayDate} onchange={(days)=>{this.changedays.bind(days)}}></Days>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{
        height:500,backgroundColor:'rgba(255,188,18,.2)'
    },
    title:{
        height: 80,textAlign: 'center',fontSize: 28,backgroundColor: '#fff',lineHeight: 80,fontFamily:'AnoStencil-Light'
    },
    body:{
        flex:1,justifyContent:'space-between',alignItems:'flex-start'
    },
    bdtitle:{
        flexDirection:'row',height:50
    },
    bdtit:{
        flex:1,alignItems: 'center',justifyContent: 'center'
    }
})