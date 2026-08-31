import Thumbnail from "@/components/Thumbnail";
const ThumbNailWrapper = ({ setActiveImage }) => {
  return (
    <>
      <Thumbnail imgsrc="/mint.png" setActiveImage={setActiveImage} />
      <Thumbnail imgsrc="/navy.png" setActiveImage={setActiveImage} />
      <Thumbnail imgsrc="/ocean.png" setActiveImage={setActiveImage} />
    </>
  );
};

export default ThumbNailWrapper;
