import {View, ScrollView, Platform} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../utils/Colors';
import CustomText from './CustomText';
import {Roboto} from '../utils/Fonts';

const Tab = ({tab, setTab}) => {
  TutorProfileTab = [
    {
      id: 1,
      tab: 'All Tickets',
    },
    {
      id: 2,
      tab: 'My Tickets',
    },
  ];
  return (
    <>
      <View style={styles.mainContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
          }}>
          {TutorProfileTab.map((item, index) => {
            return (
              <View
                key={index}
                style={{alignItems: 'center', marginRight: scale(20)}}>
                <CustomText
                  onPress={() => {
                    setTab(index);
                  }}
                  label={item.tab}
                  fontSize={tab == index ? 13 : 12}
                  textStyle={{
                    color: tab == index ? colors.primary : colors.inputText,
                    fontFamily:
                      tab == index ? Roboto.SemiBold : Roboto.Regular300,

                    paddingVertical: verticalScale(15),
                  }}
                />
                {tab == index && <View style={styles.emptyView} />}
              </View>
            );
          })}
        </View>
      </View>

      {/* <View style={styles.mainContainer}>
      <View style={{alignItems: 'center', marginLeft: scale(15)}}>
        <CustomText
          onPress={() => {
              setDashboard(true)
              setClasses(false)
              setMessages(false)
          }}
          label="Dashboard"
          textStyle={{
            color: dashboard ? colors.secondary : colors.textColor,
            fontFamily: dashboard ? fonts.bold : fonts.regular,
            paddingVertical: verticalScale(15),
          }}
        />
        {dashboard && <View style={styles.emptyView} />}
      </View>
      <View style={{alignItems: 'center'}}>
        <CustomText
          onPress={() => {
            setDashboard(false)
            setClasses(true)
            setMessages(false)
          }}
          label="Classes"
          textStyle={{
            color: classes ? colors.secondary : colors.textColor,
            fontFamily: classes ? fonts.bold : fonts.regular,
            paddingVertical: verticalScale(15),
          }}
        />
        {classes && <View style={styles.emptyView} />}
      </View>
      <View style={{alignItems: 'center', marginRight: scale(8)}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomText
            onPress={() => {
              setDashboard(false)
              setClasses(false)
              setMessages(true)
            }}
            label="Massages"
            textStyle={{
                color: messages ? colors.secondary : colors.textColor,
                fontFamily: messages ? fonts.bold : fonts.regular,
                paddingVertical: verticalScale(15),
              }}
          />
          <Feather
            name="chevrons-right"
            color={messages ? colors.secondary : colors.textColor}
            size={moderateScale(22)}
          />
        </View>
        {messages && <View style={styles.emptyView} />}
      </View>
    </View>
    {dashboard &&  <Dashboard />}
    {classes &&  <Classes />}
    {messages &&  <Messages />}  */}
    </>
  );
};

export default Tab;

const styles = ScaledSheet.create({
  mainContainer: {
    // width:"100%",
    height: verticalScale(40),
    marginHorizontal: scale(20),
    backgroundColor: '#ECF2F6',
    borderWidth: 0.5,
    borderColor: '#ced4da',
    flexDirection: 'row',
    borderRadius: scale(20),
    justifyContent: 'space-between',
    borderWidth: 1,
    alignItems: 'center',
    shadowColor: Platform.OS == 'ios' ? colors.inputGray : colors.black,
    shadowRadius: 5,
    elevation: 3,
    shadowOpacity: 0.2,
    // inputMarginTop:-20,
    shadowOffset: {width: 1, height: 1},
    // borderTopColor: colors.textStyle,
  },
  emptyView: {
    width: '80@s',
    height: '2.5@vs',
    borderRadius: '100@msr',
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: '-2@vs',
  },
});
