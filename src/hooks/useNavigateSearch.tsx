import { useLocation, useNavigate } from "react-router-dom";

function useNavigateSearch() {
  const location = useLocation();
  const navigate = useNavigate();

  return (search: any) => {
    return navigate({
      pathname: location.pathname,
      search: search,
    });
  };
}

export default useNavigateSearch;
