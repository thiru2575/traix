import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { QuoteCard } from '../components/QuoteCard';
import { CommunityPreview } from '../components/CommunityPreview';
import { ResourceList } from '../components/ResourceList';

export const HomeScreen = () => {
  const safetyTip = {
    text: 'Always share your ride details with a trusted contact.',
    author: 'Safety First Team',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SafeHer</Text>
        <Text style={styles.tagline}>Aware. Alert. Empowered. 🔒</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛡️ Daily Safety Tip</Text>
        <View style={styles.centerContent}>
          <QuoteCard quote={safetyTip} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🤝 Support Network</Text>
        <View style={styles.centerContent}>
          <CommunityPreview />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📂 Verified Resources</Text>
        <View style={styles.centerContent}>
          <ResourceList />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  header: {
    backgroundColor: '#FF69B4',
    padding: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  tagline: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  section: {
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  centerContent: {
    alignItems: 'center',
  },
});
