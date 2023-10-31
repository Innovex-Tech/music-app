import Link from "next/link";
import React from "react";

function AlbumSection({ albums }) {
  return (
    <div className="flex flex-col gap-4">
      {albums.chart_items.map(({ item }) => (
        <Link key={item.id} href={`/albums/${item.id}`}>
          {item.full_title}
        </Link>
      ))}
    </div>
  );
}

export default AlbumSection;
