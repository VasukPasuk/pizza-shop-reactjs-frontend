import {openModal, closeModal, switchModal} from "../redux/slices/Modal.slice.tsx";
import {useAppDispatch, useAppSelector} from "../redux/store.tsx";

export const useModal = () => {
  const modalState = useAppSelector(state => state.modal.isOpen)
  const dispatch = useAppDispatch();

  //  Open modal function
  const openModalFn = () => {
    dispatch(openModal())
  }

  //  Close modal function
  const closeModalFn = () => {
    dispatch(closeModal())
  }



  //  Switch modal state function
  const switchModalFn = () => {
    dispatch(switchModal())
  }

  //  Return current state and modal change state functions
  return {
    modalState,
    openModalFn,
    closeModalFn,
    switchModalFn,
  }
}