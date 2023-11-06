import Card from "../../../../components/ui/card/card";

const NewsHeroCards = ({ data }) => {
  return (
    <div className="bg-[#f6f6f7] py-4 min-h-[110vh] px-8 md:px-20 flex flex-col justify-end">
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 h-full place-items-center md:place-items-stretch md:place-content-between gap-6 mt-72">
        {data.map((news) => {
          return (
            <Card
              key={news.id}
              data={{
                cardImage: news.newsImage,
                cardTag: news.newsTag,
                cardReading: news.newsRead,
                cardDate: news.newsDate,
                cardTitle: news.newsTitle,
                cardSlug: news.newsSlug,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsHeroCards;
