import NewsSingle from "@component/components/news-single";
import { DUMMY_NEWS } from "@component/lib/data";

export default async function News(props) {
  const params = await props.params;
  const path = params.slug;
  const news = DUMMY_NEWS.find((item) => item.path === path);

  return <NewsSingle news={news} />;
}
