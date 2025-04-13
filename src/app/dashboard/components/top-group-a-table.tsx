'use client';

import { ScoreGroupAColumns } from '@/app/dashboard/components/columns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetTopGroupA } from '@/hooks/use-report';

const TopGroupATable = () => {
  const { data, isLoading, isSuccess } = useGetTopGroupA();

  if (isLoading) {
    return <Skeleton className="h-[528px] w-full rounded-xl" />;
  }

  if (data && isSuccess) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Top 10 Students in Group A</CardTitle>
          <CardDescription>The top 10 students in Group A are listed below.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={ScoreGroupAColumns} data={data.data.topScores} />
        </CardContent>
      </Card>
    );
  }
};
export default TopGroupATable;
