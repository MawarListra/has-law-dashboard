/**
 * Tutorial by "Shubham Khatri"
 * https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
 */

import React from "react";

import KeyboardArrowLeftIcon from "@/components/ui/Icons/keyboard-arrow-left-icon";
import KeyboardArrowRightIcon from "@/components/ui/Icons/keyboard-arrow-right-icon";

import { DOTS, usePagination } from "./hooks/use-pagination";

import type { PaginationUiType } from "./types";

interface PaginationProps extends PaginationUiType {
  onPageChange: (page: number) => any;
}

function Pagination({ page, totalPage, onPageChange }: PaginationProps) {
  const paginationRange = usePagination({
    page,
    totalPage,
  })!;

  // If there are less than 2 times in pagination range we shall not render the component
  if (page === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(page + 1);
  };

  const onPrevious = () => {
    onPageChange(page - 1);
  };

  let lastPage = paginationRange?.[paginationRange?.length - 1];
  return (
    <div className="flex items-center justify-between text-base">
      <div className="flex flex-1 items-center justify-between">
        <div>
          <ul className="isolate inline-flex -space-x-px">
            {/* Left navigation arrow */}
            <li
              className={`relative inline-flex ${
                page === 1 ? "text-[#f7f8fa]" : "hover:text-ui-blue"
              } items-center rounded-md border border-solid border-ui-blue/0 px-2`}
            >
              <button type="button" onClick={onPrevious} disabled={page === 1}>
                <KeyboardArrowLeftIcon />
                <span className="sr-only">Previous</span>
              </button>
            </li>

            {paginationRange?.map((pageNumber, i) => {
              // If the pageItem is a DOT, render the DOTS unicode character
              if (pageNumber === DOTS) {
                return (
                  <li
                    key={i}
                    className="relative inline-flex items-center rounded-md border border-solid border-ui-blue/0 px-2"
                  >
                    <button type="button" disabled>
                      <span>&hellip;</span>
                    </button>
                  </li>
                );
              }

              // Render our Page Pills
              return (
                <li key={i}>
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-solid border-ui-blue/0 px-2 hover:text-ui-blue disabled:border-ui-blue disabled:text-ui-blue"
                    onClick={() => onPageChange(Number(pageNumber))}
                    disabled={pageNumber === page}
                  >
                    <span>{pageNumber}</span>
                  </button>
                </li>
              );
            })}

            {/*  Right Navigation arrow */}
            <li
              className={`relative inline-flex ${
                page === lastPage ? "text-[#f7f8fa]" : "hover:text-ui-blue"
              } items-center rounded-md border border-solid border-ui-blue/0 px-2`}
            >
              <button
                type="button"
                onClick={onNext}
                disabled={page === lastPage}
              >
                <KeyboardArrowRightIcon />
                <span className="sr-only">Next</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
