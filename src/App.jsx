import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./components/photos-api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState("");

  const handleSearch = async (newImg) => {
    if (!newImg.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    setPhotos([]);
    setImages(newImg);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!images) return;

    async function getPhotos() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(images, page);
        setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      } catch (error) {
        setError(true);
        toast.error("Failed to fetch images. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    getPhotos();
  }, [page, images]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery items={photos} />}
      {photos.length > 0 && !loading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
}
