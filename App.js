import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CustomTouchableComponent = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleResponderGrant = () => {
    setIsPressed(true);
  };

  const handleResponderTerminate = () => {
    setIsPressed(false);
  };

  return (
    <View
      style={[styles.button, { backgroundColor: isPressed ? 'green' : 'blue' }]}
      onStartShouldSetResponder={() => true}
      onResponderGrant={handleResponderGrant}
      onResponderTerminate={handleResponderTerminate}
    >
      <Text style={styles.buttonText}>Press Me</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop : 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomTouchableComponent;
