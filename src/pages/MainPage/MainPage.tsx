import { useState, useEffect } from 'react';
import { HeroImage } from 'components/HeroImage/HeroImage';
import { HeroFinder } from 'components/HerosFinder/HeroFinder';
import { fetchAllCharacters } from 'api';
import { CharactersList } from 'components/HeroList/HeroList';
import { Container, BackLink, BackText, UserName } from './MainPage.styled';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { UserAuth } from 'context/AuthContext';
import { IHero } from 'types/heroTypes';

const MainPage: React.FC = () => {
  const [characters, setCharacters] = useState<IHero[]>([]);
  const [filteredCharacters, setFilteredCharacters] =
    useState<IHero[]>(characters);
  const [query, setQuery] = useState<string>(
    localStorage.getItem('query') || ''
  );
  const { user, logOut } = UserAuth();

  useEffect(() => {
    async function getAllCharacters() {
      try {
        const data = await fetchAllCharacters();
        const sortedData = data.sort((a: IHero, b: IHero) =>
          a.name.localeCompare(b.name)
        );
        setCharacters(sortedData);
      } catch (error) {
        console.log(error);
      }
    }

    getAllCharacters();
  }, []);

  useEffect(() => {
    const filtered = characters.filter(char =>
      char.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCharacters(filtered);
    localStorage.setItem('query', query);
  }, [characters, query]);

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
    </Container>
  );
};
export default MainPage;
