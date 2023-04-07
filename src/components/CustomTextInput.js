import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import CustomText from './CustomText';
import {colors} from '../utils/Colors';
import commonStyles from '../utils/CommonStyles';
import {InterFont, Roboto} from '../utils/Fonts';
import {images} from '../assets/images';

const CustomTextInput = ({
  eyeClick,
  password,
  setEyeClick,
  error,
  withLabel,
  leftIcon,
  source,
  iconWidth,
  iconHeight,
  onRightPress,
  rigthIcon,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={!props.onPress}
      style={[
        {
          width: props.width || '100%',
          height: props.height || verticalScale(50),
          borderRadius: props.borderRadius || moderateScale(5),
          backgroundColor: props.backgroundColor || "#ECF2F6",
          borderWidth:0.5,
          borderColor:"#ced4da",
          alignItems:"center",
          padding: scale(10),
          flexDirection:"row",
          marginTop: props.marginTop || verticalScale(0),
          paddingLeft: props.paddingLeft,
          paddingRight: rigthIcon? 60:0,
          shadowColor:
          Platform.OS == 'ios'
            ? colors.inputGray
            : colors.black,
        shadowRadius: 5,
        elevation: 3,
        shadowOpacity: 0.2,
        // inputMarginTop:-20,
        shadowOffset: {width: 1, height: 1},
        },
        props.inputStyle,
      ]}>
         {leftIcon ? (
          <View
            activeOpacity={0.6}
            // onPress={onRightPress}
            style={{
              width:  scale(20),
              height:  verticalScale(20),
              
              marginRight:scale(15)
            }}>
            <Image
              style={{width:"100%",height:"100%",tintColor:colors.primary}}
              
              resizeMode="contain"
              source={leftIcon}
            />
          </View>
        ) : (
          <></>
        )}
        
        <View>
        <CustomText
        label={withLabel}
        color={colors.inputGray}
        fontWeight="600"
        fontSize={verticalScale(8)}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          marginTop: props.inputMarginTop || verticalScale(5),
        }}>
        <TextInput
          onPressIn={props.onInputPress}
          editable={props.editable}
          style={[
            {
              width: '93%',
              height: props.inputHeight || '100%',
              paddingRight: props.paddingRight || 10,
              paddingHorizontal: props.paddingHorizontal,
              fontFamily: props.fontFamily || Roboto.Regular300,
              color: props.color || colors.inputText,
              fontSize: verticalScale(11),
              multiline: props.multiline,
            },
          ]}
          onChangeText={props.onChangeText}
          value={props.value}
          numberOfLines={props.numberOfLines}
          keyboardType={props.keyboardType}
          autoCapitalize="none"
          multiline={props.multiline}
          placeholder={props.placeholder}
          placeholderTextColor={colors.inputText}
          secureTextEntry={props.secureTextEntry}
        />

       
        
      </View>

        </View>
        {rigthIcon ? (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={onRightPress}
            style={{
              width: iconWidth || scale(15),
              height: iconHeight || verticalScale(15),
              marginLeft: verticalScale(10),
            }}>
            <Image
              style={commonStyles.img}
              resizeMode="contain"
              source={rigthIcon}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
     
    </TouchableOpacity>
  );
};
export default CustomTextInput;
const styles = ScaledSheet.create({
  icon: {
    width: '20@s',
    height: '20@vs',
    marginLeft: verticalScale(10),
  },
});
