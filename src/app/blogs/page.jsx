// import Card from "../../components/ui/card/card";

import BlogsHeroCards from "./components/blogs-hero-cards/blogs-hero-cards";
import BlogsHero from "./components/blogs-hero/BlogsHero";

// images
import BlogHeroCardImage from "./images/blogs-hero.png";

// blogs images
import Blog1Img from "./images/blog1.png";
import Blog2Img from "./images/blog-2.png";
import Blog3Img from "./images/blog-3.png";
import BlogsFeaturedCards from "./components/blogs-featured-cards/blogs-featured-cards";
import BlogsNewsletter from "./components/blogs-newsletter/blogs-newsletter";

const blogspageData = {
  // HERO DATA
  heroBlogCardImage: BlogHeroCardImage,
  heroBlogCardRead: "4 MIN READ",
  heroBlogCardTitle: "Automotive for Logistics: A Symbiotic Deal",
  heroBlogCardDate: "22 Dec, 2022",

  // Blogs Hero Cards Data
  blogsHeroCardsData: [
    {
      id: "1",
      blogTag: "BLOG",
      blogRead: "4 MIN Read",
      blogDate: "22 DEC, 2022",
      blogTitle: "Sustainability in Business and Logistics: The Future is Now",
      blogSlug: "#",
      blogImage: Blog1Img,
    },
    {
      id: "2",
      blogTag: "BLOG",
      blogRead: "4 MIN Read",
      blogDate: "22 DEC, 2022",
      blogTitle: "Advantage D2C: Reach Your Consumer",
      blogSlug: "#",
      blogImage: Blog2Img,
    },
    {
      id: "3",
      blogTag: "BLOG",
      blogRead: "4 MIN Read",
      blogDate: "22 DEC, 2022",
      blogTitle: "Omnichannel Logistics: A Different Beast",
      blogSlug: "#",
      blogImage: Blog3Img,
    },
  ],

  // BLogs Featured Cards Data
  blogsFeaturedCardsData: [
    {
      id: "1",
      blogTag: "BLOG",
      blogRead: "4 MIN Read",
      blogDate: "22 DEC, 2022",
      blogTitle: "Sustainability in Business and Logistics: The Future is Now",
      blogSlug: "#",
      blogImage: Blog1Img,
    },
    {
      id: "2",
      blogTag: "BLOG",
      blogRead: "4 MIN Read",
      blogDate: "22 DEC, 2022",
      blogTitle: "Advantage D2C: Reach Your Consumer",
      blogSlug: "#",
      blogImage: Blog2Img,
    },
    {
      id: "3",
      blogTag: "BLOG",
      blogRead: "4 MIN Read",
      blogDate: "22 DEC, 2022",
      blogTitle: "Omnichannel Logistics: A Different Beast",
      blogSlug: "#",
      blogImage: Blog3Img,
    },
  ],
};

const BlogsPage = () => {
  return (
    <div className="relative">
      <BlogsHero
        heroData={{
          heroBlogCardImage: blogspageData.heroBlogCardImage,
          heroBlogCardRead: blogspageData.heroBlogCardRead,
          heroBlogCardTitle: blogspageData.heroBlogCardTitle,
          heroBlogCardDate: blogspageData.heroBlogCardDate,
        }}
      />

      <BlogsHeroCards data={blogspageData.blogsHeroCardsData} />

      <BlogsFeaturedCards data={blogspageData.blogsHeroCardsData} />

      <BlogsNewsletter />
    </div>
  );
};

export default BlogsPage;
