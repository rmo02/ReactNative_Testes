import React, {useRef, useState} from 'react';
import CustomToast from '../../components/CustomToast';
import { Animated, StyleSheet, Text, View, Button } from 'react-native'
import { LogBox } from 'react-native';

LogBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);

export default function Busca() {
  const [toastType, setToastType] = useState('success');
  const [title, setTitle] = useState('Success');
  const slideAnim = useRef(new Animated.Value(120)).current;

  const animateToast = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
 
    setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: 120,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, 2500);
  };
 
  const showToast = (type, message) => {
    setToastType(type);
    setTitle(message);
    animateToast();
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => showToast('success', 'Success')}
          title="Show Success Toast"
          color="#03AE76"
        />
        <View style={styles.divider} />
        <Button
          onPress={() => showToast('warn', 'Waring')}
          title="Show Warning Toast"
          color="#FFAB00"
        />
      </View>
 
      <Animated.View
        style={{transform: [{translateY: slideAnim}], marginBottom: 25}}>
        <CustomToast
          type={toastType}
          title={title}
          subtitle={`This is ${title} Toast!!`}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0EAE9',
  },
 
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  divider: {
    width: 50,
    height: 1,
    backgroundColor: '#737373',
    marginVertical: 10,
  },
});