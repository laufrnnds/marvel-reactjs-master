/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemAccordionI } from '../../components/DynamicAccordion/DynamicAccordion';

import { marvel } from '../../services';
import { ICharacters } from '../../store/modules/characters/reducer';
import {
  Comics,
  createComic,
  requestComic,
  requestComicError,
} from '../../store/modules/comics/comicsSlice';

const Characters: React.FC = () => {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState<ItemAccordionI[]>([]);

  const charactersRedux: ICharacters = useSelector(
    (state: any) => state.characters
  );

  const comicRedux = useSelector((state: any) => state.comic);

  async function run() {
    const response = await marvel.get('/characters');
    console.log(response);
  }

  async function getCharacters() {
    const result = await marvel.get('/characters');
    console.log(`result${result}`);
  }
  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    dispatch(requestComic());
    marvel
      .get('/comics')
      .then(({ data }) => {
        const res = JSON.parse(data);
        const id = res.data.results.map((dado: any) => dado.id);
        const title = res.data.results.map((dado: any) => dado.title);
        const foto = res.data.results.map((dado: any) => dado.thumbnail.path);

        const comics: Comics[] = [];
        id.forEach((element: any, index: any) => {
          comics.push({
            id: element,
            name: title[index],
            imgPath: foto[index],
          });
        });

        dispatch(createComic(comics));
      })
      .catch((error) => {
        dispatch(requestComicError(error.message));
      });
  }, []);

  run();

  useEffect(() => {
    if (charactersRedux.result.length) {
      const parse: ItemAccordionI[] = charactersRedux.result.map(
        (item: any, index: number) => {
          const temp: ItemAccordionI = {
            id: index,
            text: item,
            title: item,
          };
          return temp;
        }
      );
      setCharacters(parse);
    }
  }, [charactersRedux]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Personagens
        </Typography>
        {comicRedux.loading && <div>Loading...</div>}
        {!comicRedux.loading && comicRedux.error ? (
          <div>Erro: {comicRedux.error} </div>
        ) : null}
        {comicRedux.comics.length > 0 && (
          <Box>
            {comicRedux.comics.map((dado: any) => (
              <div key={dado.id}>
                <Typography variant="h4" color="primary">
                  {dado.name}
                </Typography>
                <img src={`${dado.imgPath}.jpg`} alt="" />
              </div>
            ))}
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Characters;
