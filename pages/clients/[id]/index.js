import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>The Projects of {query.id}</h1>
    </div>
  );
};

export default ClientProjectsPage;
