import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ModalContext } from './ModalContext';
import Header from './Header';
import Footer from './Footer';
import RegistrationModal from './RegistrationModal';

export default function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <Header onOpenModal={openModal} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <RegistrationModal open={modalOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
}
