import axiosInstance from '@/lib/axios';
import { StatisticsType, TopScoresGroupAType } from '@/models/report.model';

const reportApi = {
  getReportStatistics: () => {
    return axiosInstance.get<StatisticsType>(`/reports/statistics`);
  },
  getTopGroupA: () => {
    return axiosInstance.get<TopScoresGroupAType[]>(`/reports/top-group-a`);
  },
};

export default reportApi;
