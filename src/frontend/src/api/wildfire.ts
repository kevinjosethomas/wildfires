import axios from "axios";

const getWildfiresByYear = async (year: number) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/year/${year}`,
  );

  return response.data;
};

const predictWildfire = async (
  latitude: number,
  longitude: number,
  day: number,
) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/predict`, {
    latitude,
    longitude,
    day,
  });

  return response.data;
};

export { getWildfiresByYear, predictWildfire };
