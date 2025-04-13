import { Metadata } from 'next';

import Summary from '@/app/dashboard/components/summary';
import TopGroupATable from '@/app/dashboard/components/top-group-a-table';

export const metadata: Metadata = {
  title: 'Dashboard | G-Scores',
  description: 'Dashboard for G-Scores',
};

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <Summary />
      <TopGroupATable />
    </div>
  );
}
