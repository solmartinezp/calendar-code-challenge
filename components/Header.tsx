import React from 'react';
import ThemedText from './ThemedText';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
       <ThemedText type="defaultSemiBold" lightColor="#333333" darkColor="#000000">
          {title}
       </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    paddingTop: 36,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
     fontFamily: 'Lato-Bold'
  },
});

export default Header;
