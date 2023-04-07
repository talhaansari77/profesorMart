import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import commonStyles from '../../../../utils/CommonStyles';
import {moderateScale, scale} from 'react-native-size-matters';
import {icons} from '../../../../assets/icons';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Roboto} from '../../../../utils/Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TicketTop = () => {
  return (
    <>
      <View style={commonStyles.justify}>
        <TouchableOpacity>
          <Image
            style={{width: scale(20), height: scale(20)}}
            source={icons.setting}
          />
        </TouchableOpacity>
        <CustomText
          label="AssalamuAlaikum Umair"
          fontSize={13}
          marginBottom={1}
          fontWeight="700"
          fontFamily={Roboto.BlackBold}
          color={colors.black}
        />

        <TouchableOpacity>
          <MaterialIcons name="notifications" size={moderateScale(23)} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TicketTop;

const styles = StyleSheet.create({});
