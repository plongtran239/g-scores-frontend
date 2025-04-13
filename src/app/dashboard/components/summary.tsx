'use client';

import { BoltIcon, GraduationCapIcon, UsersIcon } from 'lucide-react';

import SummaryCard from '@/app/dashboard/components/summary-card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetDashboard } from '@/hooks/use-report';

const Summary = () => {
  const { data, isLoading, isSuccess } = useGetDashboard();

  if (isLoading) {
    return (
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Skeleton className="h-[146px] w-full rounded-xl" />
        <Skeleton className="h-[146px] w-full rounded-xl" />
        <Skeleton className="h-[146px] w-full rounded-xl" />
      </div>
    );
  }

  if (data && isSuccess) {
    return (
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <SummaryCard title="Total Students" icon={<UsersIcon />} value={data.data.totalStudents} />
        <SummaryCard title="Average Score" icon={<BoltIcon />} value={data.data.averageScore} />
        <SummaryCard title="Excellent Students" icon={<GraduationCapIcon />} value={data.data.excellentStudents} />
      </div>
    );
  }
};
export default Summary;
