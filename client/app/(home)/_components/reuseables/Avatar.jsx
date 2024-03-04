const Avater = (props) => {
  return (
    <figure className={props.figureClassName}>
      <img {...props} />
      <p>{props.avaterName}</p>
    </figure>
  );
};

export default Avater;
