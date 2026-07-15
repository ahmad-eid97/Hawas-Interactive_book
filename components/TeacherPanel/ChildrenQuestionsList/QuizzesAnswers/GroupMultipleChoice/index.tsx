import { useState } from 'react';
//= Components
import Input from '@/components/UIs/Input';
import Switch from '@/components/UIs/Switch';
//= Styles
import cls from './groupMultipleChoice.module.scss';

type Props = {
  questionData: any;
  setQuestionData: React.Dispatch<React.SetStateAction<any>>
}

function GroupMultipleChoice({ questionData, setQuestionData }: Props) {
  function addNewAnswer() {
    setQuestionData({ ...questionData, answers: [...questionData.answers, { title: '', is_correct: 0, answer_view_format: 'text', answer_order: 1 }] });
  }

  function deleteAnswer(idx: number) {
    setQuestionData({ ...questionData, answers: questionData.answers.filter((a: any, i: number) => i !== idx) })
  }

  function handleChangeAnswer(value: any, key: string, idx: number) {
    setQuestionData({ ...questionData, answers: questionData.answers.map((a: any, i: number) => i === idx ? { ...a, [key]: value } : a) })
  }

  return (
    <div className={cls.groupMultipleChoice}>
      <div className={cls.answers}>
        <p className={cls.title}>الاجابات:</p>
        {questionData.answers.map((answer: any, idx: number) => (
          <div className={cls.answer} key={idx}>
            <div className={cls.input}>
              <Input name='title' placeholder='title' value={answer.title} onChange={(e) => handleChangeAnswer(e.target.value, "title", idx)} />
            </div>
            <div className={cls.switch}>
              <label>إجابة صحيحة:</label>
              <Switch switched={answer.is_correct} setSwitched={(e) => handleChangeAnswer(e.target.checked ? 1 : 0, "is_correct", idx)} />
            </div>
            <div className={cls.delete} onClick={() => deleteAnswer(idx)}>
              <i className="fa-regular fa-trash-can"></i>
            </div>
          </div>
        ))}
        <div className={cls.actions}>
          <button className={cls.addAnswer} onClick={addNewAnswer}>إضافة إجابة</button>
        </div>
      </div>
    </div>
  )
}

export default GroupMultipleChoice;