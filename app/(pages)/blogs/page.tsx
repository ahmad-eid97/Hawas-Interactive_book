//== Components
import { PageHeader, BlogsList } from "@/components";

interface BlogsProps { }

const Blogs: React.FC<BlogsProps> = () => {
  return (
    <>
      <PageHeader title="مدونة حواس" />
      <BlogsList />
    </>
  );
}

export default Blogs;