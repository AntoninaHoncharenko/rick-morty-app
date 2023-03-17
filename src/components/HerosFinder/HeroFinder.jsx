import { AiOutlineSearch } from 'react-icons/ai';
import { Finder, Wrap } from './HeroFinder.styled';

export const HeroFinder = ({ onChange, query }) => {
  return (
    <>
      <Wrap>
        <AiOutlineSearch size="18" color="rgba(0, 0, 0, 0.54)" />
        <Finder
          type="text"
          placeholder="Filter by name..."
          value={query}
          onChange={onChange}
        />
      </Wrap>
    </>
  );
};
