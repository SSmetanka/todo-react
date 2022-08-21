function Modal({ closeModal, children }) {
  return(
    <>
      <div className="backgroundModal" onClick={closeModal}></div>
      <div className="modal">
        <img
          className="modal__close"
          src="icons/xmark-solid.svg"
          alt="change todo"
          onClick={closeModal}
        />
        { children }
      </div>
    </>

  )
}

export default Modal