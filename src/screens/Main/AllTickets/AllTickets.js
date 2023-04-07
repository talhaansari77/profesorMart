import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utils/Colors';
import AvailableTicketDays from '../Tickets/Molecules/AvailableTicketDays';
import {scale, verticalScale} from 'react-native-size-matters';
import {PH10, PH20} from '../../../utils/CommonStyles';
import {Spacer} from '../../../components/Spacer';
import AllTicketHeader from './Molecule/AllTicketHeader';
import CustomText from '../../../components/CustomText';
import {FlatList} from 'react-native-gesture-handler';
import TicketsComponents from '../Tickets/Molecules/TicketsComponents';

const AllTickets = () => {
  const [ActiveDate, setActiveDate] = useState(-1);

  const ticketDate = [
    {id: 1, day: 'Sat', date: '4', available: 'Available'},
    {id: 2, day: 'Sun', date: '5', available: 'Available'},
    {id: 3, day: 'Mon', date: '6', available: 'Available'},
    {id: 4, day: 'Tue', date: '7', available: 'Available'},
    {id: 5, day: 'Wed', date: '8', available: 'Available'},
    {id: 6, day: 'Thu', date: '9', available: 'Available'},
    {id: 7, day: 'Fri', date: '10', available: 'Available'},
  ];
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
      <>
        <TicketsComponents
        item={item}
    
        name={item.name}
        price={item.price}
        title={item.title}
        des={item?.des}
      />
      <Spacer height={20}/>
      </>
    
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <PH10>
        <ScrollView
          contentContainerStyle={{height: verticalScale(100)}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {ticketDate.map((item, index) => {
              return (
                <AvailableTicketDays
                  item={item}
                  ActiveDate={ActiveDate}
                  setActiveDate={setActiveDate}
                  ndex={index}
                />
              );
            })}
          </View>
        </ScrollView>
      </PH10>
      <Spacer height={10} />

      <View
        style={{
          backgroundColor: colors.primary,
          flex: 1,
          borderTopLeftRadius: scale(35),
          borderTopRightRadius: scale(35),
        }}>
          <ScrollView>

        <PH20>
          <Spacer height={20} />

          <AllTicketHeader />
          <Spacer height={10} />

          <CustomText
            label={'12 Tickets available'}
            fontSize={13}
            fontWeight="600"
            color={colors.white}
          />
        </PH20>
        <Spacer height={20} />
        <PH10>
        <FlatList
          data={data1}
          // contentContainerStyle={{
          //   paddingBottom: scale(150),
          // }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />

        </PH10>

       
                  </ScrollView>

      </View>
      
    </View>
  );
};

export default AllTickets;

const styles = StyleSheet.create({});
