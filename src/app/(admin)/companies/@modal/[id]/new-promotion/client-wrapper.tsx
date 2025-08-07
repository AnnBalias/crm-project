'use client';

import PromotionFormModal from '@/app/components/promotion-form-modal';
import { useRouter } from 'next/navigation';

export default function ClientWrapper({ companyId }: { companyId: string }) {
  const router = useRouter();

  return (
    <PromotionFormModal
      companyId={companyId}
      show={true}
      onClose={() => router.back()}
    />
  );
}
