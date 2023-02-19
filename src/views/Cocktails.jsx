import { SearchForm } from '../components/SearchForm';
import { Section } from '../components/Section';
import { CocktailsList } from '../components/CocktailsList';
import { Loader } from '../components/Loader';
import { useSearchCocktails } from '../hooks/useSearchCocktails';
export const Cocktails = () => {
  const { cocktails, isLoading, error, formSubmit } = useSearchCocktails();
  return (
    <>
      {isLoading && <Loader />}
      <Section>
        <SearchForm formSubmit={formSubmit} />
        {cocktails.length > 0 && <CocktailsList cocktails={cocktails} />}
      </Section>
    </>
  );
};
