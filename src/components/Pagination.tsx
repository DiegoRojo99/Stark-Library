import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  
  const getPageNumbers = () => {
    const range: number[] = [];
    const numVisiblePages = 5;
    let start = Math.max(currentPage - Math.floor(numVisiblePages / 2), 1);
    let end = Math.min(currentPage + Math.floor(numVisiblePages / 2), totalPages);

    // Ensure that we have enough pages before and after the current page
    if (end - start < numVisiblePages - 1) {
      if (start === 1) {
        end = Math.min(start + numVisiblePages - 1, totalPages);
      } else {
        start = Math.max(end - numVisiblePages + 1, 1);
      }
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center space-x-2 mt-8 mb-6">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-gray-300 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &lt;
      </button>

      {/* First Page */}
      {currentPage > 3 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-4 py-2 border border-gray-300 rounded-md text-white hover:bg-gray-200 hover:text-black"
          >
            1
          </button>
          <span className="px-4 py-2 text-white">...</span>
        </>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border border-gray-300 rounded-md text-white hover:bg-gray-200 hover:text-black ${
            page === currentPage ? 'bg-blue-500 text-white' : ''
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {currentPage < totalPages - 2 && (
        <>
          <span className="px-4 py-2 text-white">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-4 py-2 border border-gray-300 rounded-md text-white hover:bg-gray-200 hover:text-black"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-gray-300 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;