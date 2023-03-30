import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from 'react-icons/md';

import { Wrap, Currentpage, Button } from './Pagination.styled';

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
    <Wrap>
      <Button onClick={toStart} disabled={page === 1 ? true : false}>
        <MdKeyboardDoubleArrowLeft size="36" />
      </Button>
      <Button onClick={toPrevPage} disabled={page > 1 ? false : true}>
        <MdKeyboardArrowLeft size="36" />
      </Button>
      <Currentpage>{page}</Currentpage>
      <Button
        onClick={toNextPage}
        disabled={page === totalPages ? true : false}
      >
        <MdKeyboardArrowRight size="36" />
      </Button>
      <Button onClick={toEnd} disabled={page === totalPages ? true : false}>
        <MdKeyboardDoubleArrowRight size="36" />
      </Button>
    </Wrap>
  );
};
