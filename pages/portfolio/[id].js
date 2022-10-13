import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const { pathname, query } = useRouter();

  console.log(pathname);
  console.log(query.id);

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
      <p>{query.id}</p>
    </div>
  );
};
export default PortfolioProjectPage;
