"use client";
//== Utils
import Link from "next/link";
//== Modules
import Grid from "@mui/material/Grid";
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
    <div className={`${styles.card}`} onClick={() => router.push(`/books/${book.id}/lessons`)}>
      <div className={styles.container}>
        <div className={styles.cardImgContainer}>
          <Link href={`/books/${book.id}/lessons`} className={styles.cardImg}>
            <img src={book.logo_file} alt={book.title} />
          </Link>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.details}>
            <Link href={`/books/${book.id}/lessons`}><h4>{book.title}</h4></Link>
            <Grid container alignItems="flex-end" >
              <Grid item xs>
                <ul className={styles.nav}>
                  <li className={styles.navItem}>
                    <div className={styles.icon}>
                      <i className="fa-regular fa-book"></i>
                    </div>
                    <div className={styles.text}>13 فصل</div>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookBox