import type { PropsWithChildren, ReactNode } from 'react';
import './ContentLayout.css';

interface ContentLayoutProps extends PropsWithChildren {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}

export function ContentLayout({ eyebrow, title, description, action, className, children }: ContentLayoutProps) {
  return (
    <section className={`content-page${className ? ` ${className}` : ''}`}>
      <div className="content-page__intro">
        <p className="content-page__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="content-page__description">{description}</p>
        {action && <div className="content-page__action">{action}</div>}
      </div>
      {children}
    </section>
  );
}
