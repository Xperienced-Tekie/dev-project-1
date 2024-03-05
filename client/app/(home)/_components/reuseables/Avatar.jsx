import { Image } from "lucide-react";

function Avater(props) {
  const { alt, avaterName, figureClassName, ...inputProps } = props;
  return (
    <figure className={figureClassName}>
      <Image alt={alt} {...inputProps} />
      <p>{avaterName}</p>
    </figure>
  );
}

export default Avater;
