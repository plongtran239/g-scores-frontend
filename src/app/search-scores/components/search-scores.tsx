'use client';

import { useState } from 'react';

import DetailedScores from '@/app/search-scores/components/detailed-scores-card';
import SearchCard from '@/app/search-scores/components/search-card';

const SearchScores = () => {
  const [regNum, setRegNum] = useState<number | null>(null);

  return (
    <main className="p-4 space-y-4">
      <SearchCard setRegNum={setRegNum} />
      <DetailedScores regNum={regNum} />
    </main>
  );
};
export default SearchScores;
