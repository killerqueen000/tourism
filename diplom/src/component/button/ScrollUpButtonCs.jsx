import { useState } from "react";
import CustServiceStart from "../cs/CustServiceStart";
import CustService from "../cs/CustService";
import "./ScrollUpButtonCs.css";

const ScrollUpButtonCs = () => {
  const [showStartModal, setShowStartModal] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleOpenStart = () => setShowStartModal(true);
  const handleCloseModals = () => {
    setShowStartModal(false);
    setShowChatModal(false);
    setUserData(null);
  };

  const handleStartChat = (email, firstName, lastName) => {
    setUserData({ user_email: email, first_name: firstName, last_name: lastName });
    setShowStartModal(false);
    setShowChatModal(true);
  };

  return (
    <>
      <div className="buttons-layout">
        <button className="cs-button" onClick={handleOpenStart}>
          <img src={`${import.meta.env.BASE_URL}assets/button/cs.png`} alt="cs button" />
        </button>
      </div>

      {showStartModal && (
        <div className="cs-modal-overlay">
          <CustServiceStart onStartChat={handleStartChat} onClose={handleCloseModals} />
        </div>
      )}

      {showChatModal && userData && (
        <div className="cs-modal-overlay">
          <CustService userData={userData} onClose={handleCloseModals} />
        </div>
      )}
    </>
  );
};

export default ScrollUpButtonCs;
