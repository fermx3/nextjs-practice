import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const { query, push } = useRouter();

  const loadProjectHandler = () => {
    // load data...
    push("/clients/max/projectA");
  };

  return (
    <div>
      <h1>The Projects of {query.id}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
