import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';

import Image from 'next/image';
import { EllipsisVertical } from 'lucide-react';

type UserNavProps = {
  onClick: () => void;
};

const UserNav = ({ onClick }: UserNavProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger  className="flex items-center justify-end gap-1">
        <Button size="icon" variant="ghost" className="w-4 h-4" asChild>
          <EllipsisVertical />
        </Button>
        <Image src="/user-image.png" alt="user" width={40} height={40} />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>Профіль</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Модерація</DropdownMenuItem>
        <DropdownMenuItem>Мої відгуки</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onClick}>
          <LogOut className="w-4 h-4" />
          Вийти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
