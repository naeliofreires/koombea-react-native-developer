import React from 'react';

export type HeaderProps = {
  title: string;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'space-between';
};
