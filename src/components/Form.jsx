import sendBtn from "@i/send.svg";
import cameraImg from "@i/camera.svg";
import { useContext, useRef } from "react";
import { Context } from "../context/Context";

function Form({ componentId }) {
  const inputRef = useRef(null);
  const { text, setText, setMessages, modal, setModal, setFoto, foto, id, time, comment, setComment } = useContext(Context);
  const newMessage = { id, title: text, time: time, user: componentId, foto: foto, comment: comment };
  console.log(modal, "wwww");

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(false);
    if (!text.trim() && !foto.trim()) {
      return;
    }
    setMessages((prevMessages) => ({
      ...prevMessages,
      [componentId]: [...prevMessages[componentId], newMessage],
    }));

    inputRef.current.value = "";
    setText("");
    setFoto("");
    setComment("");
  };

  return (
    <>
      <form className="data" onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Написать сообщение..." onChange={(e) => setText(e.target.value)} />
        <div className="buttons">
          <img className="send-btn" src={sendBtn} alt="Send" onClick={handleSubmit} />
          <div className="image">
            <img src={cameraImg} alt="Camera" className="photo-btn" onClick={() => setModal(componentId)} />
          </div>
        </div>
      </form>
      <form onSubmit={handleSubmit} className={`modal ${modal == componentId}`}>
        <div className="modal__window">
          <h2 className="modal__title">Отправить картинку</h2>
          <label className="modal__label">
            <span>URL</span>
            <input type="text" placeholder="URL" value={foto} onChange={(e) => setFoto(e.target.value)} />
          </label>
          <label className="modal__label">
            <span>Комментарий</span>
            <input type="text" placeholder="Комментарий" value={comment} onChange={(e) => setComment(e.target.value)} />
          </label>
          <div className="buttons">
            <button className="btn-del" onClick={() => setModal(false)}>
              Отмена
            </button>
            <button className="btn-send" type="submit">
              ОТПРАВИТЬ
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
