
import React from 'react';
import { Mail, Phone, MoreVertical } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    email: string;
    phone: string;
    avatar?: string;
    availability: number;
    skills: string[];
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const availabilityColor = 
    member.availability > 75 ? "bg-green-500" : 
    member.availability > 25 ? "bg-amber-500" : 
    "bg-red-500";
  
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden card-hover animate-scale-in">
      <div className="p-5 flex flex-col items-center text-center">
        <div className="relative">
          <Avatar className="h-20 w-20">
            <AvatarImage src={member.avatar} />
            <AvatarFallback className="text-xl">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-background ${availabilityColor}`}></div>
        </div>
        
        <div className="mt-4 space-y-1">
          <h3 className="font-medium text-lg">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
        
        <div className="mt-4 space-y-2 w-full text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="truncate">{member.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{member.phone}</span>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap justify-center gap-1">
          {member.skills.map((skill, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="border-t border-border p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Availability</span>
          <Badge variant="outline" className={`text-xs ${
            member.availability > 75 ? "text-green-500" : 
            member.availability > 25 ? "text-amber-500" : 
            "text-red-500"
          }`}>
            {member.availability}%
          </Badge>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Assign Tasks</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TeamMember;
