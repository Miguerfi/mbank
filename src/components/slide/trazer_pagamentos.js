import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Animated } from 'react-native';

const SlideScreen = ({ isVisible, onClose }) => {
  const [slideAnimation] = useState(new Animated.Value(0));

  const toggleSlide = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onClose());
  };

  const slide = {
    transform: [
      {
        translateY: slideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [600, 0],
        }),
      },
    ],
  };

  return (
    <>
      {isVisible && (
        <Animated.View style={[{ position: 'absolute', bottom: 0, width: '100%', height: 600, backgroundColor: 'white' }, slide]}>
          <TouchableOpacity onPress={toggleSlide}>
            <Text style={{ fontSize: 24 }}>Fechar</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 24 }}>Conteúdo da tela de baixo para cima</Text>
        </Animated.View>
      )}
    </>
  );
};

export default SlideScreen;
