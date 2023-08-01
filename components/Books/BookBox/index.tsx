//== Component Logic
import useLogic from "./logic";
//== Types
import { Book } from "../types";
//== Styles
import styles from './bookBox.module.scss';

interface CProps {
  book: Book
}

const BookBox = ({ book }: CProps) => {
  const { router } = useLogic();

  return (
    <div className={styles.bookBox} onClick={() => router.push(`/books/${book.id}/lessons`)}>
      <div className={styles.image}>
        <img src={book.logo_file} alt={book.title} />
      </div>
      <h3>{book.title}</h3>
    </div>
  )
}

export default BookBox