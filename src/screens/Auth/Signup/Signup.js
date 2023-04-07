import {StyleSheet, Text, View, Image, Platform,TouchableOpacity} from 'react-native';
import React from 'react';
import commonStyles, {PH10, PH20} from '../../../utils/CommonStyles';
import {images} from '../../../assets/images';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import SignHeader from './Molecules/SignHeader';
import CustomTextInput from '../../../components/CustomTextInput';
import {colors} from '../../../utils/Colors';
import {icons} from '../../../assets/icons';
import CustomButton from '../../../components/CustomButton';
import CustomText from '../../../components/CustomText';

const Signup = ({navigation}) => {
  return (
    <View style={commonStyles.IosPadding}>
      <PH20>
        <Spacer height={30} />
        <SignHeader
         topTxt={ "Create Account"}
        text1={"Sign up to keep exploting amazing"}
        txt2={"destinations around the world!"}
         navigation={navigation} />
        <Spacer height={40} />


        <CustomTextInput
          leftIcon={icons.userName}
          withLabel={'First Name'}
          placeholder="Enter first name"
        />
        <Spacer height={20} />
        <CustomTextInput
          leftIcon={icons.userName}
          withLabel={'Last Name'}
          placeholder="Enter last name"
        />
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
        <Spacer height={20} />

        <CustomButton
        // onPress={()=>navigation.navigate("Signup")}
        title="Signup"
      />
      <Spacer height={10}/>

<View style={{alignSelf:"center",flexDirection:"row",alignItems:"center"}}>
           <CustomText
          label="Already have an accout?"
          fontSize={12}
          alignSelf="flex-end"
          marginBottom={1}
          fontWeight="500"
          color={colors.inputText}
        />
        <Spacer height={10}/>
       
        <CustomText
          onPress={() => {navigation.navigate("LoginScreen")}}
          label="Login"
          textDecorationLine={"underline"}

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

export default Signup;

const styles = StyleSheet.create({});
