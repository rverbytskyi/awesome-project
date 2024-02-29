/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import CircleLineCheck from './CircleLineCheck.tsx';

export type TestCaseT = {
  tick: number;
};

const TestCase = memo<TestCaseT>(({tick}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{'Test WITHOUT memo'}</Text>
      <Text style={styles.sectionTitle}>{`${tick}`}</Text>
      <View style={styles.sectionIcons}>
        <CircleLineCheck />
        <CircleLineCheck />
        <CircleLineCheck />
        <CircleLineCheck />
        <CircleLineCheck />
      </View>
    </View>
  );
});

TestCase.displayName = 'TestCase';

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
  sectionIcons: {
    flexDirection: 'row',
  },
});

export default TestCase;
