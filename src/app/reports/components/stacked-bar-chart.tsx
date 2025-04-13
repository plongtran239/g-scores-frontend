'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useMediaQuery } from 'usehooks-ts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetReportStatistics } from '@/hooks/use-report';
import { camelToTitle, cn } from '@/lib/utils';

const chartConfig = {
  excellent: {
    label: 'Excellent',
    color: 'oklch(0.488 0.243 264.376)',
  },
  good: {
    label: 'Good',
    color: 'oklch(0.696 0.17 162.48)',
  },
  average: {
    label: 'Average',
    color: 'oklch(0.769 0.188 70.08)',
  },
  poor: {
    label: 'Poor',
    color: 'oklch(0.627 0.265 303.9)',
  },
} satisfies ChartConfig;

export function StackedBarChart() {
  const { data, isLoading, isSuccess } = useGetReportStatistics();

  const isMobile = useMediaQuery('(max-width: 640px)');

  const isTablet = useMediaQuery('(max-width: 1024px)');

  if (isLoading) {
    return (
      <div className="m-4">
        <Skeleton className="h-[540px] w-full rounded-xl" />
      </div>
    );
  }

  if (data && isSuccess) {
    return (
      <Card className="m-4">
        <CardHeader>
          <CardTitle>Student Score Distribution by Subject and Performance Level</CardTitle>
          <CardDescription>High School Exam 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[540px] w-full">
            <BarChart accessibilityLayer data={data.data.subjects}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="subject"
                tickLine={true}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => camelToTitle(value)}
                angle={isMobile ? 90 : isTablet ? 45 : 0}
                textAnchor={isMobile || isTablet ? 'start' : 'middle'}
              />
              <YAxis tickLine={false} tickMargin={10} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend
                content={<ChartLegendContent />}
                className={cn({
                  'pt-20': isTablet,
                  'pt-24': isMobile,
                })}
              />
              <Bar dataKey="poor" stackId="a" fill="var(--color-poor)" radius={[0, 0, 4, 4]} />
              <Bar dataKey="average" stackId="a" fill="var(--color-average)" radius={[0, 0, 0, 0]} />
              <Bar dataKey="good" stackId="a" fill="var(--color-good)" radius={[0, 0, 0, 0]} />
              <Bar dataKey="excellent" stackId="a" fill="var(--color-excellent)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    );
  }
}
