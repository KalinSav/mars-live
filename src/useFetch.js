import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
        setState({ data: responseJSON, loading: false });
      })
      .catch((err) => console.log(err));
  }, [url]);
  return state;
};

export default useFetch;
