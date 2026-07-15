//== Components
import { Modal } from "@/components";
import Input from '@/components/UIs/Input';
import SelectBox from '@/components/UIs/Select';
import Switch from '@/components/UIs/Switch';
//== Component Logic
import useLogic from "./logic";
//== Styles
import styles from './addParentQuestionModal.module.scss';

type Props = {
  setOpen: React.Dispatch<boolean>;
  targetedQuestion?: any;
  refetch: () => void;
}

const options = [
  {
    label: "Group Open Ended",
    value: "group_open_ended"
  },
  {
    label: "Group Short Answer",
    value: "group_short_answer_2"
  },
  {
    label: "Group Single Choice",
    value: "group_radio_single_choice"
  },
  {
    label: "Group Multiple Choice",
    value: "group_multiple_choice"
  },
  {
    label: "Group True False",
    value: "group_true_false"
  }
]

const AddParentQuestionModal = ({ setOpen, targetedQuestion, refetch }: Props) => {
  const { questionData, setQuestionData, handleFields, handleQuiz } = useLogic({ setOpen, targetedQuestion, refetch });

  return (
    <Modal setOpenModal={setOpen}>
      <div className={styles.form}>
        <h3>{targetedQuestion ? 'تعديل السؤال' : 'إضافة سؤال جديد'}</h3>
        <div className={styles.field}>
          <SelectBox placeholder="نوع الاختبار" label="نوع الاختبار" options={options} disabled={targetedQuestion} defaultValue={questionData.question_type} onChange={(e) => setQuestionData({ ...questionData, question_type: e.target.value })} />
        </div>
        <div className={styles.field}>
          <label>العنوان</label>
          <Input type="text" name="title" placeholder="العنوان" value={questionData.title} onChange={(e) => handleFields(e)} />
        </div>
        <div className={styles.field}>
          <label>الوصف</label>
          <Input type="text" name="description" placeholder="الوصف" value={questionData.description} onChange={(e) => handleFields(e)} />
        </div>
        <div className={styles.field}>
          <label>صورة السؤال</label>
          <input type="file" name="question_img" onChange={(e) => handleFields(e, 'question_img')} />
        </div>
        <div className={styles.field}>
          <label>درجة السؤال</label>
          <Input type="text" name="question_mark" placeholder="درجة السؤال" value={questionData.question_mark} onChange={(e) => handleFields(e)} />
        </div>
        <div className={styles.switches}>
          <div className={styles.switch}>
            <label>تفعيل السؤال:</label>
            <Switch switched={questionData.is_active === '1' ? true : false} setSwitched={(e) => setQuestionData({ ...questionData, is_active: e.target.checked ? '1' : '0' })} />
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={handleQuiz}>{targetedQuestion ? 'تعديل' : 'اضافة'}</button>
        <button onClick={() => setOpen(false)}>إغلاق</button>
      </div>
    </Modal>
  )
}

export default AddParentQuestionModal;