import {View, Text, Image, Platform} from 'react-native';
import AddDesignScreen from '../../screens/Main/AddDesign/AddDesignScreen';
import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';
import Tickets from '../../screens/Main/Tickets/Tickets';
import Profile from '../../screens/Main/Profile/Profile';
import Setting from '../../screens/Main/Setting/Setting';
import { icons } from '../../assets/icons';
import { colors } from '../../utils/Colors';
import CustomText from '../../components/CustomText';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { scale, verticalScale } from 'react-native-size-matters';

// const MainStack = () => {
//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Tickets" component={Tickets} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Setting" component={Setting} />
//     </Stack.Navigator>
//   );
// };

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarStyle: {
        height: verticalScale(45),
        position:"absolute",
        marginHorizontal:scale(10),
        marginBottom:verticalScale(20),
        borderRadius:scale(50),
        backgroundColor: colors.black,
        borderTopWidth: 1,
        borderTopColor:colors.black,
        paddingTop: 5,
        display:route.name === 'NewPost'?"none":"flex",
        paddingBottom:Platform.OS == "ios" ? 10 : 12,
        display: route.name === "Event" ? "none" : "flex",
      },
      headerShown: false,
      tabBarLabel: ({focused, size, color}) => {
        let label;
        if (route.name === "Tickets") {
          label = "Tickets";
          // size = focused ? 35 : 30;
          color = focused ? colors.primary : colors.white;
        } else if (route.name === "Profile") {
          label = "Profile";
          // size = focused ? 35 : 30;
          color = focused ? colors.primary : colors.white;
        } else if (route.name === "Setting") {
          label = "Setting";
          color = focused ? colors.primary : colors.white;

          // size = focused ? 35 : 30;
        } 
        
        return <CustomText 
        label={label} color={color} />;
      },
    

      tabBarIcon: ({ focused, size, color }) => {
        let iconName;
        if (route.name === "Tickets") {
          iconName = icons.tickets;
          // size = focused ? 35 : 30;
          color = focused ? colors.primary : colors.white;
        } else if (route.name === "Profile") {
          iconName = icons.userName;
          // size = focused ? 35 : 30;
          color = focused ? colors.primary : colors.white;
        } else if (route.name === "Setting") {
          iconName = icons.setting;
          color = focused ? colors.primary : colors.white;

          // size = focused ? 35 : 30;
        } 
        return (
          <Image
            source={iconName}
            resizeMode={"contain"}
            style={{
              tintColor: color,
              height: scale(20),
              width: scale(20),
              marginVertical: 10,
            }}
          />
        );
      },
    })}
    // initialRouteName={"Receipt"}
  >
    <Tab.Screen name="Tickets" component={Tickets} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Setting" component={Setting} />
   
   
  </Tab.Navigator>
  
  );
};

export default MainStack;
