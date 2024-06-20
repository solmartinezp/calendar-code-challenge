import React, { Key, useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Header from '@/components/Header';
import { Colors } from '../../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import getMonthName from '@/hooks/getMonthName';
import Card from '@/components/Card';
import AbstractService, { AxiosConfig } from '../services/AbstractService';
import Loading from '../hoc/Loading'; 
import Error from '../hoc/Error';

import { Action } from '../models/ChallengeData';
import { Calendar } from '../models/ChallengeData';
import { Customer } from '../models/ChallengeData';
import { ChallengeData } from '../models/ChallengeData';

export default function CalendarItem() {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [filteredActions, setFilteredActions] = useState<Action[]>([]);
  const [sortedCalendar, setSortedCalendar] = useState<Calendar[]>([]);
  const [response, setResponse] = useState<ChallengeData | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  
    const apiUrl = process.env.API_URL;
  
    const config: AxiosConfig = {
      url: 'https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge',
      method: 'GET'
    };
  
    const pullData = async () => {
      try {
        const res = await AbstractService(config);
        console.log('RES', res);
        setResponse(res.data);
        setLoading(false);
        setHasError(false);
      } catch (err) {
        console.error('Error fetching profile data:', err);
      }
    };
  
    useEffect(() => {
      pullData();
    }, []);

    useEffect(() => {
      if (response) {
        const filteredCalendar = response.calendar.filter(item => !item.deleted);
  
        if (response.status !== "Active Subscription") {
          console.log('INACTIVE SUBSCRIPTION');
        }
  
        const sortedCalendar = filteredCalendar.sort((a, b) => {
          if (a.year === b.year) {
            return a.month - b.month;
          } else {
            return a.year - b.year;
          }
        });
  
        setCustomer(response.customer);
        setSortedCalendar(sortedCalendar);
  
        const actions: Action[] = [];
        filteredCalendar.forEach(item => {
          actions.push(...item.actions);
        });
  
        setFilteredActions(actions);
      }
    }, [response]);

    if (loading) {
      return <Loading />
    }

    if (hasError) {
      return <Error />
    }

  return (
    <ScrollView style={{ backgroundColor: Colors.light.background}}>
      <Header title="Calendar" />

      {sortedCalendar.map((item, index) => (
      <View key={index} >
        <Text style={styles.date}>
          {`${getMonthName(item.month)} ${item.year}`}
        </Text>

        {item.actions.length < 1 ?  (
          <Card
            status="None"
          />
        ) : 
          item.actions.map(action => (
              <Card
                key={action.id}
                title={action.name}
                subtitle={action.vendor ? action.vendor.vendorName : 'Vendor Not Available'}
                phoneNumber={customer?.phoneNumber}
                address={`${customer?.street}, ${customer?.city}, ${customer?.state}`}
                status={action.status}
                currentDate={action.scheduledDate ?? ''}
              />
          ))
        }
        </View>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 16,
    fontFamily: 'Lato-Regular.ttf',
    fontWeight: 'bold',
    marginTop: 20,
    width: '92%',
    alignSelf: 'center'
  }
});
