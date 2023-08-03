import { Link, useRouteError } from "react-router-dom";

interface ErrorProps {
  message: string;
  status: number;
  statusText: string;
} 

export default function Error() {
  const error = useRouteError() as ErrorProps ; //Type Assertions
console.log(error)
  return (
    <div className="error_">
      <h2>Error: {error.message}</h2>
      <pre>
        {error.status} - {error.statusText}
      </pre>
      <Link to="/">
        <button>Return home</button>
      </Link>
    </div>
  );
}