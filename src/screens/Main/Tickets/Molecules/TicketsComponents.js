import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';
import {colors} from '../../../../utils/Colors';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import commonStyles from '../../../../utils/CommonStyles';

const {height, width} = Dimensions.get('window');

const TicketsComponents = ({
  title,
  des,
  name,
  price,
  cardWidth,
  spacerHeigth,
  tickfillColor1,
  tickfillColor2,
  ticketStyle
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
        style={[{...styles.cardStyle, width: cardWidth || width / 1.2,},

        ticketStyle
      ]}
        // colors={['#3B2329', colors.pink1, '#C96A70']}
      >
        <View style={{...commonStyles.justify, alignItems: 'flex-start'}}>
          <CustomText
            label={'Lohare'}
            fontSize={13}
            fontWeight="700"
            color={colors.black}
          />
          <View>
            <CustomText
              label={'Ticket Time'}
              fontSize={13}
              fontWeight="700"
              color={colors.black}
            />
            <Spacer height={5} />
            <CustomText
              label={'1h 45m'}
              fontSize={13}
              alignSelf="center"
              fontWeight="500"
              color={colors.lightYellow}
            />
          </View>

          <CustomText
            label={'Karachi'}
            fontSize={13}
            marginBottom={1}
            fontWeight="700"
            color={colors.black}
          />
        </View>
        <Spacer height={15} />

        <View style={commonStyles.justify}>
          <CustomText
            label={'10:00 AM'}
            fontSize={12}
            alignSelf="center"
            fontWeight="700"
            color={colors.black}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                  width: 13,
                  height: 13,
                  backgroundColor: colors.primary,
                  borderRadius: 100,
                }}></View>
            </View>

            <CustomText
            label={
              '- - - - - - - - - - - - - '
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
            fontSize={12}
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
        <Spacer height={spacerHeigth || 18} />
        <View style={{width: '100%'}}>
          <CustomText
            label={
              '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - '
            }
            fontSize={10}
            ellipsizeMode="clip"
            numberOfLines={1}
            marginBottom={1}
            fontWeight="800"
            color={colors.inputGray}
          />
          <Spacer height={5} />
          <View style={commonStyles.justify}>
            <CustomText
              label={name}
              fontSize={13}
              fontWeight="700"
              color={colors.pink1}
            />

            <CustomText
              label={price}
              fontSize={13}
              fontWeight="700"
              color={colors.pink1}
            />
          </View>
        </View>
        {
          !tickfillColor1&&(
            <View
          style={{
            position: 'absolute',
            top: 0,
            left: -10,
            width: 20,
            height: 20,
            backgroundColor: colors.primary,
            borderRadius: 100,
            top: '84%',
          }}></View>

          )
        }

        {
          !tickfillColor2&&(
            <View
          style={{
            position: 'absolute',
            top: 0,
            right: -10,
            width: 20,
            height: 20,
            backgroundColor:   colors.primary,
            borderRadius: 100,
            top: '85%',
          }}></View>

          )
        }

        

        
      </View>
    </View>
  );
};

export default TicketsComponents;

const styles = ScaledSheet.create({
  cardStyle: {
    height: verticalScale(140),
    marginBottom: 10,
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: scale(10),
    padding: scale(15),
  },
});
