//= Components
import Switch from '@/components/UIs/Switch';
//= Styles
import cls from './groupTrueFalse.module.scss';

type Props = {
  questionData: any;
  setQuestionData: React.Dispatch<React.SetStateAction<any>>
}

function GroupTrueFalse({ questionData, setQuestionData }: Props) {

  return (
    <div className={cls.groupTrueFalse}>
      <div className={cls.switch}>
        <label>إجابة صحيحة:</label>
        <Switch
          switched={questionData.is_correct === 1 ? true : false}
          setSwitched={(e) => setQuestionData({ ...questionData, is_correct: e.target.checked ? 1 : 0 })}
        />
      </div>
    </div>
  )
}

export default GroupTrueFalse;