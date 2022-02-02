export interface ModalRefProps {
  open(): void;
  close(): void;
}

export interface ModalProps {
  animationType?: 'none' | 'slide' | 'fade';
  onBeforeOpenModal?(): Promise<void>;
  onBeforeCloseModal?(): Promise<void>;
}
