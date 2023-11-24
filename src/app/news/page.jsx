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
      newsDate: "9 SEP, 2023",
      newsTitle:
        "World EV Day 2023: Electric mobility reshaping landscape of transportation",
      newsSlug:
        "https://www.zeebiz.com/automobile/news-world-ev-day-2023-electric-mobility-reshaping-landscape-of-transportation-252803",
      newsImage: Blog1Img,
    },
    {
      id: "2",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "7 SEP, 2023",
      newsTitle:
        "Global leaders unite for progress: G20 Summit 2023 promises hope and co-operation",
      newsSlug:
        "https://www.indiantelevision.com/mam/digital/global-leaders-unite-for-progress%3A-g20-summit-2023-promises-hope-and-co-operation-230907",
      newsImage: Blog2Img,
    },
    {
      id: "3",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "6 SEP, 2023",
      newsTitle: "India’s G20 Summit Offers Promising Future Globally",
      newsSlug:
        "https://www.businessworld.in/article/India-s-G20-Summit-Offers-Promising-Future-Globally/06-09-2023-490029/",
      newsImage: Blog3Img,
    },
    {
      id: "4",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "27 JULY, 2023",
      newsTitle: "How India is driving new opportunities for global businesses",
      newsSlug:
        "https://www.firstpost.com/business/how-india-is-driving-new-opportunities-for-global-businesses-12922582.html",
      newsImage: Blog1Img,
    },
    {
      id: "5",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "14 FEB, 2023",
      newsTitle: "Budget 2023: Logistics sector reactions",
      newsSlug:
        "https://www.manufacturingtodayindia.com/sectors/budget-2023-logistics-sector-reactions",
      newsImage: Blog2Img,
    },
    {
      id: "6",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "8 FEB, 2023",
      newsTitle:
        "ISN Special Feature : Here’s how The Logistics Industry reacts on Union Budget 2023",
      newsSlug:
        "https://indiashippingnews.com/isn-special-feature-heres-how-the-logistics-industry-reacts-on-union-budget-2023/",
      newsImage: Blog3Img,
    },
    {
      id: "7",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "1 FEB, 2023",
      newsTitle:
        "Budget 2023: Logistics sector hopes for more incentives towards NLP, focus on digitisation, ESG infrastructure",
      newsSlug:
        "https://www.financialexpress.com/budget/budget-2023-logistics-sector-hopes-for-more-incentives-towards-nlp-focus-on-digitisation-esg-infrastructure-2967033/",
      newsImage: Blog3Img,
    },
    {
      id: "8",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "17 MAY, 2023",
      newsTitle:
        "How India can respond to the demand for greener & sustainable supply chain",
      newsSlug:
        "https://timesofindia.indiatimes.com/blogs/voices/how-india-can-respond-to-the-demand-for-greener-sustainable-supply-chain/",
      newsImage: Blog3Img,
    },
    {
      id: "9",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "5 JUN, 2023",
      newsTitle:
        "Apollo International: Fostering Innovation & Sustainability in Logistics and Supply Chain Operations",
      newsSlug:
        "https://indiacsr.in/apollo-international-innovation-sustainability-logistics/",
      newsImage: Blog3Img,
    },
    {
      id: "10",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "1 JUN, 2023",
      newsTitle:
        "Innovating Infrastructure Projects through Advanced Technology: Apollo International’s EPC Division Leads the Way",
      newsSlug:
        "https://cxotoday.com/interviews/innovating-infrastructure-projects-through-advanced-technology-apollo-internationals-epc-division-leads-the-way/",
      newsImage: Blog3Img,
    },
    {
      id: "11",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "27 JUN, 2023",
      newsTitle:
        "Budget 2023: As logistics sector becomes ESG conscious, stakeholders eye policy policy initiatives to facilitate green transition",
      newsSlug:
        "https://infra.economictimes.indiatimes.com/news/logistics/budget-2023-as-logistics-sector-becomes-esg-conscious-stakeholders-eye-policy-initiatives-to-facilitate-green-transition/97362675",
      newsImage: Blog3Img,
    },
    {
      id: "12",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "26 DEC, 2022",
      newsTitle:
        "Apollo LogiSolutions sells stake in Kashipur Terminal to Gateway Distriparks",
      newsSlug:
        "https://www.logisticsandscm.com/warehouse/apollo-logisolutions-sells-stake-in-kashipur-terminal-to-gateway-distriparks",
      newsImage: Blog3Img,
    },
    {
      id: "13",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "25 DEC, 2022",
      newsTitle:
        "Apollo LogiSolutions divests Kashipur terminal to expand contract logistics business",
      newsSlug:
        "https://www.constructionweekonline.in/business/apollo-logisolutions-divests-kashipur-terminal-to-expand-contract-logistics-business",
      newsImage: Blog3Img,
    },
    {
      id: "14",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "25 DEC, 2022",
      newsTitle:
        "Apollo LogiSolutions divests Kashipur terminal to streamline business growth",
      newsSlug:
        "https://theprint.in/economy/apollo-logisolutions-divests-kashipur-terminal-to-streamline-business-growth/1281204/",
      newsImage: Blog3Img,
    },
    {
      id: "15",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "28 SEP, 2021",
      newsTitle: "Indian Supply Chain Sector Pivots for Profitability",
      newsSlug:
        "https://etinsights.et-edge.com/indian-supply-chain-sector-pivots-for-profitability/",
      newsImage: Blog3Img,
    },
    {
      id: "16",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "7 APR, 2021",
      newsTitle:
        "Apollo LogiSolutions announces partnerships for India’s first Vaccine Platform Solution",
      newsSlug:
        "https://www.motorindiaonline.in/apollo-logisolutions-announces-partnership-with-indigo-airlines-and-unicef-ventures-funded-statwig-for-indias-first-vaccine-platform-solution/",
      newsImage: Blog3Img,
    },
    {
      id: "17",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "5 APR, 2021",
      newsTitle:
        "Apollo LogiSolutions ties up with IndiGo, blockchain firm StaTwig for integrated vaccine platform",
      newsSlug:
        "https://www.techcircle.in/2021/04/05/apollo-logisolutions-ties-up-with-indigo-blockchain-firm-statwig-for-integrated-vaccine-platform",
      newsImage: Blog3Img,
    },
    {
      id: "18",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "3 APR, 2021",
      newsTitle:
        "Apollo LogiSolutions enters into strategic partnerships to provide vaccine logistics",
      newsSlug:
        "https://www.logisticsinsider.in/apollo-logisolutions-enters-into-strategic-partnerships-to-provide-vaccine-logistics/",
      newsImage: Blog3Img,
    },
    {
      id: "19",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "1 APR, 2021",
      newsTitle: "Apollo LogiSolutions eyes vaccine logistics space",
      newsSlug:
        "https://www.thehindubusinessline.com/companies/apollo-logisolutions-eyes-vaccine-logistics-space/article34217249.ece",
      newsImage: Blog3Img,
    },
    {
      id: "20",
      newsTag: "News",
      newsRead: "4 MIN Read",
      newsDate: "7 JUL, 2021",
      newsTitle:
        "PLUSS and Apollo LogiSolutions set up cold storage facility in Hyderabad",
      newsSlug:
        "http://www.cargoconnect.co.in/infrastructure/pluss-and-apollo-logisolutions-set-up-cold-storage-facility-in-hyderabad/",
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
