import { Image } from "lucide-react";

export const filterUser = (obj, user) =>
  obj.filter(
    (item) =>
      user.toLowerCase().includes(item.name.toLowerCase()) ||
      user.toLowerCase().includes(item.category.toLowerCase()),
  );
export const display = (obj, user) =>
  obj.filter(
    (item) =>
      item.name.toLowerCase().includes(user.toLowerCase()) ||
      item.category.toLowerCase().includes(user.toLowerCase()),
  );

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
