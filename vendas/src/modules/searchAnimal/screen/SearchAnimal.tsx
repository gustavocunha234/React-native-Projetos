import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TextInputChangeEventData,
} from 'react-native';

import { MethodEnum } from '../../../shared/enums/method.enum';
import { ActivityIndicatorButton } from '../../../shared/components/button/Button.style';
import Input from '../../../shared/components/input/input';
import AnimalsThumbnail from '../../../shared/components/animalsThumbnail/AnimalsThumbnail';
import { URL_PRODUCT_PAGE } from '../../../shared/constants/urls';
import { useRequest } from '../../../shared/hooks/useRequest';
import { theme } from '../../../shared/themes/themes';
import { PaginationType } from '../../../shared/types/paginationType';
import { AnimalType } from '../../../shared/types/AnimalType';
import { useAnimalReducer } from '../../../store/reducers/animalReducer/useAnimalReducer';
import { SearchAnimalContainer, SearchAnimalScrollView } from '../styles/searchAnimal.style';

export type SearchAnimalNavigationProp = NativeStackNavigationProp<
  Record<string, SearchAnimalParams>
>;

export interface SearchAnimalParams {
  search?: string;
}

const SearchAnimal = () => {
  const { searchAnimals, setSearchAnimals, insertSearchAnimals } = useAnimalReducer();
  const { params } = useRoute<RouteProp<Record<string, SearchAnimalParams>>>();
  const { request, loading } = useRequest();
  const [value, setValue] = useState(params?.search || '');

  useEffect(() => {
    setValue(params?.search || '');
  }, [params]);

  useEffect(() => {
    setSearchAnimals(undefined);
    request<PaginationType<AnimalType[]>>({
      url: `${URL_PRODUCT_PAGE}?search=${value}`,
      method: MethodEnum.GET,
      saveGlobal: setSearchAnimals,
    });
  }, [value]);

  const findNewPage = () => {
    if (searchAnimals && searchAnimals.meta.currentPage < searchAnimals.meta.totalPages) {
      request<PaginationType<AnimalType[]>>({
        url: `${URL_PRODUCT_PAGE}?search=${value}&page=${searchAnimals.meta.currentPage + 1}`,
        method: MethodEnum.GET,
        saveGlobal: insertSearchAnimals,
      });
    }
  };

  const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(event.nativeEvent.text);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isEndScroll = contentOffset.y >= contentSize.height - layoutMeasurement.height;

    if (isEndScroll && !loading) {
      findNewPage();
    }
  };

  return (
    <SearchAnimalContainer>
      <Input onChange={handleOnChangeInput} value={value} iconRight="search" />
      {searchAnimals && searchAnimals.data && (
        <ScrollView onScroll={handleScroll}>
          <SearchAnimalScrollView>
            {searchAnimals.data.map((animal) => (
              <AnimalsThumbnail animal={animal} />
            ))}
          </SearchAnimalScrollView>
        </ScrollView>
      )}
      {loading && <ActivityIndicatorButton color={theme.colors.mainTheme.primary} />}
    </SearchAnimalContainer>
  );
};

export default SearchAnimal;