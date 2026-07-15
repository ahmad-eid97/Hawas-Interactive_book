'use client';
import { useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { PagesContext } from '../../BookPagesWrapper/PagesContext/context';
//= Components
import { Icon } from '@iconify/react';
import { Tooltip } from '@mui/material';
import AddNoteModal from '../../Notes/AddNoteModal';
import ViewNotesModal from '../../Notes/ViewNotesModal';
//== Utils
import descriptionCompiler from '@/utils/descriptionCompiler';
//== Styles
import styles from './imageWithText.module.scss';

const ImageWithText = ({ data }: { data: any }) => {
  const [openViewNotesModal, setOpenViewNotesModal] = useState(false);
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);
  const [description, setDescription] = useState(data.description);
  const { searchTerm } = useContext(PagesContext);

  useEffect(() => {
    setDescription(descriptionCompiler(data.description, searchTerm));
  }, [searchTerm, data.description]);

  return (
    <>
      <div className={`${styles.imageWithText} ${styles[data.image_direction]}`}>
        <div className="notes_buttons">
          <Tooltip title="عرض الملاحظات">
            <button onClick={() => setOpenViewNotesModal(true)}>
              <Icon icon="mage:note-text-fill" />
            </button>
          </Tooltip>
          <Tooltip title="إضافة ملاحظة">
            <button onClick={() => setOpenAddNoteModal(true)}>
              <Icon icon="material-symbols:note-stack-add" />
            </button>
          </Tooltip>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
        <img src={data.photo_file} alt="image" />
      </div>
      {
        openViewNotesModal && typeof window !== 'undefined' ?
          createPortal(<ViewNotesModal setOpenModal={setOpenViewNotesModal} />, document.body, 'ViewNotesModal')
          : null
      }
      {
        openAddNoteModal && typeof window !== 'undefined' ?
          createPortal(<AddNoteModal setOpenModal={setOpenAddNoteModal} pageSectionId={data?.id} />, document.body, 'ViewNotesModal')
          : null
      }
    </>
  )
}

export default ImageWithText;