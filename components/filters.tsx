'use client';

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
          <div className="flex gap-2 px-4 py-2  hover:opacity-75">
            <span className="text-black">Filters (3)</span>
            <Image
              src="/icons/filter.svg"
              width={24}
              height={24}
              alt="filter icon"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-0">
          <DialogHeader className="px-4 py-4 pb-2">
            <DialogTitle className="text-3xl">Filter by</DialogTitle>
          </DialogHeader>
          <FiltersForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className='' asChild>
        <div className="flex gap-2 px-4 py-2 hover:opacity-75">
          <Image
            src="/icons/filter.svg"
            width={24}
            height={24}
            alt="filter icon"
          />
          <span>(3)</span>
        </div>
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
