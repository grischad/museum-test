import { WordPressTemplate } from '@faustwp/core';
import { useAuth, getApolloAuthClient, useLogout } from "@faustwp/core";
import { gql, useQuery } from "@apollo/client";

function AuthenticatedView(props) {
  const client = getApolloAuthClient();
  const { logout } = useLogout();
  const { data, loading } = useQuery(
    gql`
      {
        viewer {
          posts {
            nodes {
              id
              title
            }
          }
          name
        }
      }
    `,
    { client }
  );

  if (loading) {
    return <>Loading...</>;
  }

  return <WordPressTemplate {...props} />;
}

export default function Page(props) {
  const { isAuthenticated, isReady, loginUrl } = useAuth();

  if (!isReady) {
    return <>Loading...</>;
  }

  if (isAuthenticated === true) {
    return <AuthenticatedView {...props} />;
  }

  return (
    <>
      <p>Welcome!</p>
      <a href={loginUrl}>Login</a>
    </>
  );
}