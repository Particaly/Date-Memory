import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';//Calendar, CalendarList,
//import LinearGradient from 'react-native-linear-gradient';//渐变组件
import lunar from '../DateChange/Lunar.js'
import {LocaleConfig} from 'react-native-calendars';
//本地化日历
LocaleConfig.locales['fr'] = {
    monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    monthNamesShort: ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'],
    dayNames: ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'],
    dayNamesShort: ['日','一','二','三','四','五','六'],
    today: '今日'
};
LocaleConfig.defaultLocale = 'fr';

let markedDates = {

};
let items={}

export default class Calendars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todayDate: lunar.Date('yyyy, mm, dd')
        };
        this.changedays = this.changedays.bind(this);
    }

    changedays(days){
        let day = days.dateString.replace(/[-]g/,', ');
        if(day==this.state.todayDate){
            return
        }else{
            //markedDates['choose']
        }
        this.setState({
            todayDate:day
        })
    }

    renderItem(item,firstItemInDay){
        let itemstyle = StyleSheet.create({
            container:{
                height:50,lineHeight:50,backgroundColor:'#e02e24'
            }
        })
        return (
            <View style={itemstyle.container}>
                <Text>{item.text}</Text>
            </View>
        )
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.title}>{this.state.todayDate}</Text>
                </View>
                <Agenda items={items} renderItem={this.renderItem}
                        markedDates={markedDates} onDayPress={this.changedays}></Agenda>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{
        flex: 1,backgroundColor:'rgba(255,188,18,.2)'
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