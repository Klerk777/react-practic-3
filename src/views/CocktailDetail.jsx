import { Section } from '../components/Section';
import { Loader } from '../components/Loader';
import { GoBackBtn } from '../components/GoBackBtn';
import { CocktailInfo } from '../components/CocktailInfo';
import { useLocation } from 'react-router-dom';
import { routes } from '../routes';
import { useDetailsCocktail } from '../hooks/useDetailsCocktail';
export const CocktailDetail = () => {
  const { cocktail, isLoading, error, success } = useDetailsCocktail();
  const location = useLocation();

  const goBack = location?.state?.from ?? routes.HOME;

  return (
    <>
      {isLoading && <Loader />}
      <Section>
        <GoBackBtn path={goBack} />
        {success && <CocktailInfo {...cocktail} />}
      </Section>
    </>
  );
};
