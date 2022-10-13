import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>
        The Project Page for a specific project ({query.clientProjectId}) for {query.id}
      </h1>
    </div>
  );
};

export default SelectedClientProjectPage;
