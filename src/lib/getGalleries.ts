import fs from "fs";
import path from "path";

type Gallery = {
  name: string;
  images: string[];
};

export function getGalleries(): Gallery[] {
  const mediaDir = path.join(process.cwd(), "public", "media");
  if (!fs.existsSync(mediaDir)) return [];
  const entries = fs.readdirSync(mediaDir, { withFileTypes: true });
  const folders = entries.filter((e) => e.isDirectory()).map((d) => d.name);

  const galleries: Gallery[] = folders.map((folder) => {
    const folderPath = path.join(mediaDir, folder);
    const files = fs.readdirSync(folderPath);
    const images = files
      .filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
      .map((f) => path.posix.join("/media", folder, f));
    return { name: folder, images };
  });

  return galleries.filter((g) => g.images.length > 0);
}

export default getGalleries;

