import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./CustService.css";
import { IoIosClose } from "react-icons/io";
import { TbSend2 } from "react-icons/tb";

// Connect to backend socket
const socket = io("http://localhost:5000");

const CustService = ({ userData, onClose }) => {
  const bottomRef = useRef(null);
  const { user_email, first_name, last_name } = userData;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleClose = () => {
  socket.emit("close_chat", user_email);
  onClose(); // existing logic
};

  // Receive messages from backend
  useEffect(() => {
    const handleReceive = (data) => {
      if (data.user_email === user_email) {
        setMessages((prev) => [...prev, data]);
      }
    };

    socket.on("receive_message", handleReceive);
    return () => socket.off("receive_message", handleReceive);
  }, [user_email]);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send a message to backend
  const sendMessage = () => {
    if (!input.trim()) return;

    socket.emit("send_message", {
      user_email,
      first_name,
      last_name,
      message: input,
      message_type: "client",
    });

    setInput("");
  };

  return (
    <div className="cs-layout">
      <div className="cs-header">
        <span>Live Agent</span>
        <button onClick={handleClose}>
          <IoIosClose style={{ fontSize: "32px" }} />
        </button>
      </div>

      <div className="cs-message">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`cs-msg-bubble ${
              msg.message_type === "client" ? "cs-client" : "cs-operator"
            }`}
          >
            <strong>{msg.message_type === "client" ? "You" : "Agent"}:</strong>{" "}
            {msg.message}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="cs-chat-form">
        <input
          type="text"
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>
          <TbSend2 className="cs-icon" />
        </button>
      </div>
    </div>
  );
};

export default CustService;
