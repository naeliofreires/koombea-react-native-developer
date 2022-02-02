import React, {useImperativeHandle, useState, useCallback} from 'react';
import {Modal as ModalRN} from 'react-native';

import {ModalRefProps, ModalProps} from './types';

export const Modal = React.forwardRef<
  ModalRefProps,
  React.PropsWithChildren<ModalProps>
>(
  (
    {children, onBeforeOpenModal, onBeforeCloseModal, animationType = 'none'},
    ref,
  ) => {
    const [visible, setVisible] = useState(false);

    const open = useCallback((): void => {
      if (typeof onBeforeOpenModal === 'function') {
        (async () => onBeforeOpenModal())().finally(() => setVisible(true));
      } else {
        setVisible(true);
      }
    }, [onBeforeOpenModal]);

    const close = useCallback(async (): Promise<void> => {
      if (onBeforeCloseModal) {
        await onBeforeCloseModal()?.finally(() => setVisible(false));
      } else {
        setVisible(false);
      }
      setVisible(false);
    }, [onBeforeCloseModal]);

    useImperativeHandle(
      ref,
      () => ({
        open,
        close,
      }),
      [open, close],
    );

    return (
      <ModalRN animationType={animationType} transparent visible={visible}>
        {children}
      </ModalRN>
    );
  },
);
