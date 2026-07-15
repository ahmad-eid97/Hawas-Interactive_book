'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
//= Components
import { Icon } from '@iconify/react';
import { Tooltip } from '@mui/material';
import AddNoteModal from '../../Notes/AddNoteModal';
import ViewNotesModal from '../../Notes/ViewNotesModal';
//== Styles
import styles from './videoSection.module.scss';

interface CProps {
  data: {
    id: number;
    title: string;
    description: string;
    video_link: string;
  }
}

const VideoSection = ({ data }: CProps) => {
  const [openViewNotesModal, setOpenViewNotesModal] = useState(false);
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);

  return (
    <>
      <div className={styles.videoSection}>
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
        <div className={styles.head}>
          <img src="/images/quizzes/video.gif" alt="projector_image" />
          <h3><i className="fa-duotone fa-star"></i> {data.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
        <iframe src={data.video_link} frameBorder="0"></iframe>
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

export default VideoSection;