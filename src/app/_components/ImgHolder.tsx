type ImgHolderProps = {
  src: string;
  alt?: string;
  width: string | number;
  height: string | number;
  className?: string;
  imgClassName?: string;
};

export default function ImgHolder({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
}: ImgHolderProps) {
  return (
    <div className={`bg-gray-100 ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        className={`object-cover ${imgClassName || ''}`}
        style={{
          width: width,
          height: height,
        }}
      />
    </div>
  );
}
