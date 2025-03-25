
import React from 'react';
import { MoreHorizontal, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface BacklogItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    type: 'feature' | 'bug' | 'task';
    storyPoints: number;
    assignee?: {
      name: string;
      avatar?: string;
      initials: string;
    };
  };
}

const BacklogItem: React.FC<BacklogItemProps> = ({ item }) => {
  const priorityColors = {
    high: "text-red-500 border-red-200 bg-red-50 dark:bg-red-500/10 dark:border-red-500/20",
    medium: "text-amber-500 border-amber-200 bg-amber-50 dark:bg-amber-500/10 dark:border-amber-500/20",
    low: "text-green-500 border-green-200 bg-green-50 dark:bg-green-500/10 dark:border-green-500/20"
  };
  
  const typeColors = {
    feature: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
    bug: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300",
    task: "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300"
  };
  
  const priorityLabels = {
    high: "High",
    medium: "Medium",
    low: "Low"
  };
  
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden card-hover animate-scale-in">
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-base font-medium">{item.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Add to Sprint</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className={cn(typeColors[item.type])}>
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </Badge>
          <Badge variant="outline" className={cn(priorityColors[item.priority])}>
            {priorityLabels[item.priority]} Priority
          </Badge>
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <div className="bg-muted rounded-full px-2.5 py-1 text-xs font-medium flex items-center gap-1">
            <span>{item.storyPoints}</span>
            <span className="text-muted-foreground">points</span>
          </div>
          
          {item.assignee ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Assigned to</span>
              <Avatar className="h-6 w-6">
                <AvatarImage src={item.assignee?.avatar} />
                <AvatarFallback className="text-xs">{item.assignee?.initials}</AvatarFallback>
              </Avatar>
            </div>
          ) : (
            <Button variant="ghost" size="sm" className="text-xs h-7 px-2">
              Assign
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BacklogItem;
