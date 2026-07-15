import Cookies from "universal-cookie";

const demoEmails = [
  'school_demo@hawas.site',
  'teacher_demo@hawas.site',
  'student_demo@hawas.site'
]

export function isDemo() {
  const cookies = new Cookies();
  const user = cookies.get('hawas-user');

  return demoEmails.includes(user?.email);
}