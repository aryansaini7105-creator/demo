import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  schema?: any | any[];
}

export function SEO({ title, description, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [title, description]);

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
