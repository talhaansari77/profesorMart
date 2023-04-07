import {StyleSheet, Text, View,Image, Platform,TouchableOpacity} from 'react-native';
import React from 'react';
import commonStyles from '../utils/CommonStyles';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../utils/Colors';
import AntDesign from "react-native-vector-icons/AntDesign"
import { Spacer } from './Spacer';
import { TextInput } from 'react-native-gesture-handler';
import { icons } from '../assets/icons';

const CustomSearch = () => {
  return (
    <View
      style={{
        ...commonStyles.justify,
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: "#adb5bd",
        height:verticalScale(37),
        alignItems:"center",
        justifyContent:"space-between",

      }}>
          <View style={{...commonStyles.rowflex}}>
              <Spacer width={10}/>
              <AntDesign name="search1" color={"#6c757d"} size={moderateScale(25)}/>
              <Spacer width={10}/>

              <TextInput placeholder='Search location'
              placeholderTextColor={"#6c757d"}
              style={{fontSize:15}}
              />

          </View>

          <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight:scale(10),

          //   opacity: 0.1,
          width: scale(30),
          paddingHorizontal: 10,
          height: scale(30),
          borderRadius: scale(100),
          shadowColor: Platform.OS == 'ios' ? colors.white : colors.black,
          shadowRadius: 3,
          elevation: 3,
          shadowOpacity: 0.2,
          // inputMarginTop:-20,
          shadowOffset: {width: 1, height: 2},
        }}>
        <Image
          source={icons.filterto}
          style={{width: scale(20), height: scale(20)}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomSearch;

const styles = StyleSheet.create({});
