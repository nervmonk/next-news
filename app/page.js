import NewsSlider from "@component/components/news-slider";
import NewsList from "@component/components/news-list";
import { DUMMY_NEWS } from "@component/lib/data";

export default function Home() {
  const news = DUMMY_NEWS;
  return (
    <>
      <NewsSlider />
      <NewsList category={news} />
    </>
  );
}
