import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import "./OperatorChat.css";

const socket = io("http://localhost:5000");

const AdminChat = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/chat/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedUser) {
      axios
        .get(
          `http://localhost:5000/api/chat/messages?user_email=${selectedUser}`
        )
        .then((res) => setMessages(res.data));
    }
  }, [selectedUser]);

  useEffect(() => {
    const handleMessage = (data) => {
      if (data.user_email === selectedUser) {
        setMessages((prev) => [...prev, data]);
      }
    };

    socket.on("receive_message", handleMessage);
    return () => socket.off("receive_message", handleMessage);
  }, [selectedUser]);

  useEffect(() => {
    const handleNewUser = (newEmail) => {
      setUsers((prevUsers) =>
        prevUsers.includes(newEmail) ? prevUsers : [...prevUsers, newEmail]
      );
    };

    socket.on("new_user", handleNewUser);
    return () => socket.off("new_user", handleNewUser);
  }, []);

  const sendReply = () => {
    if (!input.trim()) return;

    const reply = {
      user_email: selectedUser,
      first_name: "Support",
      last_name: "Agent",
      message: input,
      message_type: "operator",
    };

    socket.emit("send_message", reply);
    setInput("");
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="operator-layout">
      <header className="operator-header">
        <h2>Admin Live Chat</h2>
      </header>

      <div className="operator-body">
        <div className="operator-select-user">
          <h3>Customer List</h3>
          <ul>
            {users.map(({ email_address, status }, idx) => (
              <li
                key={idx}
                className={selectedUser === email_address ? "active" : ""}
                onClick={() => setSelectedUser(email_address)}
              >
                {email_address}{" "}
                <span className={`chat-status ${status}`}>{status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="oprator-chat-ares">
          <h3>{selectedUser ? `Chatting with: ${selectedUser}` : ""}</h3>

          <div className="operator-chat">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-bubble ${
                  msg.message_type === "operator" ? "chat-right" : "chat-left"
                }`}
              >
                <strong>
                  {msg.message_type === "operator"
                    ? "You"
                    : `${msg.first_name} ${msg.last_name}`}
                </strong>
                <br />
                {msg.message}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {selectedUser && (
            <div className="operator-chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendReply()}
              />
              <button onClick={sendReply}>Send</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminChat;
