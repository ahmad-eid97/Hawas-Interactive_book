//== Components
import { PageHeader, BlogsList } from "@/components";
//= Api
import { getAllBlogs } from '@/API/pages';
//= Types
import type { Blog } from "@/types";


export async function generateMetadata() {
  return {
    title: `حواس - المدونة`,
    description: 'تصفح مقالات حواس - اكتسب المعرفة حول مختلف جوانب الصحة والأمان من خلال مدوناتنا الممتعة والإلهامية.'
  }
}


const Blogs: React.FC = async () => {
  let blogsData: Blog[] = [];

  try {
    const data = await getAllBlogs({ limit: 3 });
    if (data) blogsData = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title="مدونة حواس" />
      <BlogsList data={blogsData} />
    </>
  );
}

export default Blogs;