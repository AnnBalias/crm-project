import React from 'react';
import { notFound } from 'next/navigation';

interface CompanyPageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: CompanyPageProps) {
  const { id } = await params;

  const localId = Number.parseInt(id);
  if (Number.isNaN(localId)) {
    notFound();
  }

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${id})`}</p>
    </div>
  );
}
