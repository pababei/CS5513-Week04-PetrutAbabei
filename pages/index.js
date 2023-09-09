// Next.js will always look for index file
import Link from "next/link";
import Layout from "../components/layout";
import { getSortedList } from "../lib/data";

// define getStaticProps()
export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: { allData },
  };
}

export default function Home({ allData }) {
  return (
    <Layout>
      <h1>Hello from my Next.js App!</h1>
      <div className="list-group">
        {allData.map(({ id, name }) => (
          <Link
            key={id}
            href={`/${id}`}
            className="list-group-item list-group-item-action"
          >
            {name}
          </Link>
        ))}
      </div>
    </Layout>
  );
}
