//== Components
import { Modal } from "@/components";
import Input from '@/components/UIs/Input';
import SelectBox from '@/components/UIs/Select';
import Switch from '@/components/UIs/Switch';
//== Component Logic
import useLogic from "./logic";
//== Styles
import styles from './addQuizModal.module.scss';

type Props = {
  setOpen: React.Dispatch<boolean>;
  targetedQuiz?: any;
  schools: any;
  schoolClasses: any;
  refetch: () => void;
}

const AddQuizModal = ({ setOpen, targetedQuiz, schools, schoolClasses, refetch }: Props) => {
  const { quizData, setQuizData, handleFields, handleQuiz } = useLogic({ setOpen, targetedQuiz, refetch });
  const allSchools = schools.map((school: any) => ({ label: school.title, value: school.id }));
  const allSchoolClasses = schoolClasses.map((schoolClass: any) => ({ label: schoolClass.title, value: schoolClass.id }));

  return (
    <Modal setOpenModal={setOpen}>
      <div className={styles.form}>
        <h3>{targetedQuiz ? 'تعديل الإختبار' : 'إضافة إختبار جديد'}</h3>
        <div className={styles.field}>
          <label>العنوان</label>
          <Input type="text" name="title" placeholder="العنوان" value={quizData.title} onChange={(e) => handleFields(e)} />
        </div>
        <div className={styles.field}>
          <label>الوصف</label>
          <Input type="text" name="description" placeholder="الوصف" value={quizData.description} onChange={(e) => handleFields(e)} />
        </div>
        <div className={styles.field}>
          <SelectBox placeholder="المدرسة" label="المدرسة:" options={allSchools} defaultValue={quizData.school_id} onChange={(e) => setQuizData({ ...quizData, school_id: e.target.value })} />
        </div>
        <div className={styles.field}>
          <SelectBox placeholder="الصف" label="الصف:" options={allSchoolClasses} defaultValue={quizData.school_class_id} onChange={(e) => setQuizData({ ...quizData, school_class_id: e.target.value })} />
        </div>
        <div className={styles.field}>
          <label>درجة كل سؤال</label>
          <Input type="text" name="per_q_mark" placeholder="درجة كل سؤال" value={quizData.per_q_mark} onChange={(e) => handleFields(e)} />
        </div>
        <div className={styles.field}>
          <label>وقت الإختبار</label>
          <Input type="text" name="timer" placeholder="وقت الإختبار" value={quizData.timer} onChange={(e) => handleFields(e)} />
        </div>
        <div className={styles.switches}>
          <div className={styles.switch}>
            <label>عرض الإجابات:</label>
            <Switch switched={quizData.show_ans === '1' ? true : false} setSwitched={(e) => setQuizData({ ...quizData, show_ans: e.target.checked ? '1' : '0' })} />
          </div>
          <div className={styles.switch}>
            <label>تفعيل الإختبار:</label>
            <Switch switched={quizData.is_active === '1' ? true : false} setSwitched={(e) => setQuizData({ ...quizData, is_active: e.target.checked ? '1' : '0' })} />
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={handleQuiz}>{targetedQuiz ? 'تعديل' : 'اضافة'}</button>
        <button onClick={() => setOpen(false)}>إغلاق</button>
      </div>
    </Modal>
  )
}

export default AddQuizModal;