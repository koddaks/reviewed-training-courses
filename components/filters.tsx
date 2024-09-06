'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import FiltersForm from './filters-form';

const Filters = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Image
            src="/icons/filter.svg"
            width={24}
            height={24}
            alt="filter icon"
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-0">
          <DialogHeader className="px-4 py-4 pb-2">
            <DialogTitle className='text-3xl'>Filter by</DialogTitle>
          </DialogHeader>
          <FiltersForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Image
          src="/icons/filter.svg"
          width={24}
          height={24}
          alt="filter icon"
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Filter by</DrawerTitle>
        </DrawerHeader>
        <FiltersForm />
        <DrawerFooter className="pt-2 flex"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Filters;
