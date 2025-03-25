
import React, { useState } from 'react';
import { Users, PlusCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import TeamMember from '@/components/team/TeamMember';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Product Owner',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    availability: 90,
    skills: ['Strategy', 'Product', 'Management']
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Scrum Master',
    email: 'jane.smith@example.com',
    phone: '(555) 987-6543',
    availability: 85,
    skills: ['Agile', 'Facilitation', 'Coaching']
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Lead Developer',
    email: 'mike.johnson@example.com',
    phone: '(555) 456-7890',
    availability: 70,
    skills: ['React', 'Node.js', 'TypeScript']
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'UI/UX Designer',
    email: 'sarah.williams@example.com',
    phone: '(555) 234-5678',
    availability: 80,
    skills: ['Figma', 'UI/UX', 'Prototyping']
  },
  {
    id: 5,
    name: 'Alex Wong',
    role: 'Backend Developer',
    email: 'alex.wong@example.com',
    phone: '(555) 876-5432',
    availability: 40,
    skills: ['Python', 'Django', 'PostgreSQL']
  },
  {
    id: 6,
    name: 'Emily Chen',
    role: 'QA Engineer',
    email: 'emily.chen@example.com',
    phone: '(555) 345-6789',
    availability: 95,
    skills: ['Testing', 'Automation', 'QA']
  }
];

const Team = () => {
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
                <Users className="h-6 w-6 text-primary" />
                Team
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage your team members and their skills
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" />
                Add Member
              </Button>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search team members..." 
                className="pl-9"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map(member => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Team;
