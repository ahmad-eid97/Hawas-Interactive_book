//== Components
import { PageHeader, BlogDetails as BlogDetailsComponent } from "@/components";
//= Api
import { getBlogById } from "@/API/pages";
//= Types
import type { IBlogDetails } from '@/types';

export async function generateMetadata() {
  return {
    title: `حواس - المدونة`,
    description: 'تصفح مقالات حواس - اكتسب المعرفة حول مختلف جوانب الصحة والأمان من خلال مدوناتنا الممتعة والإلهامية.'
  }
}

interface BlogDetailsProps {
  params: {
    id: number;
  }
}

const BlogDetails: React.FC<BlogDetailsProps> = async ({ params: { id } }) => {
  let blogDetails: IBlogDetails | null = null;

  try {
    const data = await getBlogById(id);
    if (data) blogDetails = data;
  } catch (err) { }

  return (
    <>
      <PageHeader title={blogDetails?.title || 'تفاصيل المدونة'} />
      <BlogDetailsComponent data={blogDetails} />
    </>
  );
}

export default BlogDetails;