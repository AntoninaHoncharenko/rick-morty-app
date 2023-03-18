import { Link } from 'react-router-dom';
import { List, Card, Image, Wrap, Name, Text } from './HeroList.styled';
import { IHero } from 'types/heroTypes';

interface IProps {
  characters: IHero[];
}

export const CharactersList: React.FC<IProps> = ({ characters }) => {
  return (
    <>
      <List>
        {characters.map(char => {
          const { id, image, name, species } = char;
          return (
            <Link to={`/${id}`} key={id}>
              <Card>
                <Image src={image} alt="heroimage" />
                <Wrap>
                  <Name>{name}</Name>
                  <Text>{species}</Text>
                </Wrap>
              </Card>
            </Link>
          );
        })}
      </List>
    </>
  );
};
