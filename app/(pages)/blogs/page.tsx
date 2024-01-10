//== Components
import { PageHeader, BlogsList } from "@/components";
//= Api
import { getAllBlogs } from '@/API/pages';
//= Types
import type { Blog } from "@/types";

interface BlogsProps { }

const Blogs: React.FC<BlogsProps> = async () => {
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