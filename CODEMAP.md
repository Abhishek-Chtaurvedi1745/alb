# CODEMAP — Albatroz site (read this first)

Next.js app. Routes in `app/`, UI sections in `section/`, shared UI in `component/`.  
**Rule:** before exploring the repo, use this file. After adding/moving/renaming files or routes, update this map in the same change.

## Layout
| Path | Role |
|------|------|
| `app/` | Routes + `layout.tsx` + `globals.css` |
| `section/` | Page section components + page/service **data** |
| `component/` | Shared UI (nav, footer, forms, book-a-call…) |
| `public/images/` | Static assets (product heroes, service covers…) |
| `data/blogs/` | Blog JSON (`index.json` + `posts/`) |
| `lib/` | Helpers (`blog.js`, `sendEmail.js`, `formSource.js` — page/button lead attribution) |
| `middleware.js` | Next middleware |

## Routes → entry → content/data
| URL | Route file | Main UI / data |
|-----|------------|----------------|
| `/` | `app/page.tsx` | `section/Home/*` |
| `/about` | `app/about/page.js` | — |
| `/ourteam` | `app/ourteam/page.js` | — |
| `/career` | `app/career/page.js` | `section/Career/*` |
| `/contact-us` | `app/contact-us/page.js` | — |
| `/privacy-policy` | `app/privacy-policy/page.js` | — |
| `/blog` (+ slug/category) | `app/blog/**` | `section/Blog/*`, `lib/blog.js`, `data/blogs/` |
| `/project` | `app/project/page.js` | — |
| `/project-portfolio-management` | `app/project-portfolio-management/page.jsx` | `section/ProjectManagement/*` |
| `/enterprise-it-automation` | `app/enterprise-it-automation/page.js` | — |
| `/ai-services-for-enterprise` | `app/ai-services-for-enterprise/page.jsx` | `section/AIServices/*`, `ai-services.css` |
| `/clarity` | `app/clarity/page.js` | `section/Clarity/*` |
| `/clarity/services` | `app/clarity/services/page.jsx` | `clarityServicesData.js` |
| `/clarity/services/[slug]` | `app/clarity/services/[slug]/page.jsx` | `ClarityServiceDetailPage.jsx` + `clarityServicePagesData.js` |
| `/clarity/plugins/[slug]` | `app/clarity/plugins/[slug]/page.jsx` | `PrebuiltPluginPage.jsx` + `prebuiltPluginsData.js` |
| `/rally` | `app/rally/page.jsx` | `RallyPage.jsx` + `rallyPageData.js`, `rally.css` |
| `/rally/services` | `app/rally/services/page.jsx` | `rallyServicesData.js` |
| `/rally/services/[slug]` | `app/rally/services/[slug]/page.jsx` | `RallyServiceDetailPage.jsx` + `rallyServicePagesData.js` |
| `/connectall` | `app/connectall/page.jsx` | `section/ConnectAll/*` |
| `/connectall/services` | `app/connectall/services/page.jsx` | `connectAllServicesData.js` |
| `/connectall/services/[slug]` | `app/connectall/services/[slug]/page.jsx` | `ConnectAllServiceDetailPage.jsx` + `connectAllServicePagesData.js` |
| `/automic-automation` | `app/automic-automation/page.jsx` | `section/Automation/*` (Automic) |
| `/automic-automation/services` (+ `[slug]`) | `app/automic-automation/services/**` | `AutomicServiceDetailPage.jsx` + `automicServicePagesData.js` |
| `/stonebranch` | `app/stonebranch/page.jsx` | `section/Automation/*` (Stonebranch) |
| `/stonebranch/services` (+ `[slug]`) | `app/stonebranch/services/**` | `StonebranchServiceDetailPage.jsx` + `stonebranchServicePagesData.js` |
| API blog | `app/api/blog/route.js` | — |

## `section/` by product
| Folder | Key files |
|--------|-----------|
| `Home/` | Landing blocks: WhatWeDo, HowWeWork, PlatformShowcase, Form, Faq, Blog, testimonials… |
| `Clarity/` | Cards, detail page, plugins; `clarityServicesData`, `clarityServicePagesData`, FAQ/stories/plugins data |
| `Rally/` | Product page + service cards/detail; `rallyPageData`, `rallyServicesData`, `rallyServicePagesData` |
| `ConnectAll/` | Product + services; `connectAllData`, `connectAllServicesData`, `connectAllServicePagesData` |
| `Automation/` | Shared Automic + Stonebranch UI; `*ServicesData`, `*ServicePagesData`, FAQ/functionalities/stories |
| `AIServices/` | `AIServicesPage.jsx` + `aiServicesPageData.js` |
| `Blog/` | List/card/content/filter |
| `Career/` | Testimonials + data |
| `ProjectManagement/` | PPM blocks + `ppmBenefitsData.js` |

## Shared `component/`
| Path | Role |
|------|------|
| `Nav/Nav.jsx` | Site nav |
| `Nav/SolutionsMegaMenu.jsx` + `solutionsMenuData.js` | Solutions mega-menu links |
| `Footer/Footer.jsx` | Footer |
| `BookACall/*` | Request-call modal/button/context |
| `FloatingContact/*` | Floating contact actions |
| `Form/*` | Country select, terms checkbox |
| `banner/Banner.jsx`, `common/Banner.jsx` | Banners |
| `Faq/`, `Testimonials/`, `SuccessStories/`, `Media/` | Reusable sections/media |

## Images (service covers)
| Folder under `public/images/` | Used by |
|-------------------------------|---------|
| `clarity-services/` | Clarity service pages |
| `rally-services/` | Rally service pages |
| `connectall-services/` | ConnectALL service pages |
| `automic-services/`, `automic-functionalities/`, `automic/` | Automic |
| `stonebranch/` | Stonebranch |
| `plugins/` | Clarity plugins |
| `blog/`, `career/` | Blog / career |

## Edit cheat-sheet
| Change | Touch |
|--------|-------|
| Nav / mega-menu labels & links | `component/Nav/solutionsMenuData.js` (+ `SolutionsMegaMenu.jsx` if UI) |
| Clarity service list / slugs | `clarityServicesData.js` + `clarityServicePagesData.js` + routes already dynamic |
| Rally service page copy | `rallyServicePagesData.js` |
| ConnectALL service page copy | `connectAllServicePagesData.js` |
| Automic / Stonebranch service copy | `automicServicePagesData.js` / `stonebranchServicePagesData.js` |
| Blog post | `data/blogs/posts/*.json` + `data/blogs/index.json` |
| Global styles | `app/globals.css` |

## Conventions
- Service detail pages: thin `app/.../[slug]/page.jsx` → `*ServiceDetailPage.jsx` + `*ServicePagesData.js`
- Listing cards: `*ServicesData.js` + `*ServiceCard.jsx` / grid
- Brand accent: `#ff403a` on black
