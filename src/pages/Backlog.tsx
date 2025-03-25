
import React, { useState } from 'react';
import { ListTodo, PlusCircle, Search, Filter, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import BacklogItem from '@/components/backlog/BacklogItem';
import { cn } from '@/lib/utils';

const backlogItems = [
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
  },
  {
    id: 3,
    title: 'Add Export to PDF Functionality',
    description: 'Users should be able to export reports as PDF files. Implement using a PDF generation library.',
    priority: 'low' as const,
    type: 'feature' as const,
    storyPoints: 5,
    assignee: {
      name: 'Mike Johnson',
      initials: 'MJ'
    }
  },
  {
    id: 4,
    title: 'Improve Error Handling',
    description: 'Implement better error handling throughout the application with user-friendly error messages.',
    priority: 'medium' as const,
    type: 'task' as const,
    storyPoints: 3
  },
  {
    id: 5,
    title: 'Add Data Visualization Dashboard',
    description: 'Create a new dashboard with charts and graphs to visualize project metrics and KPIs.',
    priority: 'high' as const,
    type: 'feature' as const,
    storyPoints: 13
  },
  {
    id: 6,
    title: 'Fix Authentication Timeout Issue',
    description: 'Users are being logged out too quickly. Adjust token expiration time and add refresh token functionality.',
    priority: 'high' as const,
    type: 'bug' as const,
    storyPoints: 5,
    assignee: {
      name: 'Alex Wong',
      initials: 'AW'
    }
  },
];

const Backlog = () => {
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
                <ListTodo className="h-6 w-6 text-primary" />
                Backlog
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage and prioritize your product backlog
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" />
                Add Item
              </Button>
            </div>
          </div>
          
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="relative sm:col-span-5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search backlog..." 
                className="pl-9"
              />
            </div>
            
            <div className="sm:col-span-3">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="feature">Feature</SelectItem>
                  <SelectItem value="bug">Bug</SelectItem>
                  <SelectItem value="task">Task</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="sm:col-span-3">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Priorities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button variant="outline" className="gap-2 sm:col-span-1">
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backlogItems.map(item => (
              <BacklogItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Backlog;
