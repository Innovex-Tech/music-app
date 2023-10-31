import { rapidApi } from "../utils/baseUrls";

async function getAlbums({ per_page = 10, page = 1 }) {
  const res = await fetch(
    `${rapidApi}/chart/albums/?per_page=${per_page}&page=${page}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.RAPID_API_HOST,
      },
      next: { revalidate: 3600, tags: ["albums"] },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getAlbums;
