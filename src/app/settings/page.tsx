import { Metadata } from 'next';

import ThemeToggle from '@/app/settings/components/theme-toggle';

export const metadata: Metadata = {
  title: 'Settings | G-Scores',
  description: 'Settings for G-Scores',
};

const SettingsPage = () => {
  return (
    <div className="p-4">
      <ThemeToggle />
    </div>
  );
};
export default SettingsPage;
