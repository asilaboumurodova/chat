import girl from "@i/girl.svg";

function Eliz() {
  return (
  <div className="header__item">
    <a href="" className="header__img"><img src={girl} alt="" /></a>
    <div className="header__item-data">
        <h1 className="header__title">Элиза</h1>
        <p className="header__text">Онлайн</p>
    </div>
  </div>
  )
}

export default Eliz
