import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
  keywords?: string;
  schema?: any | any[];
  noindex?: boolean;
}

const DEFAULT_IMAGE = "/images/home_hero.webp";
const SITE_NAME = "CottonCanvas";
const DEFAULT_ORIGIN = "https://cottoncanvascloths.vercel.app";

function setOrCreateMeta(selector: string, attrName: string, attrValue: string, content: string) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setOrCreateLink(rel: string, href: string) {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
}

export function SEO({
  title,
  description,
  canonical,
  type = 'website',
  image = DEFAULT_IMAGE,
  keywords,
  schema,
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    // 1. Page Title
    document.title = title;

    // 2. Canonical URL calculation
    const origin = typeof window !== 'undefined' && window.location.origin && window.location.origin !== 'null'
      ? window.location.origin
      : DEFAULT_ORIGIN;
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
    
    let canonicalUrl: string;
    if (canonical) {
      canonicalUrl = canonical.startsWith('http') ? canonical : `${origin}${canonical.startsWith('/') ? canonical : `/${canonical}`}`;
    } else {
      canonicalUrl = `${origin}${pathname === '/' ? '' : pathname}`;
    }

    // Strip trailing slash if present (except root domain)
    if (canonicalUrl.endsWith('/') && canonicalUrl.length > origin.length + 1) {
      canonicalUrl = canonicalUrl.slice(0, -1);
    }

    setOrCreateLink('canonical', canonicalUrl);

    // 3. Standard Meta Description, Keywords & Robots
    setOrCreateMeta('meta[name="description"]', 'name', 'description', description);
    
    const pageKeywords = keywords || "organic cotton clothing, sustainable fashion, pure cotton apparel, ethical clothing brand, natural fabric";
    setOrCreateMeta('meta[name="keywords"]', 'name', 'keywords', pageKeywords);

    const robotsContent = noindex 
      ? 'noindex, nofollow' 
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    setOrCreateMeta('meta[name="robots"]', 'name', 'robots', robotsContent);

    // 4. OpenGraph Meta Tags
    setOrCreateMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setOrCreateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setOrCreateMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setOrCreateMeta('meta[property="og:type"]', 'property', 'og:type', type);
    const ogImage = image.startsWith('http') ? image : `${origin}${image.startsWith('/') ? image : `/${image}`}`;
    setOrCreateMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setOrCreateMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    setOrCreateMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

    // 5. Twitter / X Cards
    setOrCreateMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    setOrCreateMeta('meta[name="twitter:site"]', 'name', 'twitter:site', '@cottoncanvas');
  }, [title, description, canonical, type, image, keywords, noindex]);

  useEffect(() => {
    if (!schema) return;

    // Remove old dynamic JSON-LD scripts
    const existingScripts = document.querySelectorAll('script[data-schema="true"]');
    existingScripts.forEach(script => script.remove());

    const schemas = Array.isArray(schema) ? schema : [schema];
    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach(s => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'true');
      script.text = JSON.stringify(s);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    return () => {
      scriptElements.forEach(script => script.remove());
    };
  }, [schema]);

  return null;
}
