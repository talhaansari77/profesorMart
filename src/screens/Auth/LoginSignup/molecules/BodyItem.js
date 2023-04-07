import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
import CustomText from '../../../../components/CustomText';
import {Roboto} from '../../../../utils/Fonts';
import GradientButton from '../../../../components/GradientButton';
import CustomButton from '../../../../components/CustomButton';
import commonStyles from '../../../../utils/CommonStyles';

const BodyItem = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{width: '60%', alignItems: 'center', alignSelf: 'center'}}>
        <CustomText
          label="Search less travel more?"
          fontSize={25}
          // textAlign="center"
          fontWeight={'700'}
          fontFamily={Roboto.BlackBold}
          color={colors.primary}
        />
        <Spacer height={20} />
      </View>
      <CustomText
        label="Greate experiences at backpacker price"
        fontSize={12}
        mainSelf="center"
        textAlign="center"
        fontWeight="400"
        color={colors.black}
      />
      <Spacer height={60} />

      <CustomButton
        onPress={()=>navigation.navigate("Signup")}
        title="Create a account"
      />
      <Spacer height={20} />

      <CustomButton
        backgroundColor={colors.white}
        color={colors.black}
        borderWidth={1}
        borderColor={colors.primary}
        onPress={()=>navigation.navigate("LoginScreen")}
        title="Sign In"
      />
      <Spacer height={30} />

      <CustomText
        label="By creating an account, you agree to our"
        fontSize={12}
        mainSelf="center"
        textAlign="center"
        fontWeight="400"
        color={colors.inputGray}
      />
      <Spacer height={2} />
      <View style={commonStyles.rowMain}>
        <CustomText
          label="Terms & Conditions"
          fontSize={11}
          textDecorationLine={'underline'}
          mainSelf="center"
          textAlign="center"
          fontWeight="400"
          color={colors.primary}
        />

        <CustomText
          label="and agree to"
          fontSize={10}
          mainSelf="center"
          marginLeft={5}
          marginRight={5}
          textAlign="center"
          fontWeight="400"
          color={colors.black}
        />
        <CustomText
          label="Privacy Policy"
          fontSize={11}
          textDecorationLine={'underline'}
          mainSelf="center"
          textAlign="center"
          fontWeight="400"
          color={colors.primary}
        />
      </View>
    </View>
  );
};

export default BodyItem;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: scale(15),
  },
});
