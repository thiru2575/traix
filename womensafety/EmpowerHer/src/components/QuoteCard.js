import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';

export const QuoteCard = ({ quote }) => {
  const handleShare = async () => {
    try {
      await Share.share({
        message: `"${quote.text}" - ${quote.author}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>"{quote.text}"</Text>
      <Text style={styles.author}>- {quote.author}</Text>
      <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
        <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 20,
    backgroundColor: '#FFF5EE',
    borderRadius: 10,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    color: '#666',
    textAlign: 'right',
  },
  shareButton: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#FF69B4',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  shareText: {
    color: '#fff',
    fontSize: 14,
  },
});
