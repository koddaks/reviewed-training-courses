'use client';

import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CustomBreadcrumbs = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }


  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  if (pathNames.length === 0) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/`}>Main Page</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathNames.map((pathName, index) => (
          <BreadcrumbItem key={index}>
            {index === pathNames.length - 1 ? (
              <BreadcrumbPage>{pathName}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink asChild>
                <Link href={`/${pathName}`}>{pathName}</Link>
              </BreadcrumbLink>
            )}
            {index !== pathNames.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;
