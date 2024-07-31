import Footer from '@/components/footer';
import Header from '@/components/header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Header />
      <main className="pt-40 pb-20">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
