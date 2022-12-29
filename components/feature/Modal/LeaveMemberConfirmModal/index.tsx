import { ConfirmModal } from 'components/feature/Modal';

const LeaveMemberConfirmModal = () => {
	return (
		<ConfirmModal
			modalTitle="회원 탈퇴하시겠습니까?"
			modalDescription="회원 탈퇴 시 모든 데이터가 삭제됩니다."
			modalBtn={{
				cancel: {
					text: '취소',
					onCancel: () => {},
				},
				confirm: {
					text: '나가기',
					onConfirm: () => {},
				},
			}}
		/>
	);
};

export default LeaveMemberConfirmModal;
