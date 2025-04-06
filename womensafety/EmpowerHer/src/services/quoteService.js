import { db } from '../config/firebase';
import { collection, query, getDocs, where } from 'firebase/firestore';

export const getDailyQuote = async () => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const quotesRef = collection(db, 'quotes');
    const q = query(quotesRef, where('date', '==', today));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    }
    
    // Fallback quote if none is scheduled for today
    return {
      text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart",
      date: today
    };
  } catch (error) {
    console.error('Error fetching daily quote:', error);
    return null;
  }
};