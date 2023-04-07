import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import commonStyles from '../../../../utils/CommonStyles';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {moderateScale, scale} from 'react-native-size-matters';
import {Spacer} from '../../../../components/Spacer';
import Entypo from 'react-native-vector-icons/Entypo';
import {icons} from '../../../../assets/icons';

const AllTicketHeader = () => {
  return (
    <View style={commonStyles.justify}>
      <View style={commonStyles.rowflex}>
        <CustomText
          label={'Sort by:'}
          fontSize={13}
          fontWeight="600"
          color={colors.white}
        />
        <Spacer width={10} />
        <TouchableOpacity
          style={{
            backgroundColor: colors.inputGray,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

            //   opacity: 0.1,
            width: scale(80),
            paddingHorizontal: 10,
            height: scale(29),
            borderRadius: scale(40),
            shadowColor: Platform.OS == 'ios' ? colors.white : colors.black,
            shadowRadius: 3,
            elevation: 3,
            shadowOpacity: 0.2,
            // inputMarginTop:-20,
            shadowOffset: {width: 1, height: 2},
          }}>
          <CustomText
            label={'price'}
            fontSize={12}
            fontWeight="500"
            color={colors.white}
          />
          <Entypo
            name="chevron-small-down"
            size={moderateScale(20)}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.inputGray,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',

          //   opacity: 0.1,
          width: scale(35),
          paddingHorizontal: 10,
          height: scale(35),
          borderRadius: scale(100),
          shadowColor: Platform.OS == 'ios' ? colors.white : colors.black,
          shadowRadius: 3,
          elevation: 3,
          shadowOpacity: 0.2,
          // inputMarginTop:-20,
          shadowOffset: {width: 1, height: 2},
        }}>
        <Image
          source={icons.filter}
          style={{width: scale(25), height: scale(25)}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AllTicketHeader;

const styles = StyleSheet.create({});
