import { text2gradient } from './utils';

const filterPaper = obj => {
  const { genre, year } = obj;
  if (genre !== 'journal-article') return false;
  if (year < 2021) return false;
  return true;
};

const mungePaper = obj => ({
  doi: obj.doi,
  title: obj.title,
  year: obj.year,
  oa_status: obj.oa_status,
  journal: obj.journal_name,
  journal_issn: obj.journal_issn_l,
  url: obj.best_oa_location ? obj.best_oa_location.url : obj.doi_url,
  published_date: obj.published_date,
  journal_gradient: text2gradient(obj.journal_name)
});

export { mungePaper, filterPaper };
