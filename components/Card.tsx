import React from 'react';
import { View, Text, StyleSheet, ViewStyle, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import formatDate from '../hooks/formatDate';
import { MaterialIcons } from '@expo/vector-icons';

interface Vendor {
  vendorName: string;
}

interface Action {
  name: string;
  vendor?: Vendor;
  status: string;
  scheduledDate: string;  
}

interface CardProps {
  title: string;
  subtitle: string;
  phoneNumber?: string;
  address: string;
  currentDate: string;
  status: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  phoneNumber,
  address,
  currentDate,
  status,
}) => {  
  return (
    <View style={styles.mainDiv}>
      { status === 'None' ? (
        <View style={styles.NoMaintenanceCard}>
          <Text style={styles.title}>No Maintenance Scheduled</Text>
        </View>
      ) : (
        <>
          <View style={styles.statusDiv}>
              <Text style={styles.statusDate}>{formatDate(currentDate).trimmedDayName}</Text>
              <Text style={styles.statusDateNumber}>{formatDate(currentDate).dayNumber}</Text>
              {status === '200' ? (
                <Image source={require('../assets/images/SuccessIcon.png')} style={styles.statusIcon} />
              ) : null}
            </View>
            <View style={styles.successCard}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <Text style={styles.phoneText}>{phoneNumber}</Text>
                <View style={styles.addressContainer}>
                  <MaterialIcons name="location-on" size={20} color="#888" style={styles.icon} />
                  <Text style={styles.text}>{address}</Text>
                </View>
                <Text style={styles.text}>{status}</Text>
          </View>
        </>
       
      ) 
      }
      </View>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '1%'
  },
  statusDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '1%'
  },
  statusDate: {
    marginBottom: '40%',
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Lato-Bold.ttf',
    fontWeight: 'bold',
    fontSize: 9
  },
  statusDateNumber: {
    marginBottom: '50%',
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold.ttf',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.8)'
  },
  statusIcon: {
    width: 14
  },
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    width: '90%',
    alignSelf: 'center'
  },
  successCard: {
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 5,
    paddingBottom: 16,
    marginBottom: 16,
    elevation: 2,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.light.successCard,
  },
  scheduledCard: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.light.scheduledCard
  },
  TBDCard: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.light.TBDCard
  },
  NoMaintenanceCard: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.light.NoMaintenanceCard
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Lato-Bold.ttf'
  },
  subtitle: {
    color: 'white',
    fontSize: 12,
    marginBottom: 4,
    fontFamily: 'Lato-Regular.ttf'
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Lato-Regular.ttf'
  },
  phoneText: {
    color: 'white',
    fontSize: 12,
    marginBottom: 4,
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold.ttf'
  },
  addressContainer: {
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  icon: {
    color: 'white',
  }
});

export default Card;