import { useState } from "react";
//== Components
import { Modal } from "@/components";
import Input from "@/components/UIs/Input";
//= Utils
import { errorNotify, successNotify } from "@/utils/toast";
//= Api
import { addNote } from "@/API/notes";
//== Styles
import styles from './modal.module.scss';

type Props = {
  setOpenModal: React.Dispatch<boolean>;
  pageSectionId: number;
}

const AddNoteModal = ({ setOpenModal, pageSectionId }: Props) => {
  const [note, setNote] = useState('');

  async function addNoteHandler() {
    if (!note) return errorNotify('الرجاء أدخال الملاحظة');
    const data = {
      page_section_id: pageSectionId,
      description: note,
    }
    const response = await addNote(data);

    if (response.success) {
      successNotify('تم أضافة الملاحظة بنجاح');
      setOpenModal(false);
    }
  }

  return (
    <Modal setOpenModal={setOpenModal}>
      <div className={styles.form}>
        <h3>إضافة ملاحظة جديدة</h3>
      </div>
      <div className={styles.field}>
        <label>الملاحظة</label>
        <Input type="text" name="note" placeholder="الملاحظة" value={note} onChange={(e) => setNote(e.target.value)} />
      </div>
      <div className={styles.actions}>
        <button onClick={addNoteHandler}>إضافة</button>
        <button onClick={() => setOpenModal(false)}>إغلاق</button>
      </div>
    </Modal>
  )
}

export default AddNoteModal;