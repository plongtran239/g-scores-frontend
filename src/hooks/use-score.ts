import scoreApi from '@/apis/score.api';
import { useQuery } from '@tanstack/react-query';

export const useGetDetailScores = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: ['scores', id],
    queryFn: () => scoreApi.getDetailScores({ id }),
  });
};
