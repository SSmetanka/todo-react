import { IconXmark } from "./Icons";

function Modal({ closeModal, children }) {
  return(
    <>
      <div className="backgroundModal" onClick={closeModal}></div>
      <div className="modal">
        <IconXmark
          closeModal={closeModal}
        />
        { children }
      </div>
    </>

  )
}

export default Modal