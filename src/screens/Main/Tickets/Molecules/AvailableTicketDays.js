import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import {Roboto} from '../../../../utils/Fonts';
import {Spacer} from '../../../../components/Spacer';

const AvailableTicketDays = ({item, index,ActiveDate,setActiveDate}) => {
  console.log('IndexDataID', item?.id);
  
  return (
    <TouchableOpacity
      onPress={() => setActiveDate(item?.id)}
      style={{
        // width: scale(45),
        // height: verticalScale(55),
        alignItems: 'center',
        justifyContent: "space-evenly",
        marginLeft: scale(15),
        padding:15,
        borderRadius: scale(7),
        backgroundColor:   ActiveDate == item.id ?colors.primary: colors.white,
        marginBottom: 10,
        borderWidth: 0.3,

        borderColor: ActiveDate == item.id ? colors.primary : colors.inputText,
        shadowColor: Platform.OS == 'ios' ? '#343a40' : colors.black,
        shadowRadius: 2,
        elevation: 5,
        shadowOpacity: 0.2,
        // inputMarginTop:-20,
        shadowOffset: {width: -1, height: 2},
      }}>
      <CustomText
        label={item.day}
        fontSize={10}
        alignSelf="center"
        textAlign="center"
        fontWeight={ActiveDate == item.id?"700":"500" }
        color={ActiveDate == item.id ? colors.white : colors.inputGray}
        marginBottom={7}
        fontFamily={Roboto.SemiBold}
      />

      <CustomText
        label={item.date}
        fontSize={12}
        alignSelf="center"
        textAlign="center"
        fontWeight={ActiveDate == item.id?"700":"500" }

        color={ActiveDate == item.id ? colors.white : colors.inputGray}
        fontFamily={Roboto.SemiBold}
      />
    </TouchableOpacity>
  );
};

export default AvailableTicketDays;

const styles = StyleSheet.create({});
