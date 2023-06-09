import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator, Platform } from 'react-native';
// import { Ionicons } from "@expo/vector-icons";
import { ScaledSheet, verticalScale, scale, moderateScale } from 'react-native-size-matters';

// import { ActivityIndicator } from "react-native-paper";
import { colors } from '../utils/Colors';
import { Montserrat, Roboto } from '../utils/Fonts';
function CustomButton({
  loading,
  title,
  onPress,
  icon,
  color,
  width,
  height,
  borderColor,
  borderRadius,
  marginTop,
  alignItems,
  justifyContent,
  borderWidth,
  backgroundColor,
  fontFamily,
  marginBottom,
  fontSize,
  marginHorizontal
}) {
  return (
    <TouchableOpacity
      disabled={loading}
      activeOpacity={0.6}
      style={[
        {
          backgroundColor: backgroundColor || colors.primary,
          width: width || '100%',
          height: height || verticalScale(45),
          borderRadius: borderRadius || 10,
          alignItems: alignItems || 'center',
          justifyContent: justifyContent || 'center',
          borderWidth:borderWidth,
          borderColor:borderColor,
          marginTop,
          marginBottom:marginBottom,
          marginHorizontal:marginHorizontal,
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
      ]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} size={moderateScale(26)} />
      ) : (
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={[
              {
                color: color || colors.white,
                fontSize: verticalScale(fontSize|| 15),
                fontWeight:"600",
                fontFamily: fontFamily || Roboto.BlackBold
              },
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  filledButton: {
    backgroundColor: colors.primary,
  },
});

export default CustomButton;
