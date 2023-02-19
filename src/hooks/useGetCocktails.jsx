import { useState, useEffect } from 'react';
import { getTrendingCocktails } from '../api/cocktail-service';

export const useGetCocktails = () => {
  const [cocktails, setCoctails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCoctails = async () => {
      try {
        setIsLoading(true);
        const result = await getTrendingCocktails();
        console.log('result :>> ', result);
        const transformResult = result.map(coctails => coctails.drinks[0]);
        console.log('transformResult :>> ', transformResult);
        setCoctails(transformResult);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCoctails();
  }, []);
  return { cocktails, isLoading, error };
};
