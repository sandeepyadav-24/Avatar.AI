import ImageGenBanner from "./ImageGenBanner";
import LeftNavbar1 from "./LeftNavbar1";
import OutputImage from "./OutputImage";

const ImageGen = () => {
  return (
    <div className="bg-black p-1 flex flex-row">
      <LeftNavbar1 />
      <ImageGenBanner />
      <OutputImage />
    </div>
  );
};
export default ImageGen;
