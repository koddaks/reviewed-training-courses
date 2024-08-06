import { articles } from '@/mock/articles';
import ArticlesItem from './articles-item';


const Articles = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center">Статті</h2>
      <div className="flex flex-col  md:flex-col lg:flex-row justify-between">
        {articles.map((article, index) => (
          <ArticlesItem
            title={article.title}
            link={article.link}
            linkText={article.linkText}
            description={article.description}
            key={index}
            imageSrc="/rectangle-article.png"
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;
