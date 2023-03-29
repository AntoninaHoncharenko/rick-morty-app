interface IProps {
  toNextPage: () => void;
  toPrevPage: () => void;
  toStart: () => void;
  toEnd: () => void;
  page: number;
  totalPages: number;
}

export const Pagination: React.FC<IProps> = ({
  toStart,
  toPrevPage,
  toNextPage,
  toEnd,
  page,
  totalPages,
}) => {
  return (
    <div>
      <button onClick={toStart} disabled={page === 1 ? true : false}>
        Start
      </button>
      <button onClick={toPrevPage} disabled={page > 1 ? false : true}>
        Prev page
      </button>
      <p>{page}</p>
      <button
        onClick={toNextPage}
        disabled={page === totalPages ? true : false}
      >
        Next page
      </button>
      <button onClick={toEnd} disabled={page === totalPages ? true : false}>
        End
      </button>
    </div>
  );
};
