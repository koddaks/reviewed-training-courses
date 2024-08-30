import CustomBreadcrumbs from '@/components/custom-breadcrumbs';
import Footer from '@/components/footer';
import Header from '@/components/header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="pt-28 pb-20 bg-gray-100 flex-grow">
        <div className='container mb-6'>
          <CustomBreadcrumbs />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
