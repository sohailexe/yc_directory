import SearchForm from "@/app/components/SearchForm";
import StartUpCard from "@/app/components/StartUpCard";
import { client } from "@/sanity/lib/client";
import "easymde/dist/easymde.min.css";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
export default async function Home({ searchParams }) {
  const { query } = await searchParams;
  // let posts = await client.fetch(STARTUP_QUERY);
  console.log("query", query);

  let { data: posts } = await sanityFetch({ query: STARTUP_QUERY });

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
