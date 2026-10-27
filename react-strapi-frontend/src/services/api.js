import axios from 'axios';

const STRAPI_BASE_URL = 'http://localhost:1337';

const api = axios.create({
  baseURL: `${STRAPI_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getArticles = async () => {
  try {
    const response = await api.get('/articles?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const getArticleBySlug = async (slug) => {
  try {
    const response = await api.get(`/articles?filters[slug][$eq]=${slug}&populate=*`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error);
    throw error;
  }
};

export const getMediaUrl = (url) => {
  if (!url) return 'https://via.placeholder.com/800x400';
  if (url.startsWith('http')) return url;
  return `${STRAPI_BASE_URL}${url}`;
};
