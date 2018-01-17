import React from 'react'
import ReactModal from 'react-modal'
import Cross from '../Icons/Cross'
import { colors } from '../../constants/colors'

export default ({ isOpen, closeModal, children }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={closeModal}
    shouldFocusAfterRender={false}
    portalClassName="portal"
    overlayClassName="overlay"
    className="modal"
  >
    <Cross
      width={65}
      height={65}
      color={colors.pink}
      onClick={closeModal}
      top={28}
      right={28}
    />
    {children}
    <style jsx global>{`
      .ReactModal__Body--open {
        overflow: hidden;
      }
      .portal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.95);
        z-index: 9999;
      }
      .overlay {
        width: 100%;
        max-width: 173.8rem;
        margin: 0 auto;
        height: 100%;
        position: relative;
        display: flex;
        flex-flow: column;
        align-items: center;
      }

      .modal {
        margin: 4rem;
        max-width: 123.4rem;
        background: ${colors.white};
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
    `}</style>
  </ReactModal>
)
