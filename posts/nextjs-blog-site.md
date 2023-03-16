---
title: "Serverless Blog Site"
subtitle: "next.js(13) lightweight portfolio site with static rendered .md blog pages"
date: "2023-03-11"
tag: "webdev"
lastUpdated: "2023-03-15"
---

### [src/stack]
- https://github.com/shvin/a.shvin.dev
- https://a.shvin.dev
- typescript, next.js, tailwindcss

### Concept
I recently realized that expanding and modifying my [previous](https://ashvincodes-shvin.vercel.app/) portfolio site was complicated and messy despite utilizing reusable project and post components. 

In fact, I had noticed that the way I implemented my previous project component pages was extremely slow despite using static server rendering. With this new site, I wanted the site to be easily updated with my recent developments via Markdown (.md).

### Why Markdown?
The primary benefit to using Markdown is how easy it is to format text via its simple syntax. This makes it ideal and efficient for creating and modifying content easily without the use of extra software while also making it simple for me to import my .md files as blog posts with Metadata features.

### Metadata Features
Although you will not see the heading lines of the actual .md file, there exists a Metadata declaration that I have on every blog post that contains the title, subtitle, and date. By grabbing these details before displaying the post selection, I was able to create sufficient but detailed cards for each blog post while not showing the metadata headers inside the actual post page.

### Tagging System
Using my `getPostMetadata.ts` component, I am able to figure out what to do with all of the blog posts' metadata info. This is where I was able to set the cards to load by most recent date, and integrate the tag system.

By setting 1 or more tags on the post, I am able to create a feature to sort the various posts by desire. Examples would filtering by tag, oldest date, most recent date, etc.. Creating this module into a separate component makes it a lot easier for future development as I am creating the sort by feature.
- ![images/getPostMetadata](/images/getPostMetadata.png)

### Next.js(13) Utilization
- blog posts rendered static for speed
- unique post urls based on `/posts` file name
- global `layout.tsx` for navbar & footer
- `/app` directory instead of `/src`

### Extra Components
The site was styled using [tailwindCSS](https://tailwindcss.com/) and features a few other packages and plugins to create the functionality.

- `@tailwindcss/typography` - frontend markdown viewing
- `gray-matter` - parsing blog post metadata section
- `markdown-to-jsx` - converting blog post content to rendered jsx

### In Development
Some of the features that are currently being developed include:
- [x] displaying blog posts by most recent date
- [ ] Metadata links that show on the blog post's card that points to demo/src
- [x] proper colorscheme management for theme modification
    - ditched and used one universal dark theme
- [x] Metadata tagging system to show posts based on tag
    - tagging completed but now working on sort by feature
- [ ] blog post should show post updated date on post view
    - also only show released date on blog post page if it hasn't been updated at all 
- [ ] simple animations primarily for hovers and transitions

## Getting Started
> create from scratch: [npm](https://nodejs.org/en/download/) with `create-next-app`

Install the Repository
```
git clone github.com/shvin/a.shvin.dev.git
```

Install all necessary packages
```
npm install
```

Setup Localhost Dev Environment
```
npm run dev
```
The default port it loads up on is `localhost:3000`.
