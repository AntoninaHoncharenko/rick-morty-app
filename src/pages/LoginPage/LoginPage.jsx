import { HeroImage } from 'components/HeroImage/HeroImage';
import { Container, Button } from './LoginPage.styled';
import { UserAuth } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginPage = () => {
  const { logIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      await logIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== '') {
      navigate('/main', { replace: true });
    }
  }, [user, navigate]);

  return (
    <Container>
      <HeroImage />
      <Button type="button" onClick={handleLogIn}>
        Log in with Google
      </Button>
    </Container>
  );
};

export default LoginPage;
