import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'RmRQetkGdLG3o6Dv0LTcQ9-7Fvi6X1FoTF6Ax_pDsV4',
  fetch: global.fetch,
});

const fetchImageData = async (queryText) => {
  const result = await unsplash.search.getPhotos({
    query: queryText,
    page: 1,
    perPage: 30,
  });
  const index = Math.floor(Math.random() * 30);
  const img = result.response.results[index].links.download;
  const avarageColorCode = result.response.results[index].color;
  return [img, avarageColorCode];
};

export default fetchImageData;
