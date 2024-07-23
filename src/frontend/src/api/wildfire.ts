import axios from "axios";

const getWildfiresByYear = async (year: number) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/year/${year}`
  );

  return response.data;
};

export { getWildfiresByYear };
