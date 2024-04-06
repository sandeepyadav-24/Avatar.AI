import ImageGenPoster from "./ImageGenPoster";

const ImageGenBanner = () => {
  return (
    <div className="w-2/5 bg-white m-2 px-5 py-3 rounded-xl">
      <ImageGenPoster />
      <div>
        <h1>Project Details </h1>
        <input className="w-full h-[500px]" />
      </div>
    </div>
  );
};
export default ImageGenBanner;
