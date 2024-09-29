import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import ExampleTwoScreen from '../presentation/screens/ExampleTwoScreen';
import ExampleOneScreen from '../presentation/screens/ExampleOneScreen';

const Navigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="ExampleOne">
      <Tab.Screen
        name="ExampleOne"
        component={ExampleOneScreen}
      />
      <Tab.Screen
        name="ExampleTwo"
        component={ExampleTwoScreen}
      />
   
    </Tab.Navigator>
  );
};

export default Navigator;