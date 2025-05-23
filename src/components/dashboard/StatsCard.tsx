
import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatsCard = ({ 
  title, 
  value, 
  icon, 
  description, 
  trend, 
  className 
}: StatsCardProps) => {
  return (
    <Card className={cn("stats-card", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="h-8 w-8 rounded-md bg-primary/10 p-1.5 text-primary">
            {icon}
          </div>
        </div>
        <div className="mt-2">
          <h3 className="text-2xl font-bold">{value}</h3>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
          {trend && (
            <div className="flex items-center mt-2">
              <span className={
                cn("text-xs font-medium", 
                trend.isPositive ? "text-green-600" : "text-red-600")
              }>
                {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
              </span>
              <span className="ml-1 text-xs text-muted-foreground">vs last week</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
