const url = "https://api.cloudinary.com/v1_1/ddstzxt7f/image/upload";

export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("cloud_name", "ddstzxt7f");
  formData.append("upload_preset", "my_preset");

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  const imageInfo = {
    public_id: data.public_id,
    url: data.url,
  };

  return imageInfo;
};
