import { Link, Navigate, useParams } from 'react-router-dom';
import { ContentLayout } from '../../components/content-layout/ContentLayout';
import { articles } from '../../data/siteContent';
import './article.css';

export function ArticlePage() {
  const { articleId } = useParams();
  const article = articles.find((item) => item.id === articleId);
  if (!article) return <Navigate to="/blogs" replace />;

  return (
    <ContentLayout
      className="article-page-layout"
      eyebrow={`${article.category} | ${article.readTime}`}
      title={article.title}
      description={article.description}
      action={<Link to="/blogs" className="content-button--ghost">All articles</Link>}
    >
      <article className="article-detail content-panel">
        <div className="article-hero-media">
          <img src={article.image} alt={article.title} width="960" height="600" />
        </div>
        <div className="article-detail__body">
          {article.sections && article.sections.length > 0 ? (
            article.sections.map((section, idx) => (
              <section key={idx} className="article-section">
                {section.heading && <h2>{section.heading}</h2>}
                <p>{section.text}</p>
                {section.quote && (
                  <blockquote className="article-quote">
                    {section.quote}
                  </blockquote>
                )}
                {section.image && (
                  <figure className="article-figure">
                    <img
                      src={section.image}
                      alt={section.imageCaption || section.heading || ''}
                      loading="lazy"
                    />
                    {section.imageCaption && (
                      <figcaption>{section.imageCaption}</figcaption>
                    )}
                  </figure>
                )}
              </section>
            ))
          ) : (
            article.body.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
          )}
        </div>
      </article>
    </ContentLayout>
  );
}

export default ArticlePage;
