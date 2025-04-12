import { Metadata } from 'next';

import SearchScores from '@/app/search-scores/components/search-scores';

export const metadata: Metadata = {
  title: 'Search Scores | G-Scores',
  description: 'Search scores for G-Scores',
};

const SearchScoresPage = () => {
  return <SearchScores />;
};
export default SearchScoresPage;
