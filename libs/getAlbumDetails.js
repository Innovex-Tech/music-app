import { rapidApi } from "../utils/baseUrls";

async function getAlbumDetails({ id }) {
  const res = await fetch(`${rapidApi}/album/details/?id=${id}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST,
    },
    next: { revalidate: 3600, tags: ["albums"] },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getAlbumDetails;
