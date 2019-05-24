import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/pages/Home.js'
import Details from './src/pages/Detail.js'

let AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Details: {screen: Details},

}, {
    mode:'card',
    headerMode:"none",/*取消标题栏*/
    defaultNavigationOptions:{
        header:null,
    }
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;