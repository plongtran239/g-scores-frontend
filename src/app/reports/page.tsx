import { StackedBarChart } from '@/app/reports/components/stacked-bar-chart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reports | G-Scores',
  description: 'Reports for G-Scores',
};

const ReportsPage = () => {
  return <StackedBarChart/>;
};
export default ReportsPage;
