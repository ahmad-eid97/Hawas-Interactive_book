"use client";
//== Modules
import { Matching } from '@/components';
//== Components
import { Pagination } from '@/components';
//== Styles
import styles from './page.module.scss';

const dataRtl = {
  righthand: {
    title: 'الكلمة',
    items: [
      { content: 'بيت' },
      { content: 'قلم' },
      { content: 'باب' },
      { content: 'ولد' },
      { content: 'بنت' },
      { content: 'جبل' }
    ]
  },
  lefthand: {
    title: 'جمعها',
    items: [
      { content: 'أولاد' },
      { content: 'بنات' },
      { content: 'بيوت' },
      { content: 'أقلام' },
      { content: 'جبال' },
      { content: 'أبواب' }
    ]
  }
}

const dataLtr = {
  righthand: {
    title: 'Word',
    items: [
      { content: 'House' },
      { content: 'Pen' },
      { content: 'Door' },
      { content: 'Boy' },
      { content: 'Girl' },
      { content: 'Mountain' }
    ]
  },
  lefthand: {
    title: 'Plural',
    items: [
      { content: 'Boys' },
      { content: 'Girls' },
      { content: 'Houses' },
      { content: 'Pens' },
      { content: 'Mountains' },
      { content: 'Doors' }
    ]
  }
}

const Page = () => {
  return (
    <div className={styles.page}>
      <Matching
        matchingData={dataRtl}
        options={{
          linesColor: '#ffffff',
          lineHoverColor: '#ff0000',
          itemsClassName: "edit",
          randomizeLineColor: true,
          enableElementsColorEffects: true,
        }}
        keyWord="content"
        dir="rtl"
        className="container"
        onMatch={(matches) => console.log(matches)}
        onUnMatch={(matches) => console.log(matches)}
      />
      <Pagination />
    </div>
  )
}

export default Page