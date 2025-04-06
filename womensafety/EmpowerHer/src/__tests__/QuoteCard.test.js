import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Share } from 'react-native';
import { QuoteCard } from '../components/QuoteCard';

jest.mock('react-native/Libraries/Share/Share', () => ({
  share: jest.fn(),
}));

describe('QuoteCard', () => {
  const mockQuote = {
    text: 'Test quote',
    author: 'Test Author',
  };

  beforeEach(() => {
    Share.share.mockClear();
  });

  it('renders quote and author correctly', () => {
    const { getByText } = render(<QuoteCard quote={mockQuote} />);
    
    expect(getByText(`"${mockQuote.text}"`)).toBeTruthy();
    expect(getByText(`- ${mockQuote.author}`)).toBeTruthy();
  });

  it('shares quote when share button is pressed', () => {
    const { getByText } = render(<QuoteCard quote={mockQuote} />);
    
    fireEvent.press(getByText('Share'));
    
    expect(Share.share).toHaveBeenCalledWith({
      message: `"${mockQuote.text}" - ${mockQuote.author}`,
    });
  });
});