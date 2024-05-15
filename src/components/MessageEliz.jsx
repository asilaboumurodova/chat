import bgrnd from "@i/bg.png";
import Eliz from "./Eliz";
import Form from "./Form";
import { useContext } from "react";
import { Context } from "../context/Context";

function MessageEliz() {
  const { messages } = useContext(Context);
  const allMessages = [...messages.MessageAlex, ...messages.MessageEliz];
  const sorted = allMessages.sort((a, b) => {
    const idA = parseInt(a.id);
    const idB = parseInt(b.id);

    if (idA < idB) {
      return -1;
    }
    if (idA > idB) {
      return 1;
    }
    return 0;
  });
  return (
    <div className="main__item" id="elizMessage">
      <div className="main__item-header">
        <Eliz />
      </div>
      <img src={bgrnd} alt="" className="main__item-img" />
      <div className="main__item-info">
        <div className="messages">
          {sorted.map((msg) => (
            <div key={msg.id} className={msg.user === "MessageAlex" ? "second-message" : "first-message"}>
              <div className="photo-box">
                {msg.foto && <img className={msg.user === "MessageAlex" ? "purple-text" : "blue-text"} src={msg.foto} alt="" />}
                {msg.comment && <p className={msg.user === "MessageAlex" ? "purple-text" : "blue-text"}>{msg.comment}</p>}
              </div>
              {msg.title && <p className={msg.user === "MessageAlex" ? "purple-text" : "blue-text"}>{msg.title}</p>}
              <p className="time">{msg.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="form-box">
        <Form componentId="MessageEliz" />
        {/* {modal==='MessageEliz' && <Modal componentId="MessageEliz" />} */}
      </div>
    </div>
  );
}

export default MessageEliz;
