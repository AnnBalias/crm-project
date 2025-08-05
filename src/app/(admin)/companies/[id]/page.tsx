import Header from '@/app/components/header';
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
    <>
      <Header>Companies ({String(localId)})</Header>
    </>
  );
}
