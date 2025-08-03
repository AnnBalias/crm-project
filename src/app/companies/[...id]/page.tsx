import React from 'react';
import Header from '@/app/components/header';

interface CompanyPageProps {
  params: Promise<{ id: string[] }>;
}

export default async function Page({ params }: CompanyPageProps) {
  const { id } = await params;

  return (
    <>
      <Header>Companies ({String(id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
