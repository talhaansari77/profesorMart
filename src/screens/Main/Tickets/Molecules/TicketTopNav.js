import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import { verticalScale } from 'react-native-size-matters';
import { InterFont, Roboto } from '../../../../utils/Fonts';
import AllTickets from '../../AllTickets/AllTickets';
import MyTickets from '../../MyTickets/MyTickets';
const Tab = createMaterialTopTabNavigator();

const TicketTopNav = () => {
      return (
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
    
            tabBarStyle: {
              height: verticalScale(32),
              alignItems: 'center',
              justifyContent: 'space-around',
              // marginHorizontal: scale(20),
              borderRadius: 10,
              elevation: 0,
            },
            tabBarAllowFontScaling: true,
            tabBarLabel: ({focused, size, color}) => {
              let screenName = '';
              if (route.name === 'AllTickets') {
                screenName = 'All Tickets';
                color = focused ? colors.primary : colors.inputText;
              } 
             else if (route.name === 'MyTickets') {
                screenName = 'My Tickets';
                color = focused ? colors.primary : colors.inputText;
              } 
            
              return (
                <CustomText
                  label={screenName}
                  color={color}
                  fontSize={12}
                  fontFamily={Roboto.SemiBold}
                />
              );
            },
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 200 },
           
            
            
            // tabBarItemStyle: {width: 130},
            tabBarScrollEnabled: true,
            tabBarIndicatorStyle: {
              width:100,
              backgroundColor: colors.primary,
            },
          })}>
           <Tab.Screen name="AllTickets" component={AllTickets} />
          <Tab.Screen name="MyTickets" component={MyTickets} />
    
        </Tab.Navigator>
      );

}

export default TicketTopNav

const styles = StyleSheet.create({})