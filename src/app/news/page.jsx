import NewsHeroCards from "./components/news-hero-cards/news-hero-cards";
import NewsHero from "./components/news-hero/NewsHero";

// images
import NewsHeroCardImage from "./images/blogs-hero.png";

// blogs images
import Blog1Img from "./images/blog1.png";
import Blog2Img from "./images/blog-2.png";
import Blog3Img from "./images/blog-3.png";
import NewsNewsletter from "./components/news-newsletter/news-newsletter";

const newspageData = {
  // HERO DATA
  newsBlogCardImage: NewsHeroCardImage,
  newsBlogCardRead: "4 MIN READ",
  newsBlogCardTitle:
    "How India can respond to the demand for greener & sustainable supply chain",
  newsBlogCardDate: "22 Dec, 2022",

  // Blogs Hero Cards Data
  newsHeroCardsData: [
    {
      id: "1",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "22 DEC, 2022",
      newsTitle: "How Apollo Supply Chain's technological focus is...",
      newsSlug: "#",
      newsImage: Blog1Img,
    },
    {
      id: "2",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "22 DEC, 2022",
      newsTitle: "Mulitmoda Logistics in India: A Reality Check",
      newsSlug: "#",
      newsImage: Blog2Img,
    },
    {
      id: "3",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "22 DEC, 2022",
      newsTitle: "Budget 2022: Here's what a leading logistics player...",
      newsSlug: "#",
      newsImage: Blog3Img,
    },
    {
      id: "4",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "22 DEC, 2022",
      newsTitle: "Budget 2022: Here's what a leading logistics player...",
      newsSlug: "#",
      newsImage: Blog1Img,
    },
    {
      id: "5",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "22 DEC, 2022",
      newsTitle: "Mulitmoda Logistics in India: A Reality Check",
      newsSlug: "#",
      newsImage: Blog2Img,
    },
    {
      id: "6",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "22 DEC, 2022",
      newsTitle: "Omnichannel Logistics: A Different Beast",
      newsSlug: "#",
      newsImage: Blog3Img,
    },
  ],
};

const NewsPage = () => {
  return (
    <div className="relative">
      <NewsHero
        heroData={{
          heroCardImage: newspageData.newsBlogCardImage,
          heroCardRead: newspageData.newsBlogCardRead,
          heroCardTitle: newspageData.newsBlogCardTitle,
          heroCardDate: newspageData.newsBlogCardDate,
        }}
      />

      <NewsHeroCards data={newspageData.newsHeroCardsData} />

      <NewsNewsletter />
    </div>
  );
};

export default NewsPage;
