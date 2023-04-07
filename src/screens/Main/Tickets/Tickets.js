import {View, Text, ScrollView, ScrollViewBase} from 'react-native';
import React,{useState,useRef} from 'react';
import TicketTop from './Molecules/TicketTop';
import commonStyles, {PH20} from '../../../utils/CommonStyles';
import {Spacer} from '../../../components/Spacer';
import TicketCarousel from './Molecules/TicketCarousel';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {Roboto} from '../../../utils/Fonts';
import AvailableTicketDays from './Molecules/AvailableTicketDays';
import TicketsComponents from './Molecules/TicketsComponents';
import TicketTopNav from './Molecules/TicketTopNav';
import Tab from '../../../components/Tab';
import AllTickets from '../AllTickets/AllTickets';
import MyTickets from '../MyTickets/MyTickets';
import PagerView from 'react-native-pager-view';


const Tickets = () => {

  const [tab, setTab] = useState(0);

  const pager = useRef(null);

  const onClickTab = index => {
    setTab(index);
    pager?.current?.setPage(index);
  };

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
      name: 'Lahore to Karachi',
      price: '$160',
    },
    {
      id: 2,
      title: 'RMV-SparPass',
      des: 'Use local public transport throughout Germany',
      name: 'Lahore to Karachi',
      price: '$160',
    },
    {
      id: 3,
      title: 'RMV-SparPass',
      des: 'Use local public transport throughout Germany',
      name: 'Lahore to Karachi',
      price: '$160',
    },
  ];
  const data2 = [
    {
      id: 1,
      title: 'RMV-SparPass',
      des: 'Use local public transport throughout Germany',
      name: 'Lahore to Karachi',
      price: '$160',
    },
    {
      id: 2,
      title: 'RMV-SparPass',
      des: 'Use local public transport throughout Germany',
      name: 'Lahore to Karachi',
      price: '$160',
    },
    {
      id: 3,
      title: 'RMV-SparPass',
      des: 'Use local public transport throughout Germany',
      name: 'Lahore to Karachi',
      price: '$160',
    },

    //   { id: 4, text: "Item 4" },
    //   { id: 5, text: "Item 5" },
  ];
  return (
    // <ScrollView>
       <View style={commonStyles.IosPadding}>
      <Spacer height={10} />
      <PH20>
        <TicketTop />
      </PH20>
      <Spacer height={20}/>
      <Tab tab={tab} setTab={onClickTab} />
      <Spacer height={10}/>


      <PagerView
          onPageSelected={props => setTab(props.nativeEvent.position)}
          style={{flex: 1}}
          initialPage={0}
          scrollEnabled={true}
          ref={pager}>
          <View style={{flex: 1}} key="1">
            <AllTickets/>
           
          </View>

          <View style={{flex: 1}} key="2">
            <MyTickets/>
           
           </View>
         
        </PagerView>

      {/* <TicketCarousel /> */}
      {/* <TicketTopNav/> */}
      {/* <PH20>
        <CustomText
          label="Tickets Dates"
          fontSize={14}
          fontFamily={Roboto.BlackBold}
          color={colors.primary}
        />
        <Spacer height={15} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {ticketDate.map((item, index) => {
              return <AvailableTicketDays item={item} index={index} />;
            })}
          </View>
        </ScrollView>
        <Spacer height={10} />

        <CustomText
          label="Weekly Tickets"
          fontSize={14}
          fontFamily={Roboto.BlackBold}
          color={colors.primary}
        />
        <Spacer height={10} />
      </PH20> */}
      
      {/* <ScrollView>

      <View >
            {data1.map((item, index) => {
              return <TicketsComponents 
              item={item} 
              cardWidth={"90%"}
              spacerHeigth={20}
              name={item.name}
              price={item.price}
              title={item.title} des={item?.des} 
             />;
            })}
          </View>

      </ScrollView> */}
    </View>

    // </ScrollView>
   
  );
};

export default Tickets;
