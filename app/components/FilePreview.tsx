import Image from "next/image";
const FilePreview = ({ url }: { url: string }) => {
  return (
    <div className="relative rounded-lg h-90 w-full">
      <Image
        src={url}
        alt={"Image"}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
};

export default FilePreview;
