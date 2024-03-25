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

export const deleteItem = (obj, deleteObj) =>
  obj.filter((item) => item.id !== deleteObj.id);

export function TextContainer({ className, text }) {
  return <p className={className}>{text}</p>;
}
function Avater({ alt, src, avaterName, figureClassName, ...inputProps }) {
  return (
    <figure className={figureClassName}>
      <Image alt={alt} src={src} {...inputProps} />
      <p>{avaterName}</p>
    </figure>
  );
}

export default Avater;
