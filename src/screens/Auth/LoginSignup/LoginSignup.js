import {ImageBackground, StyleSheet, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import { Spacer } from '../../../components/Spacer';
import commonStyles from '../../../utils/CommonStyles';
import { images } from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import { styles } from './styles';
import { colors } from '../../../utils/Colors';
import { scale } from 'react-native-size-matters';
import BodyItem from './molecules/BodyItem';


const LoginSignup = ({navigation}) => {
  return (
    <View style={commonStyles.main}>
      <Spacer height={Platform.OS=="ios"? 80:60} />

        <View style={styles.imgContainer}>
          <Image
            resizeMode="center"
            style={commonStyles.img}
            source={images.appIcon}
          />
        </View>
        <BodyItem navigation={navigation} />
        <Spacer height={40}/>
        <View style={{paddingHorizontal:scale(10)}}>
        {/* <GradientButton
        onPress={()=>navigation.navigate("Signup")}
         title="Register" /> */}
        <Spacer height={20}/>

        {/* <CustomButton 
        onPress={()=>navigation.navigate("Login")}
        title="Sign In" backgroundColor={colors.white} /> */}

        </View>


    </View>
  );
};

export default LoginSignup;
