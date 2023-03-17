import { Link } from 'react-router-dom';
import { List, Card, Image, Wrap, Name, Text } from './HeroList.styled';

export const CharactersList = ({ characters }) => {
  return (
    <>
      <List>
        {characters.map(char => {
          return (
            <Link to={`/${char.id}`} key={char.id}>
              <Card>
                <Image src={char.image} alt="heroimage" />
                <Wrap>
                  <Name>{char.name}</Name>
                  <Text>{char.species}</Text>
                </Wrap>
              </Card>
            </Link>
          );
        })}
      </List>
    </>
  );
};
