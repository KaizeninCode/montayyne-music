import { useState } from "react";
import { songs } from "../constants";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(songs.length / itemsPerPage);

  // Calculate the items to display on the current page
  const startIndex = currentPage - 1 ;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = songs.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div className="pt-16 pb-4">
        <h2 className="font-nunito max-lg:hidden lg:text-7xl text-white text-center">PORTFOLIO</h2>
      </div>
      <div className="flex items-center justify-center" id="section">
        {currentItems.map((song, index) => (
          <iframe
            key={index}
            // className="m-auto"
            src={song.link}
            width="80%"
            height="352px"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        ))}
      </div>
      <div className="flex justify-center py-4">
        <button
          className="bg-transparent border text-white py-2 px-4 mx-2 rounded"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          &#10094;
        </button>
        <button
          className="bg-transparent border text-white py-2 px-4 mx-2 rounded"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          &#10095;
        </button>
      </div>
    </>
  );
};

export default Carousel;
