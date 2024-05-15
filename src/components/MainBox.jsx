import MessageEliz from "./MessageEliz";
import MessageAlex from "./MessageAlex";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          <MessageAlex />
          <MessageEliz />
        </div>
      </div>
    </main>
  );
}

export default Main;
