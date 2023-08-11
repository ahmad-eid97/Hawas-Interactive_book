//== Components
import { PageHeader, BlogDetails as BlogDetailsComponent } from "@/components";

interface BlogDetailsProps { }

const BlogDetails: React.FC<BlogDetailsProps> = () => {
  return (
    <>
      <PageHeader title="تفاصيل المدونة" />
      <BlogDetailsComponent />
    </>
  );
}

export default BlogDetails;