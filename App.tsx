/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TestCase from './src/TestCase.tsx';
import MemoTestCase from './src/MemoTestCase.tsx';

const {width} = Dimensions.get('window');

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [tick, setTick] = useState(0);

  const [testIsOngoing, setTestIsOngoing] = useState(false);

  const startTest = useCallback(() => {
    setTick(0);
    timerRef.current = setInterval(() => {
      setTick(value => ++value);
    }, 50);
    setTestIsOngoing(true);
  }, []);

  useEffect(() => {
    if (tick >= 100 && timerRef.current !== null) {
      clearInterval(timerRef.current);
      setTestIsOngoing(false);
    }
  }, [tick]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <TestCase key={'without memo'} tick={tick} />
        <MemoTestCase key={'memo'} tick={tick} />
        <TouchableOpacity
          onPress={startTest}
          disabled={testIsOngoing}
          style={testIsOngoing ? styles.buttonActive : styles.buttonIdle}>
          <Text style={styles.buttonText}>
            {testIsOngoing ? 'Test is ongoing' : 'Start test'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 50,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonActive: {
    marginVertical: 20,
    height: 50,
    width: width - 60,
    backgroundColor: 'red',
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIdle: {
    marginVertical: 20,
    height: 50,
    width: width - 60,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
