'use client';

import { Loader2 } from 'lucide-react';

import DetailedScoresTable from '@/app/search-scores/components/detailed-scores-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetDetailScores } from '@/hooks/use-score';

const DetailedScores = ({ regNum }: { regNum: number | null }) => {
  const { data, isLoading, isError, isSuccess } = useGetDetailScores({ id: regNum ?? 0 });

  if (!regNum) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Detailed Scores</CardTitle>
          <CardDescription>Detailed scores for the entered registration number</CardDescription>
        </CardHeader>
        <CardContent className="">Detailed view of search scores here!</CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Detailed Scores</CardTitle>
          <CardDescription>Detailed scores for the entered registration number</CardDescription>
        </CardHeader>
        <CardContent className="">
          <Loader2 className="w-4 h-4 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  if (isError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Detailed Scores</CardTitle>
          <CardDescription>Detailed scores for the entered registration number</CardDescription>
        </CardHeader>
        <CardContent className="">
          <p className="text-red-500">Invalid registration number</p>
        </CardContent>
      </Card>
    );
  }

  if (data && isSuccess) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Detailed Scores</CardTitle>
          <CardDescription>Detailed scores for the entered registration number</CardDescription>
        </CardHeader>
        <CardContent>
          <DetailedScoresTable data={data.data} />
        </CardContent>
      </Card>
    );
  }
};
export default DetailedScores;
