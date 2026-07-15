//== Components
import { Modal } from "@/components";
import Input from "@/components/UIs/Input";
import Select from "@/components/UIs/Select";
//== Modules
import { useQuery } from "@tanstack/react-query";
//== Component Logic
import useLogic from "./logic";
//== Api
import { getAllTeacherQuizzes } from "@/API/teacherPanel";
//== Styles
import styles from './addAssignmentModal.module.scss';

type Props = {
  setOpenAssignment: React.Dispatch<boolean>;
  lessonId: number;
  classId: number;
}

const AddAssignmentModal = ({ setOpenAssignment, lessonId, classId }: Props) => {
  const { assignmentData, setAssignmentData, handleFields, addAssignment } = useLogic({ lessonId, classId, setOpenAssignment });

  const { data: quizzes } = useQuery(['getAllTeacherQuizzes'], () => getAllTeacherQuizzes({ page: 1 }));
  const allQuizzes = quizzes?.quizzes ? quizzes?.quizzes?.map((quiz: any) => ({ label: quiz.title, value: quiz.id })) : [];

  return (
    <Modal setOpenModal={setOpenAssignment}>
      <div className={styles.form}>
        <h3>إضافة واجب جديد</h3>
        <div className={styles.field}>
          <label>العنوان</label>
          <Input type="text" name="title" placeholder="العنوان" value={assignmentData.title} onChange={(e) => handleFields(e)} />
        </div>
        <div className={styles.field}>
          <label>الوصف</label>
          <Input type="text" name="description" placeholder="الوصف" value={assignmentData.description} onChange={(e) => handleFields(e)} />
        </div>
        <div className={styles.field}>
          <label>تاريخ الإنتهاء</label>
          <Input type="date" name="expire_date" value={assignmentData.expire_date} onChange={(e) => handleFields(e)} />
        </div>
        <div className={styles.field}>
          <label>إرفق ملف</label>
          <input type="file" name="file_path" onChange={(e) => handleFields(e, 'file')} />
        </div>
        <div className={styles.field}>
          <Select placeholder="الإختبار" label="الإختبار" name="expire_date" options={allQuizzes} defaultValue={assignmentData.quiz_id} onChange={(e) => setAssignmentData({ ...assignmentData, quiz_id: e.target.value })} />
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={addAssignment}>إضافة</button>
        <button onClick={() => setOpenAssignment(false)}>إغلاق</button>
      </div>
    </Modal>
  )
}

export default AddAssignmentModal;