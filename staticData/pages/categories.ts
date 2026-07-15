import type {
  LibrayPageResponse,
  PlaysPageResponse,
  FilmsPageResponse,
  LecturesPageResponse,
  WorkshopsPageResponse,
} from '@/API/pages/categories/types';
import type { ICategory } from '@/types';

export const categoriesBySlug: Record<string, ICategory> = {
  arabic: { id: 1, image: '/images/home/photo-19.jpg', isFeatured: true, status: true, code: null, slug: 'arabic', name: 'اللغة العربية' },
  english: { id: 2, image: '/images/home/photo-20.jpg', isFeatured: true, status: true, code: null, slug: 'english', name: 'اللغة الإنجليزية' },
  math: { id: 3, image: '/images/home/photo-21.jpg', isFeatured: true, status: true, code: null, slug: 'math', name: 'الرياضيات' },
  science: { id: 4, image: '/images/home/photo-22.jpg', isFeatured: true, status: true, code: null, slug: 'science', name: 'العلوم' },
  social: { id: 5, image: '/images/home/photo-23.jpg', isFeatured: false, status: true, code: null, slug: 'social', name: 'الدراسات الاجتماعية' },
  arts: { id: 6, image: '/images/home/photo-24.jpg', isFeatured: false, status: true, code: null, slug: 'arts', name: 'الفنون' },
};

export const libraryPageData: LibrayPageResponse = {
  id: 5,
  name: 'المكتبة',
  description: 'مكتبة حواس الرقمية تضم مجموعة متنوعة من الكتب التعليمية والقصص الممتعة للأطفال.',
  breadcrumb_title: 'مكتبة حواس',
  breadcrumb_subtitle: 'اكتشف عالم المعرفة',
  slug: 'library',
  options: [
    { title: 'حياتنا الآمنة', link: '#', image: '/images/library/health-book1.webp', author: 'فريق حواس' },
    { title: 'صحتي بحكمة', link: '#', image: '/images/library/health-book2.webp', author: 'د. أحمد حسن' },
    { title: 'كتب العلوم', link: '#', image: '/images/library/health-book1.webp', author: 'أ. سارة علي' },
    { title: 'كتب اللغة العربية', link: '#', image: '/images/library/health-book2.webp', author: 'أ. محمد أحمد' },
  ],
  status: 1,
  code: null,
};

export const playsPageData: PlaysPageResponse = {
  id: 6,
  name: 'المسرحيات',
  description: 'مجموعة من المسرحيات التعليمية الهادفة للأطفال.',
  breadcrumb_title: 'مسرحيات حواس',
  breadcrumb_subtitle: 'تعلم من خلال الفن',
  slug: 'plays',
  options: [
    { title: 'مسرحية الأمانة', description: 'قصة تعليمية عن أهمية الأمانة والصدق.', image: '/images/plays/play1.png', video: '' },
    { title: 'مسرحية التعاون', description: 'قصة تعلمنا أهمية العمل الجماعي والتعاون.', image: '/images/plays/play2.png', video: '' },
    { title: 'مسرحية البيئة', description: 'نحافظ على بيئتنا ونحبها.', image: '/images/plays/play1.png', video: '' },
  ],
  status: 1,
  code: null,
};

export const filmsPageData: FilmsPageResponse = {
  id: 7,
  name: 'الأفلام التعليمية',
  description: 'أفلام وثائقية تعليمية مشوقة للأطفال.',
  breadcrumb_title: 'أفلام حواس',
  breadcrumb_subtitle: 'تعلم وتمتع في آنٍ واحد',
  slug: 'films',
  options: [
    { title: 'رحلة إلى الفضاء', video: '', image: '/images/films/film1.png' },
    { title: 'عجائب البحار', video: '', image: '/images/films/film1.png' },
    { title: 'عالم الحيوانات', video: '', image: '/images/films/film1.png' },
  ],
  status: 1,
  code: null,
};

export const lecturesPageData: LecturesPageResponse = {
  id: 8,
  name: 'المحاضرات',
  description: 'محاضرات تعليمية مقدمة من نخبة من المتخصصين.',
  breadcrumb_title: 'محاضرات حواس',
  breadcrumb_subtitle: 'تعلم من الخبراء',
  slug: 'lectures',
  options: [
    { title: 'مهارات القراءة السريعة', video: '', image: '/images/home/photo-25.jpg' },
    { title: 'أسرار التفكير الإبداعي', video: '', image: '/images/home/photo-26.jpg' },
    { title: 'كيف تتعلم بفاعلية؟', video: '', image: '/images/home/photo-27.jpg' },
  ],
  status: 1,
  code: null,
};

export const workshopsPageData: WorkshopsPageResponse = {
  id: 9,
  name: 'ورش العمل',
  description: 'ورش عمل تفاعلية تنمي مهارات الأطفال الإبداعية والعلمية.',
  breadcrumb_title: 'ورش عمل حواس',
  breadcrumb_subtitle: 'تعلم بالتطبيق',
  slug: 'workshops',
  options: [
    { title: 'ورشة الرسم الإبداعي', link: '/images/home/photo-28.jpg' },
    { title: 'ورشة البرمجة للأطفال', link: '/images/home/photo-29.jpg' },
    { title: 'ورشة الكتابة القصصية', link: '/images/home/photo-30.jpg' },
    { title: 'ورشة الروبوتيك', link: '/images/home/photo-19.jpg' },
  ],
  status: 1,
  code: null,
};
