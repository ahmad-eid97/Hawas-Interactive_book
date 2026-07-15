import { useState } from "react";
//== Api
import { postAssignment } from '@/API/assignments';
import { successNotify } from "@/utils/toast";

type Props = {
  lessonId: number;
  classId: number;
  setOpenAssignment: React.Dispatch<boolean>;
}

type AssignmentData = {
  title: string;
  description: string;
  expire_date: string;
  file_path: File | string;
  quiz_id: string;
}

export default function useLogic({ lessonId, classId, setOpenAssignment }: Props) {
  const [assignmentData, setAssignmentData] = useState<AssignmentData>({
    title: '',
    description: '',
    expire_date: '',
    file_path: '',
    quiz_id: ''
  });

  function handleFields(e: React.ChangeEvent<HTMLInputElement>, type?: string) {
    const { name, value } = e.target;
    setAssignmentData(prev => ({
      ...prev,
      [name]: type === 'file' && e.target.files ? e.target.files[0] : value
    }))
  }

  async function addAssignment() {
    let formData = new FormData();
    formData.append('file_path', assignmentData.file_path as File);
    formData.set('title', assignmentData.title);
    formData.set('description', assignmentData.description);
    formData.set('expire_date', assignmentData.expire_date);
    formData.set('school_class_id', classId.toString());
    formData.set('lesson_id', lessonId.toString());
    formData.set('quiz_id', assignmentData.quiz_id.toString());

    const response = await postAssignment(formData);
    if (response?.success) {
      window.location.reload();
      setOpenAssignment(false);
      successNotify('تم إضافة الواجب بنجاح');
    }
  }

  return {
    assignmentData,
    setAssignmentData,
    handleFields,
    addAssignment
  }
}