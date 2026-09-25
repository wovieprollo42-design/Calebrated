import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageUrl, type JsonLd } from '@/lib/seo'

const JSON_LD_ID = 'page-jsonld'

export interface PageMetaOptions {
  title: string
  description: string
  jsonLd?: JsonLd | JsonLd[]
  noindex?: boolean
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function removeMeta(attribute: 'name' | 'property', key: string) {
  document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove()
}

function removeLink(rel: string) {
  document.head.querySelector(`link[rel="${rel}"]`)?.remove()
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function serializeJsonLd(jsonLd: JsonLd | JsonLd[]): string {
  const withContext = (item: JsonLd): JsonLd =>
    '@context' in item ? item : { '@context': 'https://schema.org', ...item }
  const payload = Array.isArray(jsonLd) ? jsonLd.map(withContext) : withContext(jsonLd)
  // A literal "</script>" inside the data would close the tag early; escaping "<" keeps the JSON valid.
  return JSON.stringify(payload).replace(/</g, '\\u003c')
}

export function usePageMeta({ title, description, jsonLd, noindex = false }: PageMetaOptions) {
  const { pathname } = useLocation()
  const jsonLdString = jsonLd ? serializeJsonLd(jsonLd) : null

  useEffect(() => {
    const canonical = pageUrl(pathname)

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)

    // A noindex page (the 404) gets no canonical, so it never points search engines at a URL that does not exist.
    if (noindex) {
      upsertMeta('name', 'robots', 'noindex, follow')
      removeLink('canonical')
    } else {
      removeMeta('name', 'robots')
      upsertLink('canonical', canonical)
    }
  }, [title, description, pathname, noindex])

  useEffect(() => {
    document.getElementById(JSON_LD_ID)?.remove()
    if (!jsonLdString) return

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = JSON_LD_ID
    script.text = jsonLdString
    document.head.appendChild(script)
  }, [jsonLdString])
}
