import placeholder from "../images/image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return placeholder;
  const targ = "media/";
  const index = url.indexOf(targ) + targ.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
