import { useState } from "react";
import "./CustServiceStart.css";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CustServiceStart = ({ onStartChat, onClose }) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const navigate = useNavigate();

  const handleStartChat = () => {
    if (!email || !firstname || !lastname) {
      alert("Please fill all fields");
      return;
    }
    onStartChat(email, firstname, lastname);
  };

  const {t} = useTranslation()

  return (
    <div className="cs-start-layout">
      <div className="cs-start-header">
        <button onClick={onClose}>
          <IoIosClose style={{ fontSize: "30px" }} />
        </button>
      </div>
      <div className="cs-start-context">
        <h2>{t("cs.welcome")}</h2>
        <img src={`${import.meta.env.BASE_URL}assets/cs/manja.png`} alt="manja.png" />

        <span>
          {t("cs.love1")} <br />
          {t("cs.love2")} <br /> {t("cs.love3")}
        </span>
        <div className="cs-start-form">
          <input
            type="email"
            className="cs-start-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            className="cs-start-input"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            type="text"
            className="cs-start-input"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <button onClick={handleStartChat}>{t("cs.chat")}</button>
        </div>
      </div>
    </div>
  );
};

export default CustServiceStart;
