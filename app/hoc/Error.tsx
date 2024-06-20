import React from 'react';
import { Text } from 'react-native';

const Error: React.FC = () => {
  return (
    <Text
      style={{
        textAlign: 'center',
        fontFamily: 'Lato-Bold.ttf',
        fontWeight: 'bold',
        marginTop: '5%'
      }}
    >Oops! It appears there's been an error! Try again</Text>
  );
};

export default Error;
