import React from 'react';
import { View, Text, StyleSheet, ViewStyle, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import formatDate from '../hooks/formatDate';

import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircleIcon } from "react-native-heroicons/solid";
import { ClockIcon } from "react-native-heroicons/outline";

interface CardProps {
  title?: string;
  subtitle?: string;
  phoneNumber?: string;
  address?: string;
  currentDate?: string;
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

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Completed':
        return styles.successCard;
      case 'Scheduled':
        return styles.scheduledCard;
      case 'Unscheduled':
        return styles.TBDCard;
      default:
        return styles.NoMaintenanceCard;
    }
  };
  
  const statusStyle = getStatusStyle(status);

  const renderStatusDate = () => {
    if (status === 'Unscheduled') {
      return <Text style={styles.statusDate}>TBD</Text>;
    } else if (status !== 'None') {
      const formattedDate = formatDate(currentDate);
      return (
        <>
          <Text style={styles.statusDate}>{formattedDate.trimmedDayName}</Text>
          <Text style={styles.statusDateNumber}>{formattedDate.dayNumber}</Text>
        </>
      );
    } else {
      return <Text style={styles.statusNone}>TBD</Text>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircleIcon color={Colors.light.successCard} size={18} style={{ margin: 0 }} />;
      case 'Scheduled':
        return <ClockIcon color={Colors.light.successCard} size={18} style={{ margin: 0 }} />;
      default:
        return null;
    }
  };

  const renderMaintenanceInfo = () => {
    if (status === 'None') {
      return (
        <View style={styles.NoMaintenanceCard}>
          <Text style={styles.title}>No Maintenance Scheduled</Text>
        </View>
      );
    } else {
      return (
        <>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.phoneText}>{phoneNumber}</Text>
          <View style={styles.addressContainer}>
            <MaterialIcons name="location-on" size={20} color="#888" style={styles.icon} />
            <Text style={styles.text}>{address}</Text>
          </View>
          <Text style={styles.text}>{status}</Text>
        </>
      );
    }
  };

  return (
    <View style={styles.mainDiv}>
      <View style={styles.statusDiv}>
        {renderStatusDate()}
        {getStatusIcon(status)}
      </View>
      <View
        style={statusStyle}
      >
        {renderMaintenanceInfo()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '1%',
    width: '100%'
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
    padding: 8,
    elevation: 2,
    width: '90%',
    backgroundColor: Colors.light.NoMaintenanceCard
  },
  statusNone: {
    opacity: 0
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
