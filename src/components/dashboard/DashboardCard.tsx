
import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  icon,
  children,
  className,
}) => {
  return (
    <div className={cn(
      "bg-card rounded-xl border border-border overflow-hidden card-hover animate-scale-in", 
      className
    )}>
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="font-medium text-lg flex items-center gap-2">
          {icon && <span>{icon}</span>}
          {title}
        </h3>
      </div>
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;
