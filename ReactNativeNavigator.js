import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/pages/Home.js'
import Details from './src/pages/Detail.js'

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Details: {screen: Details}
});
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;