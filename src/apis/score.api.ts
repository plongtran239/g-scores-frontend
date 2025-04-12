import axiosInstance from '@/lib/axios';
import { ScoreType } from '@/models/score.model';

const scoreApi = {
  getDetailScores: ({ id }: { id: number }) => {
    return axiosInstance.get<ScoreType>(`/scores/${id}`);
  },
};

export default scoreApi;
