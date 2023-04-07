import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import commonStyles from '../../../../utils/CommonStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../../utils/Colors';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';
import {Roboto} from '../../../../utils/Fonts';

const SignHeader = ({navigation,text1,txt2,topTxt}) => {
  return (
    <>
      <View style={commonStyles.rowflex}>
          <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=>navigation.goBack()}
          >

        <Ionicons
          name="arrow-back"
          color={colors.black}
          size={moderateScale(20)}
        />
                  </TouchableOpacity>

        <Spacer width={15} />

        <CustomText
          label={topTxt }
          fontSize={14}
          mainSelf="center"
          textAlign="center"
          fontFamily={Roboto.SemiBold}
          color={colors.black}
        />
      </View>
      <Spacer height={20} />
      {/* "Sign up to keep exploting amazing" */}
      {/* "destinations around the world!" */}
      <CustomText
        label={text1}
        fontSize={13}
        fontWeight="500"
        fontFamily={Roboto.Regular300}
        color={colors.inputGray}
      />
      <Spacer height={5} />
      <CustomText
        label={txt2}
        fontSize={13}
        fontWeight="500"
        fontFamily={Roboto.Regular300}
        color={colors.inputGray}
      />
    </>
  );
};

export default SignHeader;

const styles = StyleSheet.create({});
