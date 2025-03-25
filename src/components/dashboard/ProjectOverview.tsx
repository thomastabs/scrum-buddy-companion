
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, Circle, Clock, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const sprintData = [
  { name: 'Sprint 9', completed: 20, remaining: 4 },
  { name: 'Sprint 10', completed: 25, remaining: 3 },
  { name: 'Sprint 11', completed: 18, remaining: 5 },
  { name: 'Sprint 12', completed: 10, remaining: 15 },
];

const TaskStatusCard = ({ title, count, icon, className }: any) => (
  <div className={cn("flex flex-col gap-2 rounded-lg p-4", className)}>
    <div className="flex justify-between items-start">
      <span className="text-sm font-medium text-muted-foreground">{title}</span>
      <span className="text-2xl font-semibold">{count}</span>
    </div>
    <div className="mt-auto">{icon}</div>
  </div>
);

const ProjectOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Project Progress</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span>Current Sprint (Sprint 12)</span>
              <span className="font-medium">40%</span>
            </div>
            <Progress value={40} className="h-2" />
            
            <div className="flex justify-between items-center text-sm">
              <span>Overall Project</span>
              <span className="font-medium">73%</span>
            </div>
            <Progress value={73} className="h-2" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Task Status</h3>
          <div className="grid grid-cols-2 gap-3">
            <TaskStatusCard 
              title="Completed" 
              count="24" 
              icon={<CheckCircle2 className="h-5 w-5 text-green-500" />}
              className="bg-green-50 dark:bg-green-500/10"
            />
            <TaskStatusCard 
              title="In Progress" 
              count="12" 
              icon={<Clock className="h-5 w-5 text-amber-500" />}
              className="bg-amber-50 dark:bg-amber-500/10"
            />
            <TaskStatusCard 
              title="To Do" 
              count="18" 
              icon={<Circle className="h-5 w-5 text-blue-500" />}
              className="bg-blue-50 dark:bg-blue-500/10"
            />
            <TaskStatusCard 
              title="Blocked" 
              count="3" 
              icon={<AlertCircle className="h-5 w-5 text-red-500" />}
              className="bg-red-50 dark:bg-red-500/10"
            />
          </div>
        </div>
      </div>
      
      <div className="h-full flex flex-col">
        <h3 className="text-lg font-medium mb-3">Sprint Velocity</h3>
        <div className="flex-1 min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sprintData}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                }}
              />
              <Bar dataKey="completed" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="remaining" fill="#93c5fd" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
