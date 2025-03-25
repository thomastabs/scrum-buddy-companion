
import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SprintCardProps {
  sprint: {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    status: 'active' | 'upcoming' | 'completed';
    progress: number;
    totalTasks: number;
    completedTasks: number;
    blockedTasks: number;
  };
}

const SprintCard: React.FC<SprintCardProps> = ({ sprint }) => {
  const statusColors = {
    active: "text-green-500 bg-green-50 dark:bg-green-500/10",
    upcoming: "text-blue-500 bg-blue-50 dark:bg-blue-500/10",
    completed: "text-gray-500 bg-gray-50 dark:bg-gray-500/10"
  };
  
  const statusText = {
    active: "Active",
    upcoming: "Upcoming",
    completed: "Completed"
  };
  
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden card-hover animate-scale-in">
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium">{sprint.name}</h3>
          <span className={cn("px-2.5 py-1 text-xs font-medium rounded-full", statusColors[sprint.status])}>
            {statusText[sprint.status]}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{sprint.startDate} - {sprint.endDate}</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span>Progress</span>
            <span className="font-medium">{sprint.progress}%</span>
          </div>
          <Progress value={sprint.progress} className="h-2" />
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
            <span className="text-muted-foreground">Total</span>
            <span className="font-medium">{sprint.totalTasks}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
            <span className="text-muted-foreground">Done</span>
            <div className="flex items-center">
              <CheckCircle className="h-3.5 w-3.5 mr-1 text-green-500" />
              <span className="font-medium">{sprint.completedTasks}</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
            <span className="text-muted-foreground">Blocked</span>
            <div className="flex items-center">
              <AlertCircle className="h-3.5 w-3.5 mr-1 text-red-500" />
              <span className="font-medium">{sprint.blockedTasks}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-border p-4 flex justify-end">
        <Button variant="outline" size="sm">View Details</Button>
      </div>
    </div>
  );
};

export default SprintCard;
