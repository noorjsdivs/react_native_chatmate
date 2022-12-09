/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Registration from './screens/Registration';
import Login from './screens/Login';
import Home from './screens/Home';
import FriendRequest from './screens/FriendRequest';
import MyGroups from './screens/MyGroups';
import GroupRequests from './screens/GroupRequests';
import Friends from './screens/Friends';
import Block from './screens/Block';
import Profile from './screens/Profile';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Friend Request" component={FriendRequest} />
        <Stack.Screen name="My Groups" component={MyGroups} />
        <Stack.Screen name="Group Requests" component={GroupRequests} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Blocked" component={Block} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    color: 'blue',
    padding: 10,
    width: '100%',
  },
});

export default App;
