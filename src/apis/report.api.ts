import axiosInstance from '@/lib/axios';
import { DashboardType, StatisticsType, TopScoresGroupAType } from '@/models/report.model';

const reportApi = {
  getReportStatistics: () => {
    return axiosInstance.get<StatisticsType>(`/reports/statistics`);
  },
  getTopGroupA: () => {
    return axiosInstance.get<TopScoresGroupAType>(`/reports/top-group-a`);
  },

  getDashboard: () => {
    return axiosInstance.get<DashboardType>(`/reports/dashboard`);
  },
};

export default reportApi;
