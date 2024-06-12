const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  const targ = "media/";
  const index = url.indexOf(targ) + targ.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
