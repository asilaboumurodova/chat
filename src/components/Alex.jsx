import boy from "@i/boy.svg";

function Alex() {
  return (
    <div className="header__item">
      <a href="" className="header__img">
        <img src={boy} alt="" />
      </a>
      <div className="header__item-data">
        <h1 className="header__title">Александр</h1>
        <p className="header__text">Онлайн</p>
      </div>
    </div>
  );
}

export default Alex;
