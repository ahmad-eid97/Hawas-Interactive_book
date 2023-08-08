"use client";
//== Components
import { LessonBox } from '@/components';
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
//== Types
import { Lesson } from '../types';
//== Styles
import styles from './lessonsWrapper.module.scss';

interface CProps {
  lessons: Lesson[]
}

const BooksWrapper = ({ lessons }: CProps) => {
  return (
    <Container maxWidth="xl" className={styles.courses}>
      <div className={styles.header} >
        <p>تم العثور علي {lessons.length} درس</p>

        <form>
          <div className={styles.inputGroup}>
            <input type="search" placeholder="Search our courses" />
            <div className={styles.inputGroupBtn}>
              <button className="btn btn-sm btn-outline-white border-start-0 text-dark bg-transparent" type="submit">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill="currentColor"></path>
                  <path d="M19.762 18.6121L15.1007 13.9509C14.7831 13.6332 14.2687 13.6332 13.9511 13.9509C13.6335 14.2682 13.6335 14.7831 13.9511 15.1005L18.6124 19.7617C18.7712 19.9205 18.9791 19.9999 19.1872 19.9999C19.395 19.9999 19.6032 19.9205 19.762 19.7617C20.0796 19.4444 20.0796 18.9295 19.762 18.6121Z" fill="currentColor"></path>
                </svg>

              </button>
            </div>
          </div>
        </form>
        {/* <FormControl sx={{ m: 1, minWidth: 150 }} className={styles.select}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            // value={age}
            label="Category"
          // onChange={handleChange}
          >
            <MenuItem value={20}>All Subjects</MenuItem>
            <MenuItem value={10}>Another option</MenuItem>
            <MenuItem value={30}>Something else here</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 150 }} className={styles.select}>
          <InputLabel id="demo-simple-select-helper-label">Sort by</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            // value={age}
            label="Sort By"
          // onChange={handleChange}
          >
            <MenuItem value={20}>All Subjects</MenuItem>
            <MenuItem value={10}>Another option</MenuItem>
            <MenuItem value={30}>Something else here</MenuItem>
          </Select>
        </FormControl> */}
      </div>
      <Grid container spacing={3}>
        {lessons?.map((lesson, index) => (
          <Grid item xs={12} md={6} key={lesson.id}>
            <LessonBox index={index} lesson={lesson} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default BooksWrapper