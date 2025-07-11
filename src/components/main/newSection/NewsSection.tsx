import { Metadata } from "next";
import { NewsType } from "@/types/NewsType";
import { APIBuilder } from "@/utils/APIBuilder";
import NewsSectionTemplate from "@/components/main/newSection/NewsSectionTemplate";

export const metadata: Metadata = {
  title: "자전거 뉴스",
  description: "최신 자전거 뉴스와 인기 블로그를 확인하세요.",
};

async function getNewsData(): Promise<{ latest: NewsType[]; popular: NewsType[] }> {
  try {
    const [latestRes, popularRes] = await Promise.all([
      APIBuilder.get("/api/news/latest").build().call<NewsType[]>(),
      APIBuilder.get("/api/news/popular").build().call<NewsType[]>(),
    ]);

    return {
      latest: latestRes.data,
      popular: popularRes.data,
    };
  } catch (e) {
    console.error("Failed to fetch news data:", e);
    return {
      latest: [],
      popular: [],
    };
  }
}

export default async function NewsSection() {
  const { latest, popular } = await getNewsData();

  return <NewsSectionTemplate latest={latest} popular={popular} />;
}
