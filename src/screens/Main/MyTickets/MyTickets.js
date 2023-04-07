import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  Platform,
} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/Colors';
import CustomText from '../../../components/CustomText';
import {PH20} from '../../../utils/CommonStyles';
import CustomSearch from '../../../components/CustomSearch';
import {Spacer} from '../../../components/Spacer';
import TicketVertical from './TicketVertical';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import TicketsComponents from '../Tickets/Molecules/TicketsComponents';

const MyTickets = () => {
  const data = [1, 2, 3, 4, 5];
  const {height, width} = Dimensions.get('window');

  const data1 = [
    {
      id: 1,
      title: 'RMV-SparPass',
      des: 'Use local public transport throughout Germany',
      name: 'Niazi Express',
      price: '$160',
    },
    {
      id: 2,
      title: 'RMV-SparPass',
      des: 'Use local public transport throughout Germany',
      name: 'Skyways',
      price: '$160',
    },
    {
      id: 3,
      title: 'RMV-SparPass',
      des: 'Use local public transport throughout Germany',
      name: 'Kohistan Express',
      price: '$160',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <TicketVertical
        item={item}
        name={item.name}
        price={item.price}
        title={item.title}
        des={item?.des}
      />
    );
  };

  const renderWeeklyTickets = ({item, index}) => {
    return (
      <>
      <Spacer height={10}/>
        <TicketsComponents
          item={item}
          tickfillColor1={"#f8f9fa"}
          tickfillColor2={colors.white}
          name={item.name}
          price={item.price}
          title={item.title}
          des={item?.des}
          ticketStyle={{

    shadowColor:
    Platform.OS == 'ios'
      ? colors.inputGray
      : colors.black,
  shadowRadius: 5,
  elevation: 3,
  shadowOpacity: 0.5,
  // inputMarginTop:-20,
  shadowOffset: {width: 0, height: 5},

          }}
        />
        <Spacer height={20} />
      </>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <PH20>
        <Spacer height={10} />
        <CustomSearch />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Spacer height={15} />

          <CustomText
            label={'Full Country'}
            fontSize={13}
            fontWeight="700"
            color={colors.primary}
          />
          <Spacer height={15} />

          {/* <TicketVertical/> */}
          <View style={{alignItems: 'center'}}>
            <Carousel
              data={data}
              renderItem={renderItem}
              // sliderHeight={300}
              // itemHeight={60}
              sliderWidth={width}
              itemWidth={width / 1.6}
              layout="default"
              inactiveSlideScale={0.8} // set inactive slide scale to make items smaller
              onSnapToItem={index => {
                // setActiveSlide(index);
              }} // update the active slide index
            />
          </View>
          <Spacer height={15} />

          <CustomText
            label={'Weekly Tickets'}
            fontSize={13}
            fontWeight="700"
            color={colors.primary}
          />
          <Spacer height={15} />

          <FlatList
            data={data1}
            // contentContainerStyle={{
            //   paddingBottom: scale(150),
            // }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderWeeklyTickets}
          />
        </ScrollView>
      </PH20>
    </View>
  );
};

export default MyTickets;

const styles = StyleSheet.create({});
