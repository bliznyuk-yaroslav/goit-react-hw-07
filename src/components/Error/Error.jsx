import { BiSolidError } from "react-icons/bi";
import css from "./Error.module.css";
export default function ErrorMessage() {
  return (
    <div>
      <p>Oops! We can't find that page</p>
      <BiSolidError className={css.icon} />
    </div>
  );
}
