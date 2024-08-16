import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchImages, { Image } from "./components/unsplash-api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

export default function App() {
  const [photos, setPhotos] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Image | null>(null);

  const handleSearch = async (newImg: string): void => {
    if (!newImg.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    setPhotos([]);
    setImages(newImg);
    setPage(1);
  };

  const openModal = (image: Image): void => {
    setModalData(image);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image: Image) => {
    openModal(image);
  };

  useEffect(() => {
    if (images.trim() === "") {
      return;
    }

    async function getPhotos() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(images, page);
        setTotalPages(data.total_pages);
        setPhotos((prevPhotos: Image[]) => [...prevPhotos, ...data.results]);
      } catch {
        setError(true);
        toast.error("Failed to fetch images. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    getPhotos();
  }, [page, images]);

  const noMorePhotos = photos.length > 0 && page >= totalPages;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery items={photos} onImageClick={handleImageClick} />
      )}
      {photos.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} hasMore={!noMorePhotos} />
      )}
      {noMorePhotos && <p>THIS IS THE END! RUN FOOLS</p>}

      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          data={modalData}
        />
      )}
    </div>
  );
}
