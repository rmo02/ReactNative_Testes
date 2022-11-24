import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function New() {
  const [progress, setProgress] = useState(50);
  const progressAnim = useRef(new Animated.Value(0)).current;
 
  const animateProgress = () => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 1000,
    }).start();
  };
 
  useEffect(() => {
    animateProgress();
    return () => {};
  }, [progress]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Progress {progress}%</Text>
 
      <View style={styles.progressBG}>
        <Animated.View
          style={[
            styles.progress,
            {
              width: progressAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
 
      <View style={styles.btnBox}>
        <TouchableOpacity onPress={() => setProgress(0)} style={styles.btn}>
          <Text style={styles.btnText}>0%</Text>
        </TouchableOpacity>
 
        <TouchableOpacity onPress={() => setProgress(50)} style={styles.btn}>
          <Text style={styles.btnText}>50%</Text>
        </TouchableOpacity>
 
        <TouchableOpacity onPress={() => setProgress(100)} style={styles.btn}>
          <Text style={styles.btnText}>100%</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0EAE9',
  },
 
  progressBG: {
    width: '90%',
    height: 15,
    backgroundColor: '#C4CDD5',
    marginHorizontal: 25,
    borderRadius: 10,
  },
 
  progress: {
    width: '50%',
    height: 15,
    backgroundColor: '#00AB55',
    borderRadius: 10,
  },
 
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#005249',
    marginBottom: 20,
  },
 
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#919EAB',
    borderRadius: 6,
    marginHorizontal: 10,
    marginTop: 40,
  },
 
  btnText: {
    fontWeight: '500',
    color: '#fff',
  },
 
  btnBox: {
    flexDirection: 'row',
  },
});
  