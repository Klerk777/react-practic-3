import { useState, useEffect } from 'react';
import { searchByName } from '../api/cocktail-service';
import { useSearchParams } from 'react-router-dom';
export const useSearchCocktails = () => {
  const [cocktails, setCoctails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useSearchParams();
  const query = url.get('query');
  const formSubmit = value => {
    setUrl({ query: value });
  };
  console.log(query, 'query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const searchCoctails = async () => {
      try {
        setIsLoading(true);
        const { drinks } = await searchByName(query);
        console.log('result search :>> ', drinks);
        // const transformResult = result.map(coctails => coctails.drinks[0]);
        // console.log('transformResult :>> ', transformResult);
        // setCoctails(transformResult);
        setCoctails(drinks);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    searchCoctails();
  }, [query]);
  return { cocktails, isLoading, error, formSubmit };
};
