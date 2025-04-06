import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ResourceList = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.heading}>Growth Resources</Text>
        <Text style={styles.item}>🌱 Confidence Building</Text>
        <Text style={styles.item}>📚 Career Development</Text>
        <Text style={styles.item}>💬 Communication Skills</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    width: '100%',
  },
  container: {
    width: '90%',
    padding: 15,
    backgroundColor: '#FFF5EE',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  item: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    textAlign: 'center',
  },
});
