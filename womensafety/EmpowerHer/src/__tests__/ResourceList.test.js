import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { ResourceList } from '../components/ResourceList';
import { collection, query, getDocs } from 'firebase/firestore';

jest.mock('../config/firebase', () => ({
  db: {},
}));

jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  query: jest.fn(),
  getDocs: jest.fn(),
}));

describe('ResourceList', () => {
  const mockResources = [
    {
      id: '1',
      title: 'Test Resource',
      description: 'Test Description',
      category: 'Test Category',
      imageUrl: 'https://test.com/image.jpg',
    },
  ];

  beforeEach(() => {
    getDocs.mockResolvedValue({
      docs: mockResources.map(resource => ({
        id: resource.id,
        data: () => resource,
      })),
    });
  });

  it('renders resources correctly', async () => {
    const { getByText } = render(<ResourceList />);
    
    await waitFor(() => {
      expect(getByText('Test Resource')).toBeTruthy();
      expect(getByText('Test Description')).toBeTruthy();
      expect(getByText('Test Category')).toBeTruthy();
    });
  });

  it('handles empty resources gracefully', async () => {
    getDocs.mockResolvedValue({ docs: [] });
    
    const { queryByText } = render(<ResourceList />);
    
    await waitFor(() => {
      expect(queryByText('Test Resource')).toBeNull();
    });
  });
});