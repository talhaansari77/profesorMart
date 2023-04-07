import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {scale, verticalScale} from 'react-native-size-matters';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';
import {colors} from '../../../../utils/Colors';
import TicketsComponents from './TicketsComponents';

const data = [
  {
    id: 1,
    title: 'RMV-SparPass',
    des: 'Use local public transport throughout Germany',
    name:"Lahore to Karachi",price:"$160"
  },
  {
    id: 2,
    title: 'RMV-SparPass',
    des: 'Use local public transport throughout Germany',
    name:"Lahore to Karachi",price:"$160"
  },
  {
    id: 3,
    title: 'RMV-SparPass',
    des: 'Use local public transport throughout Germany',
    name:"Lahore to Karachi",price:"$160"
  },

  //   { id: 4, text: "Item 4" },
  //   { id: 5, text: "Item 5" },
];

// console.log("dataTimeData",moment("2023-03-12T20:30:11.000Z",).utc().format('dddd MMM YYYY'));
// console.log("dataTimeData",moment("2023-03-12T20:30:11.000Z",).utc().format('DD MMM YYYY'));

const {height, width} = Dimensions.get('window');
const TicketCarousel = ({}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item, index}) => {
    return <TicketsComponents 
    item={item} 
    name={item.name}
    price={item.price}
    title={item.title} des={item?.des} 
    />;
  };

  return (
    <View style={styles.container}>
      <Spacer height={20} />
      <Carousel
        data={data}
        renderItem={renderItem}
        // sliderHeight={300}
        // itemHeight={60}
        sliderWidth={width}
        itemWidth={width / 1.3}
        layout="default"
        inactiveSlideScale={0.8} // set inactive slide scale to make items smaller
        onSnapToItem={index => {
          setActiveSlide(index);
        }} // update the active slide index
      />
      <View style={{alignItems: 'center'}}>
        <Spacer height={10} />
        <Pagination
          dotsLength={5}
          activeDotIndex={activeSlide}
          containerStyle={styles.pagination}
          dotStyle={styles.dot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </View>
      <Spacer height={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },

  pagination: {
    // position: "absolute",
    // bottom: 0,
    paddingVertical: 10,
    width: width / 8,
    overflow: 'hidden',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginHorizontal: 8,
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.inputPlace,
  },
  cardStyle: {
    width: width / 1.3,
    height: verticalScale(100),
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: scale(15),
    padding: scale(15),
    // backgroundColor: colors.primary,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 5,

    // elevation: 9,
  },
});

export default TicketCarousel;
