"use client";
//== Utils
import Link from "next/link";
//== Component Logic
import useLogic from "./logic";
//== Types
import { Book } from "../types";
//== Styles
import styles from './bookBox.module.scss';
import { currencyFormatter } from "@/utils/formatters";

interface CProps {
  book: Book
}

const BookBox = ({ book }: CProps) => {
  const { router } = useLogic();

  return (
    <div className={`${styles.card}`}>
      <div className={styles.container} onClick={() => router.push(`/books/${book.id}/lessons`)}>
        <div className={styles.image}>
          <Link href={`/books/${book.id}/lessons`} className={styles.cardImg}>
            <img src={book.logo_file} alt={book.title} />
          </Link>
        </div>
      </div>
      <h3 onClick={() => router.push(`/books/${book.id}/lessons`)}>{book.title}</h3>
      <p>السعر : <b>{book.price ? currencyFormatter({ currency: 'ILS' }).format(+book.price) : 0}</b></p>
    </div>
  )
}

export default BookBox