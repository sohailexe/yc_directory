import SearchForm from "@/app/components/SearchForm";

export default async function Home({ searchParams }) {
  const { query } = await searchParams;
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
    </>
  );
}
