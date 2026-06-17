import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { ArrowLeft, Calendar, User } from "lucide-react";
import moment from "moment";
import ReactMarkdown from "react-markdown";

export default function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.NewsArticle.filter({ id })
      .then((res) => setArticle(res[0] || null))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground font-body">Article not found.</p>
        <Link to="/news" className="text-sm font-body text-accent hover:underline flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>
      </div>
    );
  }

  const date = article.publish_date
    ? moment(article.publish_date).format("MMMM D, YYYY")
    : moment(article.created_date).format("MMMM D, YYYY");

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/news" className="inline-flex items-center gap-1.5 text-xs font-body text-primary-foreground/60 hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to News
          </Link>
          {article.category && (
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-wider text-accent mb-3">
              {article.category}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-sm font-body text-primary-foreground/50">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {date}</span>
            {article.author_name && <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {article.author_name}</span>}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.image_url && (
            <div className="mb-10 rounded-lg overflow-hidden">
              <img src={article.image_url} alt={article.title} className="w-full h-auto" />
            </div>
          )}
          <div className="prose prose-lg max-w-none font-body text-foreground/80">
            {article.body ? (
              <ReactMarkdown>{article.body}</ReactMarkdown>
            ) : (
              <p className="text-lg leading-relaxed">{article.summary}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
