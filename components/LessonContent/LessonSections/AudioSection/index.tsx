'use client';
import { createPortal } from 'react-dom';
//== Component Logic
import useLogic from './logic';
import { Icon } from '@iconify/react';
//= Components
import { Tooltip } from '@mui/material';
import AddNoteModal from '../../Notes/AddNoteModal';
import ViewNotesModal from '../../Notes/ViewNotesModal';
//== Styles
import styles from './audioSection.module.scss';

interface CProps {
  data: {
    id: number;
    title: string;
    description: string;
    audio_link: string;
  }
}

const AudioSection = ({ data }: CProps) => {
  const { Audio, openAudio, audioOpened, setAudioOpened, openViewNotesModal, setOpenViewNotesModal, openAddNoteModal, setOpenAddNoteModal } = useLogic();

  return (
    <>
      <div className={styles.audioSection}>
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
        <h3><i className="fa-duotone fa-star"></i> {data.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        <div className={styles.audioImage}>
          {audioOpened ?
            <img src="/images/quizzes/audio.gif" alt="audio" />
            :
            <img src="/images/quizzes/audio2.gif" alt="audio" />
          }
          {audioOpened ?
            <button onClick={() => openAudio(false)}>إيقاف</button>
            :
            <button onClick={() => openAudio(true)}>تشغيل</button>
          }
        </div>
        <audio
          src={data.audio_link}
          ref={Audio}
          onEnded={() => setAudioOpened(false)}
        ></audio>
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

export default AudioSection;