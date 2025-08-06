import React from 'react';
import Header from '@/app/components/header';

type PageProps = object;

export default async function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / New companies</Header>
      <div>Some additional info</div>
    </>
  );
}
