import { useState } from "react";
import useSWR from "swr";
import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const [status, setStatus] = useState("");

  const fetcher = (url) =>
    fetch(url, { headers })
      .then((res) => res.json())
      .then((json) => setStatus(json.description));

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <p>Failed to load</p>;
  if (isLoading) return <p>Loading...</p>;

  return <>{status && <p>Status : {status}</p>}</>;
}

export default App;
