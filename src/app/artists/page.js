import AlbumSection from "@/components/AlbumSection";
import getAlbums from "../../../libs/getAlbums";

export default async function Home() {
  const albums = await getAlbums({ per_page: 40, page: 1 });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AlbumSection albums={albums} />
    </main>
  );
}
