import React from 'react';
import css from './not-active-label.module.css';

export interface NotActiveLabelProps {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: NotActiveLabelProps) {
  return <span className={css.label}>{children}</span>;
}
