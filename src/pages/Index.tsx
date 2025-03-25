
import React, { useState } from 'react';
import { LayoutDashboard, ChevronRight, PlusCircle, ListTodo, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import DashboardCard from '@/components/dashboard/DashboardCard';
import ProjectOverview from '@/components/dashboard/ProjectOverview';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import SprintCard from '@/components/sprints/SprintCard';
import BacklogItem from '@/components/backlog/BacklogItem';

const activeSprint = {
  id: 1,
  name: 'Sprint 12',
  startDate: 'Apr 10, 2023',
  endDate: 'Apr 24, 2023',
  status: 'active' as const,
  progress: 40,
  totalTasks: 25,
  completedTasks: 10,
  blockedTasks: 3
};

const topBacklogItems = [
  {
    id: 1,
    title: 'Implement User Authentication',
    description: 'Add login, registration, and password reset functionality with JWT tokens',
    priority: 'high' as const,
    type: 'feature' as const,
    storyPoints: 8,
    assignee: {
      name: 'Jane Smith',
      initials: 'JS'
    }
  },
  {
    id: 2,
    title: 'Fix Responsiveness Issues on Dashboard',
    description: 'The dashboard layout breaks on mobile devices. Fix the CSS to ensure proper display on all screen sizes.',
    priority: 'medium' as const,
    type: 'bug' as const,
    storyPoints: 3
  }
];

const Index = () => {
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
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Welcome back! Here's an overview of your projects.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" />
                New Project
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <DashboardCard
              title="Project Overview"
              icon={<LayoutDashboard className="h-5 w-5 text-primary" />}
            >
              <ProjectOverview />
            </DashboardCard>
            
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Active Sprint
                </h2>
                <Button variant="ghost" size="sm" className="text-primary gap-1" asChild>
                  <a href="/sprints">
                    View All <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <SprintCard sprint={activeSprint} />
            </div>
            
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <ListTodo className="h-5 w-5 text-primary" />
                  Top Backlog Items
                </h2>
                <Button variant="ghost" size="sm" className="text-primary gap-1" asChild>
                  <a href="/backlog">
                    View All <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topBacklogItems.map(item => (
                  <BacklogItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
