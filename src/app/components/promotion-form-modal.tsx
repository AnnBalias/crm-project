import Modal from '@/app/components/modal';
import PromotionForm from '@/app/components/promotion-form';

export interface PromotionFormModalProps {
  companyId: string;
  show: boolean;
  onClose: () => void;
}

export default function PromotionFormModal({
  companyId,
  show,
  onClose,
}: PromotionFormModalProps) {
  return (
    <Modal show={show} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={onClose} />
    </Modal>
  );
}
