export const checkInput = (input) => {
  let t = input.type.split("/").pop().toLowerCase();
  if (
    t !== "jpeg" &&
    t !== "jpg" &&
    t !== "png" &&
    t !== "bmp" &&
    t !== "gif"
  ) {
    return false;
  }
  return true;
};
