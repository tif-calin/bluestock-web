import { text2gradient } from './utils';

const filterPaper = obj => {
  return obj;
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
