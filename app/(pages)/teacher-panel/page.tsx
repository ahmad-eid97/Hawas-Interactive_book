//== Components
import { PageHeader, TeacherPanelWrapper } from "@/components";
//= Api
import { getAllSchools, getAllSchoolClasses } from "@/API/teacherPanel";

export async function generateMetadata() {
  return {
    title: `حواس - لوحة المعلم`,
    description: 'سياسات حواس - اطلع على سياساتنا والالتزامات التي نلتزم بها لضمان تقديم خدمات ذات جودة وأمان'
  }
}

const QuestionsForTeacher: React.FC = async () => {
  const [schools, schoolClasses] = await Promise.all([
    getAllSchools(),
    getAllSchoolClasses()
  ])

  return (
    <>
      <PageHeader title="لوحة المعلم" />
      <TeacherPanelWrapper schools={schools.data.schools} schoolClasses={schoolClasses.data.school_classes} />
    </>
  );
}

export default QuestionsForTeacher;