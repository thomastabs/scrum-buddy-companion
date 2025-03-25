
import React, { useState } from 'react';
import { Calendar, PlusCircle, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import SprintCard from '@/components/sprints/SprintCard';
import { cn } from '@/lib/utils';

const sprints = [
  {
    id: 1,
    name: 'Sprint 12',
    startDate: 'Apr 10, 2023',
    endDate: 'Apr 24, 2023',
    status: 'active' as const,
    progress: 40,
    totalTasks: 25,
    completedTasks: 10,
    blockedTasks: 3
  },
  {
    id: 2,
    name: 'Sprint 11',
    startDate: 'Mar 27, 2023',
    endDate: 'Apr 10, 2023',
    status: 'completed' as const,
    progress: 100,
    totalTasks: 20,
    completedTasks: 20,
    blockedTasks: 0
  },
  {
    id: 3,
    name: 'Sprint 10',
    startDate: 'Mar 13, 2023',
    endDate: 'Mar 27, 2023',
    status: 'completed' as const,
    progress: 100,
    totalTasks: 22,
    completedTasks: 22,
    blockedTasks: 0
  },
  {
    id: 4,
    name: 'Sprint 13',
    startDate: 'Apr 24, 2023',
    endDate: 'May 8, 2023',
    status: 'upcoming' as const,
    progress: 0,
    totalTasks: 18,
    completedTasks: 0,
    blockedTasks: 0
  },
];

const Sprints = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <main className={cn(
        "pt-20 pb-16 transition-all duration-300 min-h-screen",
        "lg:pl-64"
      )}>
        <div className="container px-4 mx-auto max-w-7xl animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Sprints
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage and track sprint progress
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" />
                New Sprint
              </Button>
            </div>
          </div>
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search sprints..." 
                className="pl-9"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sprints.map(sprint => (
              <SprintCard key={sprint.id} sprint={sprint} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sprints;
