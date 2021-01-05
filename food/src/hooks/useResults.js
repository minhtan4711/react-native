import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResult] = useState([]);
  const [errorMes, setErrMes] = useState("");

  const searchApi = async (searchTerm) => {
    // console.log("Hello there");
    try {
      const response = await yelp.get("/search", {
        // /search?limit=50
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResult(response.data.businesses);
      // console.log(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrMes("Something went wrong");
    }
  };

  // call searchApi when component is first rendered: BAD CODE!!
  // searchApi("pasta");
  useEffect(() => {
    searchApi("pho");
  }, []);

  return [searchApi, results, errorMes];
};
