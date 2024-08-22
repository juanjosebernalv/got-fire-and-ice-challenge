"use client";
import { IPaginationLinks } from 'app/app/server/house/interfaces';
import Link from 'next/link'
import "./Pagination.scss";

export const Pagination = ({ pagesInfo }: { pagesInfo: IPaginationLinks }) => {
  const getPageNumber = (data: string = '') => {
    const url = new URL(data);
    return url.searchParams.get('page');
  }
  return (
    <div className="pagination__container">
      {pagesInfo.first &&
        <Link className="pagination__button"
          href={`/pages/page`}
          as={`/pages/${getPageNumber(pagesInfo.first)}`}
        >First</Link>}
      {pagesInfo.prev &&
        <Link className="pagination__button"
          href={`/pages/page`}
          as={`/pages/${getPageNumber(pagesInfo.prev)}`}
        >Prev</Link>}
      {pagesInfo.next &&
        <Link className="pagination__button"
          href={`/pages/page`}
          as={`/pages/${getPageNumber(pagesInfo.next)}`}
        >Next</Link>
      }
      {pagesInfo.last &&
        <Link className="pagination__button"
          href={`/pages/page`}
          as={`/pages/${getPageNumber(pagesInfo.last)}`}
        >Last</Link>
      }
    </div>
  );
}
