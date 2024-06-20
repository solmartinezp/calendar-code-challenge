import React, { useEffect } from 'react';
import { View, Animated, Easing, ActivityIndicator } from 'react-native';
import { Colors } from '@/constants/Colors';

const Loading: React.FC = () => {
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  return (
    <View
    style={{ width: '100%', height: '100%', marginTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <ActivityIndicator size="large" color={Colors.light.successCard}/>
    </View>
  );
};

export default Loading;
