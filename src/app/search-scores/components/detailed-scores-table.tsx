import { ScoreType } from '@/models/score.model';

const DetailedScoresTable = ({ data }: { data: ScoreType }) => {
  const subjects = [
    ['Math', data.math],
    ['Literature', data.literature],
    ['Foreign Language', data.foreignLanguage],
    ['Physics', data.physics],
    ['Chemistry', data.chemistry],
    ['Biology', data.biology],
    ['History', data.history],
    ['Geography', data.geography],
    ['Civics', data.civics],
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {subjects.map(([name, value]) => (
          <div key={name} className="border rounded p-4 shadow text-center">
            <div className="text-sm text-muted-foreground">{name}</div>
            <div className="text-xl font-semibold">
              {value !== null ? value : <span className="text-muted-foreground italic">--</span>}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-600 italic">
        Foreign Language Code:{' '}
        <span className="font-semibold text-foreground">{data.foreignLanguageCode || 'Not available'}</span>
      </p>
    </>
  );
};
export default DetailedScoresTable;
