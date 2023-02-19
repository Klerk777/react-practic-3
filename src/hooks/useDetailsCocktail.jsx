import { useState, useEffect } from 'react';
import { getCocktailDetail } from '../api/cocktail-service';
import { useParams, useSearchParams } from 'react-router-dom';

export const useDetailsCocktail = () => {
  const [cocktail, setCoctail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
const {cocktailId} = useParams()
  useEffect(() => {
  
    const searchCoctail = async () => {
      try {
        setIsLoading(true);
        const  drinks  = await getCocktailDetail(cocktailId);
        console.log('result details :>> ', drinks);
        // const transformResult = result.map(coctails => coctails.drinks[0]);
        // console.log('transformResult :>> ', transformResult);
        // setCoctails(transformResult);
        setCoctail(drinks);
        setSuccess(true)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
        
      }
    };
    searchCoctail();
  }, []);
  return { cocktail, isLoading, error, success };
};
