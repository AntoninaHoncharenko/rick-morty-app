import { useState, useEffect } from 'react';
import { HeroImage } from 'components/HeroImage/HeroImage';
import { HeroFinder } from 'components/HerosFinder/HeroFinder';
import { Pagination } from 'components/Pagination/Pagination';
import { fetchAllCharacters, fetchCharactersByName } from 'api';
import { CharactersList } from 'components/HeroList/HeroList';
import { Container, BackLink, BackText, UserName } from './MainPage.styled';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { UserAuth } from 'context/AuthContext';
import { IHero } from 'types/heroTypes';

const MainPage: React.FC = () => {
  // const [characters, setCharacters] = useState<IHero[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<IHero[]>([]);
  const [query, setQuery] = useState<string>(
    localStorage.getItem('query') || ''
  );
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(
    Number(localStorage.getItem('page')) || 1
  );

  const { user, logOut } = UserAuth();

  // useEffect(() => {
  //   async function getAllCharacters() {
  //     try {
  //       const data = await fetchAllCharacters(page);
  //       const sortedData = data.results.sort((a: IHero, b: IHero) =>
  //         a.name.localeCompare(b.name)
  //       );
  //       setCharacters(sortedData);
  //       // setTotalPages(data.info.pages);
  //       // localStorage.setItem('page', page.toString());
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   getAllCharacters();
  // }, [page]);

  useEffect(() => {
    if (localStorage.getItem('query') !== query) {
      setPage(1);
    }

    async function getCharactersByName() {
      try {
        const data = await fetchCharactersByName(query, page);
        const sortedData = data.results.sort((a: IHero, b: IHero) =>
          a.name.localeCompare(b.name)
        );
        setFilteredCharacters(sortedData);
        setTotalPages(data.info.pages);

        localStorage.setItem('query', query);
        localStorage.setItem('page', page.toString());
      } catch (error) {
        console.log(error);
      }
    }

    getCharactersByName();
  }, [query, page]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const toNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const toPrevPage = () => {
    setPage(prevState => prevState - 1);
  };

  const toStart = () => {
    setPage(1);
  };

  const toEnd = () => {
    setPage(totalPages);
  };

  return (
    <Container>
      <BackLink to="/" onClick={handleLogOut}>
        <BiLeftArrowAlt size="32" color="#000000" />
        <BackText>LOG OUT</BackText>
      </BackLink>
      {user && <UserName>Hello, {user}!</UserName>}
      <HeroImage />
      <HeroFinder onChange={onChange} query={query} />
      <CharactersList characters={filteredCharacters} />
      <Pagination
        toNextPage={toNextPage}
        page={page}
        toPrevPage={toPrevPage}
        toStart={toStart}
        toEnd={toEnd}
        totalPages={totalPages}
      />
    </Container>
  );
};
export default MainPage;
