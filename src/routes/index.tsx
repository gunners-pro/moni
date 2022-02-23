import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Dashboard} from '../screens/Dashboard';
import {CustomBottomTabBar} from '../components/CustomBottomTabBar';

const {Navigator, Screen} = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        tabBar={props => <CustomBottomTabBar {...props} />}
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Screen name="home" component={Home} />
        <Screen name="dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  );
}
