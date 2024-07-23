import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./components/photos-api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function getPhotos() {
  //     try {
  //       setLoading(true);
  //       const data = await fetchImages("nature");
  //       setPhotos(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getPhotos();
  // }, []);

  const handleSearch = async (newImg) => {
    try {
      setLoading(true);
      setPhotos([]);
      setError(false);
      const data = await fetchImages(newImg);
      setPhotos(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Search me</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery items={photos} />}
    </div>
  );
}
