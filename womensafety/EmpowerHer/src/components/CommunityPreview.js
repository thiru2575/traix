import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CommunityPreview = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>🔥 Community Highlights</Text>
        <Text style={styles.item}>• Women in Tech Meetup</Text>
        <Text style={styles.item}>• Leadership Webinar</Text>
        <Text style={styles.item}>• Mentorship Program</Text>
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
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 10,
    textAlign: 'center',
  },
  item: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    textAlign: 'center',
  },
});
