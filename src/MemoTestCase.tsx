/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MemoCircleLineCheck from './MemoCircleLineCheck.tsx';
import {TestCaseT} from './TestCase.tsx';

const MemoTestCase = memo<TestCaseT>(({tick}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{'Test WITH memo'}</Text>
      <Text style={styles.sectionTitle}>{`${tick}`}</Text>
      <View style={styles.sectionIcons}>
        <MemoCircleLineCheck />
        <MemoCircleLineCheck />
        <MemoCircleLineCheck />
        <MemoCircleLineCheck />
        <MemoCircleLineCheck />
      </View>
    </View>
  );
});

MemoTestCase.displayName = 'MemoTestCase';

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

export default MemoTestCase;
