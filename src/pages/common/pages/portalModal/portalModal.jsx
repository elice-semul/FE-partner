import ReactDOM from 'react-dom';

import { Modal } from '@/pages/common/sections';

const PortalModal = (props) => {
  const modalRoot = document.querySelector('#modal-root');

  return ReactDOM.createPortal(<Modal {...props} />, modalRoot);
};

export default PortalModal;
