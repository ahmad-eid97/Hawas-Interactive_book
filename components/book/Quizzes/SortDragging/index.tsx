"use client";
//== Modules
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
//== Components
import SortableItem from './SortableItem';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from "./sortDragging.module.scss";


function SortDragging() {
  const { languages, handleDragEnd } = useLogic();

  return (
    <>
      <h2>رَتِّبِ الْجُمَلَ التّالِيَةَ حَسْبَ التَّسَلْسُلِ الزَّمَنِيِّ في النَّصِّ!</h2>
      <div className={styles.sorting}>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={(e) => handleDragEnd(e)}
          // ts-ignore@
          onDragStart={(e) => console.log(e)}
        >
          <div>
            <SortableContext
              items={languages}
              strategy={verticalListSortingStrategy}
            >
              {/* We need components that use the useSortable hook */}
              {languages.map(language =>
                <SortableItem key={language} id={language} />
              )}
            </SortableContext>
          </div>
        </DndContext>
      </div>
    </>
  );
}

export default SortDragging;