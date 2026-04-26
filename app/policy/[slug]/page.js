import NewsSingle from "@component/components/news-single";
import { DUMMY_NEWS } from "@component/lib/data";

export default async function News(props) {
  const params = await props.params;
  console.log(params);
  const path = params.slug;
  const news = DUMMY_NEWS.find((item) => item.path === path);
  console.log(news);

  return <NewsSingle news={news} />;
}
