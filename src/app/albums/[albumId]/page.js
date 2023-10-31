import Image from "next/image";
import getAlbumDetails from "../../../../libs/getAlbumDetails";

export default async function Page({ params }) {
  console.log("params.albumId", params.albumId);
  const { album } = await getAlbumDetails({ id: params.albumId });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={album.cover_art_thumbnail_url}
        alt={album.full_title}
        width={1000}
        height={100}
      />
      <div className="text-xl md:text-2xl lg:text-4xl">{album.full_title}</div>
      <div>{album.description_preview}</div>
    </main>
  );
}
