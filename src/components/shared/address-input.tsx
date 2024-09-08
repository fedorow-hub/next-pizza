'use client'
import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return <AddressSuggestions 
    token="ed99517253b48056d1453e523280de4f597c645c" 
    onChange={(data) => onChange?.(data?.value)} />;
};
