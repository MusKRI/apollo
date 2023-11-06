import Card from "../../../../components/ui/card/card";

const BlogsFeaturedCards = ({ data }) => {
  return (
    <div className="bg-white py-12 px-8 md:px-20 flex flex-col justify-end">
      <div className="py-4">
        <h1 className="text-center font-bold text-4xl">Featured</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 h-full place-items-center gap-6">
        {data.map((blog) => {
          return (
            <Card
              key={blog.id}
              data={{
                cardImage: blog.blogImage,
                cardTag: blog.blogTag,
                cardReading: blog.blogRead,
                cardDate: blog.blogDate,
                cardTitle: blog.blogTitle,
                cardSlug: blog.blogSlug,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogsFeaturedCards;
