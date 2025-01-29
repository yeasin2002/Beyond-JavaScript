import { Search } from 'lucide-react';
import React from 'react';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui/shadcn';

export const SearchContent = () => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="outline-none">
          <Search className="h-5 w-5" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>Profile</CommandItem>
                <CommandItem>Billing</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
