import { AiOutlineSearch } from 'react-icons/ai';
import { Finder, Wrap } from './HeroFinder.styled';

interface IProps {
  onChange: (event: any) => void;
  query: string;
}

export const HeroFinder: React.FC<IProps> = ({ onChange, query }) => {
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
