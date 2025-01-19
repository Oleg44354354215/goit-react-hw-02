import s from "./Description.module.css";

const Description = () => {
  return (
    <div className={s.cont}>
      <h1 className={s.glava}>Sip Happens Café </h1>
      <p className={s.text}>
        Please leave your feedback about our service one of the options below
      </p>
    </div>
  );
};

export default Description;
