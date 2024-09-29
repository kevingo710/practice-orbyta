import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import ExampleTwoScreen from '../presentation/screens/exampleTwo/ExampleTwoScreen';
import ExampleOneScreen from '../presentation/screens/exampleOne/ExampleOneScreen';

const Navigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="ExampleOne">
      <Tab.Screen
        name="One"
        component={ExampleOneScreen}
        options={{
          tabBarLabel: 'One',
          tabBarIcon: () => (
            <Text> ⏳ </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Two"
        component={ExampleTwoScreen}
        options={{
          tabBarLabel: 'Two',
          tabBarIcon: () => (
            <Text> 🍺 </Text>
          ),
        }}
      />
   
    </Tab.Navigator>
  );
};

export default Navigator;