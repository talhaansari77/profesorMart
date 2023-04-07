import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Spacer} from '../../../components/Spacer';
import commonStyles, {PH20} from '../../../utils/CommonStyles';
import SignHeader from '../Signup/Molecules/SignHeader';
import CustomTextInput from '../../../components/CustomTextInput';
import {icons} from '../../../assets/icons';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomButton';
import { colors } from '../../../utils/Colors';

const LoginScreen = ({navigation}) => {
  return (
    <View style={commonStyles.IosPadding}>
      <PH20>
        <Spacer height={30} />
        <SignHeader
                 topTxt={ "Login"}

          text1={'Welcome back!'}
          txt2={'Please log in to continue!'}
          navigation={navigation}
        />
        <View style={{height:"20%"}}/>

        <Spacer height={20} />

        <CustomTextInput
          leftIcon={icons.email}
          withLabel={'Email'}
          placeholder="Enter email"
        />
      
        <Spacer height={20} />
        <CustomTextInput
          leftIcon={icons.lock}
          withLabel={'Password'}
          placeholder="Enter password"
          secureTextEntry={true}
          rigthIcon={icons.hidden}
        />
        <Spacer height={50} />

        <CustomButton
          onPress={()=>navigation.navigate("MainStack")}
          title="Login"
        />
        <Spacer height={10} />

        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <CustomText
          label="Don’t have an account?"
            fontSize={12}
            alignSelf="flex-end"
            marginBottom={1}
            fontWeight="500"
            color={colors.inputText}
          />
          <Spacer height={10} />

          <CustomText
            onPress={() => {navigation.navigate("Signup")}}
            label="Sign up"
            textDecorationLine={'underline'}
            fontSize={12}
            marginLeft={3}
            marginBottom={2}
            fontWeight="500"
            color={colors.primary}
          />
        </View>
      </PH20>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
