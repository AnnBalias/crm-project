import ClientWrapper from '@/app/(admin)/companies/@modal/[id]/new-promotion/client-wrapper';

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <ClientWrapper companyId={id} />;
}
