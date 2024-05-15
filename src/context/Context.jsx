import { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const [foto, setFoto] = useState("");
  const [comment, setComment] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState({
    MessageAlex: [],
    MessageEliz: [],
  });
  const [modal, setModal] = useState(false);

  const currentTime = new Date().toLocaleTimeString([], { hour12: false }); //
  const timeWithoutSeconds = currentTime.slice(0, -3); //
  let id = messages.MessageAlex.length + messages.MessageEliz.length; //
  const time = timeWithoutSeconds; //

  return (
    <Context.Provider
      value={{
        text,
        setText,
        messages,
        setMessages,
        modal,
        setModal,
        foto,
        setFoto,
        comment,
        setComment,
        currentTime,
        timeWithoutSeconds,
        id,
        time,
      }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
