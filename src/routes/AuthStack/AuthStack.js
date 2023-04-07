import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import LoginSignup from '../../screens/Auth/LoginSignup/LoginSignup';
import Signup from '../../screens/Auth/Signup/Signup';

const AuthStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
    >
                  <Stack.Screen name="LoginSignup" component={LoginSignup} />
                  <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
  


    </Stack.Navigator>
  );
};

export default AuthStack;
