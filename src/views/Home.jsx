import { useState, useEffect } from 'react';
import { CocktailsList } from '../components/CocktailsList';
import { Section } from '../components/Section';
import { Loader } from '../components/Loader';
import { number } from 'prop-types';
import { useGetCocktails } from '../hooks/useGetCocktails';

export const Home = () => {
  const { cocktails, isLoading, error } = useGetCocktails();

  return (
    <>
      {isLoading && <Loader />}
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        {cocktails.length > 0 && <CocktailsList cocktails={cocktails} />}
      </Section>
    </>
  );
};
