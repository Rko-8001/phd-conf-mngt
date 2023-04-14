import { useState } from "react";

const UploadImage = () => {
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-medium mb-4">Upload an Image</h2>
        <div className="flex justify-center">
          <label
            className="cursor-pointer bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md"
            htmlFor="file"
          >
            Choose a file
          </label>
          <input
            type="file"
            className="hidden"
            id="file"
            onChange={handleImageChange}
          />
        </div>
        {image && (
          <div className="mt-4">
            <img src={image} alt="Uploaded Image" className="rounded-md" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImage;