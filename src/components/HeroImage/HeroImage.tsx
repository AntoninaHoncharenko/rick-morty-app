import image from '../../images/heroimg.png';
import { Image } from './HeroImage.styled';

export const HeroImage: React.FC = () => {
  return <Image src={image} alt="RickAndMotry" />;
};
