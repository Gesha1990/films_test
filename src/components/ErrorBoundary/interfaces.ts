import { SerializedError } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

export interface IProps {
  children?: ReactNode;
  error: string;
}

export interface IState {
  hasError: boolean;
  error: Error | null;
}
