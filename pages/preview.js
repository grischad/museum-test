import { WordPressTemplate } from '@faustwp/core';
import { useAuth } from "@faustwp/core";

export default function Page(props) {
  const { isAuthenticated, isReady, loginUrl } = useAuth();

  if (!isReady) {
    return <>Loading...</>;
  }

  if (isAuthenticated === true) {
    return <WordPressTemplate {...props} />;
  }

  return (
    <>
      <p>Welcome!</p>
      <a href={loginUrl}>Login</a>
    </>
  );
}