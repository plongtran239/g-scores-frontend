import reportApi from '@/apis/report.api';
import { useQuery } from '@tanstack/react-query';

export const useGetReportStatistics = () => {
  return useQuery({
    queryKey: ['statistics'],
    queryFn: () => reportApi.getReportStatistics(),
  });
};

export const useGetTopGroupA = () => {
  return useQuery({
    queryKey: ['top-group-a'],
    queryFn: () => reportApi.getTopGroupA(),
  });
};
