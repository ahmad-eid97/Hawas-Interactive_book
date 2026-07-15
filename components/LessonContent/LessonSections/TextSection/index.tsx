'use client';
import { useEffect, useState, useContext, useRef } from 'react';
import { createPortal } from 'react-dom';
import { PagesContext } from '../../BookPagesWrapper/PagesContext/context';
//= Components
import { Icon } from '@iconify/react';
import { Tooltip } from '@mui/material';
import AddNoteModal from '../../Notes/AddNoteModal';
import ViewNotesModal from '../../Notes/ViewNotesModal';
//== Component Logic
import useLogic from './logic';
import { deleteHighlight, storeHighlight } from '@/API/books';
//== Utils
import descriptionCompiler, { renderHighlightedTexts } from '@/utils/descriptionCompiler';
//== Styles
import styles from './textSection.module.scss';

interface CProps {
  data: {
    id: number;
    title: string;
    description: string;
    highlights: {
      id: number;
      description: string;
      student_id: number;
      page_section_id: number;
      created_at: string;
      updated_at: string;
    }[];
  };
}

function debounce<T extends (...args: any[]) => void>(func: T, wait: number): T {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args);
    }, wait);
  } as T;
}

let selectedText = '';

const TextSection = ({ data }: CProps) => {
  const { openViewNotesModal, setOpenViewNotesModal, openAddNoteModal, setOpenAddNoteModal } = useLogic();
  const [description, setDescription] = useState(data.description);
  const { searchTerm, openDrawing } = useContext(PagesContext);
  const [highlights, setHighlights] = useState(data.highlights);
  const debouncedSelectionChange = useRef(
    debounce(() => {
      const selected = getSelectedText();
      if (selected) {
        selectedText = selected;
      }
    }, 500)
  ).current;


  useEffect(() => {
    setDescription(descriptionCompiler(data.description, searchTerm));
  }, [searchTerm, data]);

  useEffect(() => {
    setDescription(renderHighlightedTexts(data.description, highlights.map((highlight) => ({ text: highlight.description, id: highlight.id }))));
  }, [highlights]);

  useEffect(() => {
    const highlightedElements = document.querySelectorAll('.delete-highlight');

    const handleClick = async (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && target.classList.contains('delete-highlight')) {
        await deleteHighlight(parseInt(target.id));
        setHighlights(prev => prev.filter(highlight => highlight.id !== parseInt(target.id)));
      }
    };

    highlightedElements.forEach((element) => {
      element.addEventListener('click', handleClick);
    });

    return () => {
      highlightedElements.forEach((element) => {
        element.removeEventListener('click', handleClick);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description, openDrawing]);


  function getSelectedText(): string {
    let selectionText = '';
    if (window.getSelection) {
      selectionText = window.getSelection()?.toString() || '';
    }
    return selectionText;
  }

  useEffect(() => {
    const handleSelectionChange = () => {
      debouncedSelectionChange();
    };

    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, [debouncedSelectionChange]);

  useEffect(() => {
    if (!openDrawing && (window as any).saveHighlight) {
      saveHighlight();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDrawing]);

  async function saveHighlight() {
    if (!selectedText) return;

    const response = await storeHighlight({
      page_section_id: data.id,
      description: selectedText,
    });

    if (response.success) {
      setHighlights(prev => [...prev, {
        id: prev[prev.length - 1].id + 1,
        description: selectedText,
        student_id: prev[prev.length - 1].student_id,
        page_section_id: data.id,
        created_at: '',
        updated_at: ''
      }]);
    }
  }

  return (
    <>
      <div className={styles.textSection}>
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
        <div dangerouslySetInnerHTML={{ __html: description }} />
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

export default TextSection