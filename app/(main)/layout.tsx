import Footer from '@/components/footer';
import Header from '@/components/header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="pt-28 pb-20 bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
