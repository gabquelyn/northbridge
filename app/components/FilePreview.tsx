import Image from "next/image";
import TxtPreview from "./TextPreview";
const FilePreview = ({ url }: { url: string }) => {
  const isImage = /\.(jpg|jpeg|png|webp|gif)$/i.test(url);
  const isPDF = /\.pdf$/i.test(url);

  if (isImage) {
    return (
      <div className="relative rounded-lg h-125 w-full">
        <Image
          src={url}
          alt={"Image"}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    );
  }


  return (
    <iframe
      src={`https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`}
      className="w-full h-125"
    />
  );
};

export default FilePreview;
