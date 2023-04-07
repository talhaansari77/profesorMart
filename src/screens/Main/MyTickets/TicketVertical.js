import {StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import React from 'react';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../../../components/CustomText';
import commonStyles from '../../../utils/CommonStyles';
import { colors } from '../../../utils/Colors';
import { Spacer } from '../../../components/Spacer';

const  width= Dimensions.get('window').width
const height = Dimensions.get('window').height


const TicketVertical = ({
  title,
  des,
  name,
  price,
  cardWidth,
  spacerHeigth,
}) => {
  return (
    <View
    // style={{
    //   shadowColor: 'white',
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.3,

    //   shadowRadius: 5,

    //   elevation: 9,
    // }}
    >
      <View
        style={{...styles.cardStyle, 
            height:height/3.3,
            

            width: cardWidth || width / 1.6}}
        // colors={['#3B2329', colors.pink1, '#C96A70']}
      >
        <View style={{...commonStyles.justify, alignItems: 'flex-start'}}>
          <CustomText
            label={'Lohare'}
            fontSize={12}
            fontWeight="700"
            color={colors.black}
          />
          <View>
            <CustomText
              label={'Ticket Time'}
              fontSize={12}
              fontWeight="700"
              color={colors.black}
            />
            <Spacer height={5} />
            <CustomText
              label={'1h 45m'}
              fontSize={12}
              alignSelf="center"
              fontWeight="500"
              color={colors.lightYellow}
            />
          </View>

          <CustomText
            label={'Karachi'}
            fontSize={12}
            marginBottom={1}
            fontWeight="700"
            color={colors.black}
          />
        </View>
        <View style={{height:"30%"}}/>

        <View style={commonStyles.justify}>
          <CustomText
            label={'10:00 AM'}
            fontSize={10}
            alignSelf="center"
            fontWeight="700"
            color={colors.black}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: scale(100),
                backgroundColor: '#adb5bd',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: colors.primary,
                  borderRadius: 100,
                }}></View>
            </View>

            <CustomText
            label={
              '- - - - - - '
            }
            fontSize={10}
            ellipsizeMode="clip"
            numberOfLines={1}
            marginBottom={1}
            fontWeight="800"
            color={colors.inputGray}
          />

            <View
              style={{
                width: 22,
                height: 22,
                borderRadius: scale(100),
                backgroundColor: '#adb5bd',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderWidth:1,
                  borderColor:colors.primary,
                  backgroundColor: colors.white,
                  borderRadius: 100,
                }}></View>
            </View>
          </View>

          <CustomText
            label={'15:55 AM'}
            fontSize={10}
            alignSelf="center"
            fontWeight="700"
            color={colors.black}
          />
        </View>
        {/* <CustomText
          label={title}
          fontSize={14}
          marginBottom={1}
          fontWeight="700"
          color={colors.black}
        /> */}
        {/* <Spacer height={5} />

        <CustomText
          label={des}
          fontSize={11}
          marginBottom={1}
          fontWeight="400"
          color={colors.black}
        /> */}
                <View style={{height:"20%"}}/>

        <View style={{width: '100%'}}>
          <CustomText
            label={
              '- - - - - - - - - - - -  - - - - - - - - - - - - '
            }
            fontSize={10}
            ellipsizeMode="clip"
            numberOfLines={1}
            marginBottom={1}
            fontWeight="800"
            color={colors.inputGray}
          />
          <Spacer height={10} />
          <View style={commonStyles.justify}>
            <CustomText
              label={"Niazi Express"}
              fontSize={13}
              fontWeight="700"
              color={colors.pink1}
            />

            <CustomText
              label={"$160"}
              fontSize={13}
              fontWeight="700"
              color={colors.pink1}
            />
          </View>
        </View>

        {/* <View
          style={{
            position: 'absolute',
            top: 0,
            left: -10,
            width: 20,
            height: 20,
            backgroundColor: "#f8f9fa",
            borderRadius: 100,
            top: '85%',
          }}></View> */}
{/* 
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: -10,
            width: 20,
            height: 20,
            backgroundColor:"#f8f9fa",
            borderRadius: 100,
            top: '85%',
          }}></View> */}
      </View>
    </View>
  );
};

export default TicketVertical;

const styles = ScaledSheet.create({
  cardStyle: {
    marginBottom: 10,
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderWidth:.2,

    borderRadius: scale(10),
    padding: scale(15),
    shadowColor:
    Platform.OS == 'ios'
      ? colors.inputGray
      : colors.black,
  shadowRadius: 5,
  elevation: 3,
  shadowOpacity: 0.5,
  // inputMarginTop:-20,
  shadowOffset: {width: 0, height: 5},
  },
});
