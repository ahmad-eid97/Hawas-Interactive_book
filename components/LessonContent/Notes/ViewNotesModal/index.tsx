//= Modules
import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2';
//== Components
import { Modal } from "@/components";
import { Icon } from "@iconify/react";
//== Component Logic
import { getAllNotes, deleteNote } from "@/API/notes";
//= Utils
import { successNotify } from "@/utils/toast";
//== Styles
import styles from './modal.module.scss';

type Props = {
  setOpenModal: React.Dispatch<boolean>;
}

const ViewNotesModal = ({ setOpenModal }: Props) => {
  const { data: allNotes, isLoading, refetch } = useQuery(['getStudentNotes'], getAllNotes);

  async function deleteNoteHandler(id: number) {
    setOpenModal(false);
    const result = await Swal.fire({
      icon: "question",
      title: "هل أنت متأكد انك تريد حذف هذه الملاحظة؟",
      showCancelButton: true,
      cancelButtonText: "إلغاء",
      confirmButtonText: "حذف",
    });

    if (result.isConfirmed) {
      const response = await deleteNote(id);
      if (response.data.success) {
        successNotify('تم حذف الملاحظة بنجاح');
        await refetch();
      }
    }
  }

  return (
    <Modal setOpenModal={setOpenModal}>
      <div className={styles.notesList}>
        <h3>الملاحظات</h3>
        {
          (!isLoading && allNotes?.notes?.data?.length) ?
            <div className={styles.list}>
              {allNotes?.notes?.data?.map((note: any) => (
                <div className={styles.note} key={note.id}>
                  <p>{note.description}</p>
                  <div className={styles.delete} onClick={() => deleteNoteHandler(note.id)}>
                    <Icon icon="bi:trash" />
                  </div>
                </div>
              ))}
            </div>
            :
            (!isLoading && !allNotes?.notes?.data?.length) ?
              <div className={styles.emptyData}>
                <p>لا يوجد ملاحظات</p>
              </div>
              :
              <div className={styles.loading}>
                <Icon icon="eos-icons:loading" />
              </div>
        }
      </div>
      <div className={styles.actions}>
        <button onClick={() => setOpenModal(false)}>إغلاق</button>
      </div>
    </Modal>
  )
}

export default ViewNotesModal;