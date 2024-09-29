import {useState, useEffect, useCallback} from 'react';
import {GetBeerRemoteUseCase} from '../../../domain/useCases/beer/GetBeerRemote';
import {Beer} from '../../../domain/entity/Beer';

export const useGetBeersRemote = () => {
  const [beers, setBeer] = useState<Beer[]>();

  useEffect(() => {
    getBeers();
  }, []);

  const getBeers = async () => {
    const beers = await GetBeerRemoteUseCase();
    setBeer(beers as Beer[]);
  };

  return {
    beers,
    getBeers,
  };
};

export const useBeerList = () => {
  const {beers: fetchedBeers, getBeers} = useGetBeersRemote();
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMalt, setSelectedMalt] = useState('');
  const [maltOptions, setMaltOptions] = useState<string[]>([]);

  const filterBeers = useCallback(() => {
    if (!fetchedBeers) return;

    let filtered = fetchedBeers.filter(beer =>
      beer.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    if (selectedMalt) {
      filtered = filtered.filter(beer =>
        beer.malts.toLowerCase().includes(selectedMalt.toLowerCase()),
      );
    }

    setFilteredBeers(filtered);
  }, [fetchedBeers, searchQuery, selectedMalt]);

  const extractMaltOptions = useCallback((data?: Beer[]) => {
    if (typeof data === 'undefined' || !data || data?.length <= 0) return;

    const options = Array.from(
      new Set(data?.flatMap(beer => beer.malts.split(', '))),
    );
    setMaltOptions(options);
  }, []);

  useEffect(() => {
    if (fetchedBeers) {
      setFilteredBeers(fetchedBeers);
      extractMaltOptions(fetchedBeers);
    }
  }, [fetchedBeers, extractMaltOptions]);

  useEffect(() => {
    filterBeers();
  }, [filterBeers]);

  return {
    beers: fetchedBeers,
    filteredBeers,
    searchQuery,
    setSearchQuery,
    selectedMalt,
    setSelectedMalt,
    maltOptions,
    refreshBeers: getBeers,
  };
};
