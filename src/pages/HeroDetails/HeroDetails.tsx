import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { fetchOneCharacters } from 'api';
import {
  Container,
  BackLink,
  BackText,
  Wrap,
  Image,
  Name,
  Info,
  InfoList,
  InfoItem,
  InfoTitle,
  InfoText,
} from './HeroDetails.styled';
import { IHero } from 'types/heroDetailsType';
import { ILocation } from 'types/locationType';

const HeroDetails: React.FC = () => {
  const [character, setCharacter] = useState<IHero | null>(null);
  const { heroId } = useParams<string>();
  const location: ILocation = useLocation();
  const id = heroId ? heroId : '';

  useEffect(() => {
    async function getOneCharacters() {
      try {
        const data = await fetchOneCharacters(id);
        setCharacter(data);
      } catch (error) {
        console.log(error);
      }
    }

    getOneCharacters();
  }, [id]);

  if (!character) {
    return null;
  }

  const { image, name, status, species, gender, type, origin } = character;

  return (
    <Container>
      <BackLink to={location.state?.from ?? '/main'}>
        <BiLeftArrowAlt size="32" color="#000000" />
        <BackText>GO BACK</BackText>
      </BackLink>
      <Wrap>
        <Image src={image} alt="hero" />
        <Name>{name}</Name>
        <Info>Informations</Info>
        <InfoList>
          <InfoItem>
            <InfoTitle>Gender</InfoTitle>
            <InfoText>{gender}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Status</InfoTitle>
            <InfoText>{status}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Specie</InfoTitle>
            <InfoText>{species}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Origin</InfoTitle>
            <InfoText>{origin.name}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>Type</InfoTitle>
            <InfoText>{type ? type : 'Unknown'}</InfoText>
          </InfoItem>
        </InfoList>
      </Wrap>
    </Container>
  );
};

export default HeroDetails;
