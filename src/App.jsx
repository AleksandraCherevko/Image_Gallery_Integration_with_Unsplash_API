import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";

export default function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/?client_id=TgV7Rjx9nQy8gYwV2R-zQNBEqZQ5_WsKUf2gYVYlhxs"
        );
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    getPhotos();
  }, []);

  return (
    <div>
      <h1>Search me</h1>
      {photos.length > 0 && <ImageGallery items={photos} />}
    </div>
  );
}
