'use client';
import { createPortal } from 'react-dom';
//= Components
import { Icon } from '@iconify/react';
import { Tooltip } from '@mui/material';
import AddNoteModal from '../../Notes/AddNoteModal';
import ViewNotesModal from '../../Notes/ViewNotesModal';
//== Component Logic
import useLogic from './logic';
//== Styles
import styles from './imageSection.module.scss';

interface CProps {
  data: {
    id: number;
    photo_file: string;
  }
}

const ImageSection = ({ data }: CProps) => {
  const { rendered, openViewNotesModal, setOpenViewNotesModal, openAddNoteModal, setOpenAddNoteModal } = useLogic({ data });

  if (!rendered) return null;
  return (
    <>
      <div className={styles.imageSction}>
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
        <img src={data.photo_file ? data.photo_file : ''} alt="question_image" loading='lazy' />
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

export default ImageSection