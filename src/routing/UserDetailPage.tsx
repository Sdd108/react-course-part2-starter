import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  // Approach #1
  const param = useParams();
  console.log(param);

  // Approach #2
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));

  // Approach #3
  const location = useLocation();
  console.log(location);

  return <p>User</p>;
};

export default UserDetailPage;
