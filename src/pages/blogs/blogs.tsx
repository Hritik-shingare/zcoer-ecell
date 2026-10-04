import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContentLayout } from '../../components/content-layout/ContentLayout';
import { articles, type ArticleItem } from '../../data/siteContent';
import './blogs.css';

const filters = ['All', ...new Set(articles.map((article) => article.category))];

function BlogCard({ article }: { article: ArticleItem }) {
  const [hovered, setHovered] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const images = article.images && article.images.length > 1 ? article.images : null;

  useEffect(() => {
    if (!hovered || !images) {
      setActiveImgIdx(0);
      return;
    }
    const timer = setInterval(() => {
      setActiveImgIdx((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [hovered, images]);

  return (
    <article
      className="catalog-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="catalog-card__media" style={{ position: 'relative' }}>
        {images ? (
          images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={i === 0 ? article.title : ''}
              loading={i === 0 ? 'eager' : 'lazy'}
              width="640"
              height="400"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: i === activeImgIdx ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out',
              }}
            />
          ))
        ) : (
          <img src={article.image} alt={article.title} loading="lazy" width="640" height="400" />
        )}
      </div>
      <div className="catalog-card__body">
        <p className="catalog-card__meta">{article.category}</p>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <div className="catalog-card__footer">
          <span className="article-read-time">{article.readTime}</span>
          <Link to={`/blogs/${article.id}`} className="content-button--ghost">
            Read article
          </Link>
        </div>
      </div>
    </article>
  );
}

export function BlogsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleArticles =
    activeFilter === 'All'
      ? articles
      : articles.filter((article) => article.category === activeFilter);

  return (
    <ContentLayout
      eyebrow="Ideas worth sharing"
      title="Stories from the ecosystem"
      description="Field notes, founder lessons, and practical perspectives for students who want to understand how ideas become durable ventures."
    >
      <div className="filter-row" aria-label="Filter articles">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="filter-button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="catalog-grid">
        {visibleArticles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </ContentLayout>
  );
}

export default BlogsPage;
