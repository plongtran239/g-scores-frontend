'use client';

import { useTheme } from 'next-themes';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme</CardTitle>
        <CardDescription>Choose your preferred theme for the application.</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        <Label htmlFor="theme-toggle">Dark Mode</Label>
        <Switch
          id="theme-toggle"
          checked={theme === 'dark'}
          onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </CardContent>
    </Card>
  );
};
export default ThemeToggle;
