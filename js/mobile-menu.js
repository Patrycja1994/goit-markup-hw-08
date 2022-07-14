(() => {
    const refs = {
      openMenuBtn: document.querySelector("[mobile-menu]"),
      closeMenuBtn: document.querySelector("[mobile-menu__btn--open]"),
      modal: document.querySelector("[mobile-menu__btn--close]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();