/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import FriendRequest from './pages/FriendRequest';
import MyGroups from './pages/MyGroups';
import GroupRequests from './pages/GroupRequests';
import Friends from './pages/Friends';
import Block from './pages/Block';

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
