import SearchForm from "@/app/components/SearchForm";
import StartUpCard from "@/app/components/StartUpCard";
import "easymde/dist/easymde.min.css";

export default async function Home({ searchParams }) {
  const { query } = await searchParams;

  let posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Sohail",
      },
      _id: 1,
      description: "This is image",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9NShuPDUQANXTUDJ90ikqaN-1x_YtbKcJQ&s",
      category: "Robots",
      title: "We Robots",
    },
  ];

  posts = posts.filter((post) => {
    if (!query) return post;

    const search = query.toLowerCase();
    return (
      post.title.toLowerCase().includes(search) ||
      post.description.toLowerCase().includes(search) ||
      post.category.toLowerCase().includes(search)
    );
  });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          akshv ashdv asgd sdhs <br />
          shab Lorem ipsum dolor.
        </h1>

        <p className="sub-heading  !max-w-3xl">
          Submit Ideas Lorem ipsum dolor. Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {" "}
          {query ? `Search results for " ${query}"` : "All posts"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post) => <StartUpCard key={post?._id} post={post} />)
          ) : (
            <p className="no-results">NO Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
