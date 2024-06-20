import React, { Key, useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Header from '@/components/Header';
import { Colors } from '../../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import getMonthName from '@/hooks/getMonthName';
import Card from '@/components/Card';

import { Action } from '../models/ChallengeData';
import { Calendar } from '../models/ChallengeData';
import { Customer } from '../models/ChallengeData';
import { ChallengeData } from '../models/ChallengeData';

export default function CalendarItem() {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [filteredActions, setFilteredActions] = useState<Action[]>([]);
  const [sortedCalendar, setSortedCalendar] = useState<Calendar[]>([]);

  useEffect(() => {
    // Simulated JSON response from GET request
    const responseData: ChallengeData = {
      created: "2024-05-30T16:23:46+00:00",
      customer: {
        zip: "30308",
        firstName: "John",
        lastName: "Aylward",
        phoneNumber: "+14049936631",
        city: "Atlanta",
        street: "402 7th Street Northeast",
        id: "818efc0e-e5a6-40ad-99c1-f6a5558cb05d",
        state: "GA",
        email: "Aylward.john@gmail.com"
      },
      deleted: false,
      calendar: [
        {
          month: 5,
          actions: [
            {
              arrivalEndWindow: "2:00 PM",
              price: 178,
              vendor: {
                zip: "30043",
                firstName: "Freddie",
                lastName: "Turner",
                emailAddress: "freddie@c2h.com",
                phoneNumber: "770-241-4251",
                city: "Lawrenceville",
                streetAddress: "1625 Lakes Parkway, Suite H",
                id: "bb5ce71a-4b5e-4dbf-b85f-72bc5af7be23",
                state: "GA",
                vendorName: "C2H Air"
              },
              name: "HVAC Service Plan",
              scheduledDate: "2024-06-18T12:00:00-04:00",
              id: "cfb7d2c3-8b16-412a-94e5-77f33090f286",
              arrivalStartWindow: "1:00 PM",
              status: "Scheduled"
            },
            {
              name: "Mosquito spray",
              scheduledDate: "2024-06-04T12:00:00-04:00",
              id: "90d22530-e951-490c-ab38-efe10e68e39d",
              price: 455,
              vendor: {
                zip: "30349",
                firstName: "Derek",
                lastName: "Davis",
                emailAddress: "goldbugpestmgt@gmail.com",
                phoneNumber: "404-217-0934",
                city: "Atlanta",
                streetAddress: "3445 Ellington Way",
                id: "892c0b59-ed2f-4309-8022-3205f9e0e85b",
                state: null,
                vendorName: "Goldbug"
              },
              status: "Completed"
            },
            {
              arrivalEndWindow: "11:00 AM",
              price: 120,
              vendor: {
                zip: null,
                firstName: "Jose",
                lastName: "Arellano",
                emailAddress: "Pilararellano95@gmail.com",
                phoneNumber: "404-964-9329",
                city: null,
                streetAddress: null,
                id: "90fee8f0-9e1c-4633-ab0b-18b3ecf541e2",
                state: "GA",
                vendorName: "Aqua Pressure and Soft Wash LLC "
              },
              name: "Pressure Wash",
              scheduledDate: "2024-06-26T12:00:00-04:00",
              id: "acaed453-e038-480f-b8ca-59ed4b0c1192",
              arrivalStartWindow: "9:00 AM",
              status: "Scheduled"
            },
            {
              arrivalEndWindow: "11:00 AM",
              price: 252,
              vendor: {
                zip: null,
                firstName: "Jose",
                lastName: "Arellano",
                emailAddress: "Pilararellano95@gmail.com",
                phoneNumber: "404-964-9329",
                city: null,
                streetAddress: null,
                id: "90fee8f0-9e1c-4633-ab0b-18b3ecf541e2",
                state: "GA",
                vendorName: "Aqua Pressure and Soft Wash LLC "
              },
              name: "House Wash",
              scheduledDate: "2024-06-26T12:00:00-04:00",
              id: "7ba688dc-2d2f-4803-b02b-ee3e23a347be",
              arrivalStartWindow: "9:00 AM",
              status: "Scheduled"
            }
          ],
          year: 2024
        },
        {
          month: 6,
          actions: [
            {
              name: "Window Cleaning (Exterior & Interior)",
              id: "d81e5cf8-9f52-4bf7-9c3d-11002000cc31",
              price: 390,
              status: "Unscheduled"
            },
            {
              name: "Mosquito spray",
              id: "63c25e17-1ac9-452b-9eac-b4d820cd3135",
              price: 455,
              status: "Unscheduled"
            }
          ],
          year: 2024
        },
        {
          month: 7,
          actions: [
            {
              name: "Pest Control",
              id: "0d282f3b-13a6-4615-934a-b61213781995",
              price: 368,
              status: "Unscheduled"
            },
            {
              name: "Mosquito spray",
              id: "ae876ec0-366b-4b1f-82e1-996c532c40c7",
              price: 455,
              status: "Unscheduled"
            }
          ],
          year: 2024
        },
        {
          month: 8,
          actions: [
            {
              name: "Mosquito spray",
              id: "e143e109-c274-41a9-973b-bb206b571258",
              price: 455,
              status: "Unscheduled"
            }
          ],
          year: 2024
        },
        {
          month: 9,
          actions: [
            {
              name: "Mosquito spray",
              id: "f708381a-81eb-4c3c-bc4a-c6ebf243d23e",
              price: 455,
              status: "Unscheduled"
            }
          ],
          year: 2024
        },
        {
          month: 10,
          actions: [
            {
              name: "Pest Control",
              id: "5524229d-2954-4fdf-91e0-3009604f2da2",
              price: 368,
              status: "Unscheduled"
            }
          ],
          year: 2024
        },
        {
          month: 11,
          actions: [
            {
              name: "Roof Blowing / Gutter Cleaning",
              id: "fd389abb-4fc1-47e0-beb0-8f2e35b9f987",
              price: 144,
              status: "Unscheduled"
            },
            {
              name: "HVAC Service Plan",
              id: "fb250671-88b2-417f-8a4d-8f2641e9f97d",
              price: 178,
              status: "Unscheduled"
            }
          ],
          year: 2024
        },
        {
          month: 0,
          actions: [
            {
              name: "Dryer Vent Cleaning Only",
              id: "ebe0c62e-8486-4943-8d44-756d44999d74",
              price: 0,
              status: "Unscheduled"
            }
          ],
          year: 2025
        },
        {
          month: 1,
          actions: [
            {
              name: "Pest Control",
              id: "f2da2af7-29c2-4d2d-9e86-5253dbf0acfb",
              price: 368,
              status: "Unscheduled"
            }
          ],
          year: 2025
        },
        {
          month: 2,
          actions: [],
          year: 2025
        },
        {
          month: 3,
          actions: [
            {
              name: "Mosquito spray",
              id: "d372db55-f805-4e3b-987a-46f161d1301a",
              price: 455,
              status: "Unscheduled"
            }
          ],
          year: 2025
        },
        {
          month: 4,
          actions: [
            {
              name: "Pest Control",
              id: "3e00c539-16c4-4d93-981b-81d2456eb9b0",
              price: 368,
              status: "Unscheduled"
            },
            {
              name: "Mosquito spray",
              id: "68d71e72-6182-4c8a-ab25-590e2883768a",
              price: 455,
              status: "Unscheduled"
            }
          ],
          year: 2025
        }
      ],
      id: "672f4b5f-7f9c-4cc8-8b4a-e19eb458f6d9",
      status: "Active Subscription"
    };

    // Filter out deleted objects
    const filteredCalendar = responseData.calendar.filter(item => !responseData.deleted);

    // Check subscription status
    if (responseData.status !== "Active Subscription") {
      console.log('INACTIVE SUBSCRIPTION');
    }

    // Sort calendar items by year and month (latest to earliest)
    const sortedCalendar = filteredCalendar.sort((a, b) => {
      if (a.year === b.year) {
        return a.month - b.month;
      } else {
        return a.year - b.year;
      }
    });

    setCustomer(responseData.customer);
    setSortedCalendar(sortedCalendar);

    // Extract relevant data for each card
    const actions: Action[] = [];
    filteredCalendar.forEach(item => {
      actions.push(...item.actions);
    });

    setFilteredActions(actions);
  }, []);

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