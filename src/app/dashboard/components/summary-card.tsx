import { Card, CardContent } from '@/components/ui/card';

interface IProps {
  title: string;
  icon: React.ReactNode;
  value: number;
}

const SummaryCard = ({ title, icon, value }: IProps) => {
  return (
    <Card>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-medium">{title}</p>
          <div className="bg-secondary flex items-center justify-center rounded-xl w-12 h-12">{icon}</div>
        </div>
        <p className="text-2xl font-bold">{value.toLocaleString()}</p>
      </CardContent>
    </Card>
  );
};
export default SummaryCard;
