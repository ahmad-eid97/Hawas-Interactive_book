import { redirect } from "next/navigation";
//== Components
import { PageHeader } from "@/components";
import SearchResult from "@/components/SearchResult";
//= Api
import { searchInDatabase } from '@/API/pages';
//= Types
import type { SearchResponse } from "@/types";

export async function generateMetadata() {
  return {
    title: `حواس - البحث`,
    description: 'نتائج بحث حواس - اطلع على نتائج بحث عن مقالات و دورات و كتب و مناسبات حواس'
  }
}

type IProps = {
  searchParams: {
    keyword: string;
  }
}

const SearchPage: React.FC<IProps> = async ({ searchParams: { keyword } }) => {
  if (!keyword) redirect('/');
  let searchData: SearchResponse | null = null;

  try {
    const data = await searchInDatabase(keyword);
    if (data) searchData = data;
  } catch (err) { }

  if (!searchData) redirect('/');

  return (
    <>
      <PageHeader title="نتائج البحث" />
      <SearchResult data={searchData} />
    </>
  );
}

export default SearchPage;