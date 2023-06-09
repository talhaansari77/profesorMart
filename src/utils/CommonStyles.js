import {
  scale,
  ScaledSheet,
  verticalScale,
  moderateScale,
} from 'react-native-size-matters';
import {

  Platform, View
} from 'react-native'
import styled from 'react-native-styled-components';
import { colors } from './Colors';
// import colors from './colors';
const commonStyles = ScaledSheet.create({
  container: {
  
    flexDirection: 'column',
    padding: 10,
    flex: 1,
  },
  main:{
    flex:1,
    backgroundColor:colors.white,
  },

  rowMain: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  padding: {
    paddingHorizontal: 20,
  },
  rowflex:{
    flexDirection:"row",
    alignItems:"center",
  },

  justify: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    width: moderateScale(25),
    height: verticalScale(25),
  },
  img: {
    width: '100%',
    height: '100%',
  },
  
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  IosPadding:{
    flex: 1,paddingTop:Platform.OS=="ios"?verticalScale(40):5,
    backgroundColor:colors.white
  }
});

export const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});
export const PH20 = styled(View, {
  paddingHorizontal: scale(20),
});


export default commonStyles;
