/**
 * MIT License
 *
 * Copyright (c) 2025 Qiu Yixiang
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const FullStackReference = [
  {
    name: "Programming Language",
    id: "programming-language",
    subContent: [
      {
        name: "HTML/CSS/JavaScript",
        id: "html-css-javascript-mdn",
        url: "https://developer.mozilla.org/en-US/docs/Web",
        content: "HTML/CSS/JavaScript MDN",
      },
      {
        name: "JavaScript Tutorial",
        id: "modern-javascript-tutorial",
        url: "https://javascript.info/",
        content: "Modern JavaScript Tutorial",
      },
      {
        name: "TypeScript",
        id: "typescript-tutorial",
        url: "https://www.typescriptlang.org/docs/",
        content: "TypeScript Documentation",
      },
      {
        name: "Python",
        id: "python-docs",
        url: "https://docs.python.org/3/library/index.html",
        content: "Python Documentation",
      },
    ],
  },
  {
    name: "Frontend Framework",
    id: "frontend-framework",
    subContent: [
      {
        name: "React",
        id: "react-docs",
        url: "https://react.dev/reference/react",
        content: "React Documentation",
      },
      {
        name: "React Router",
        id: "react-router-docs",
        url: "https://reactrouter.com/home",
        content: "React Router Documentation",
      },
      {
        name: "Redux",
        id: "redux-docs",
        url: "https://redux.js.org/introduction/getting-started",
        content: "Redux Documentation",
      },
      {
        name: "Redux Toolkit",
        id: "redux-toolkit-docs",
        url: "https://redux-toolkit.js.org/introduction/getting-started",
        content: "Redux Toolkit Documentation",
      },
      {
        name: "Next.js",
        id: "nextjs-docs",
        url: "https://nextjs.org/docs",
        content: "Next.js Documentation",
      },
      {
        name: "Vue.js",
        id: "vuejs-docs",
        url: "https://vuejs.org/guide/introduction.html",
        content: "Vue.js Documentation",
      },
    ],
  },
  {
    name: "Static Site Generator",
    id: "static-site-generator",
    subContent: [
      {
        name: "Astro",
        id: "astro-docs",
        url: "https://docs.astro.build/en/getting-started/",
        content: "Astro Documentation",
      },
      {
        name: "Gatsby",
        id: "gatsby-docs",
        url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
        content: "Gatsby Documentation",
      },
    ],
  },
  {
    name: "UI and Component Library",
    id: "ui-and-component-library",
    subContent: [
      {
        name: "Tailwind CSS",
        id: "tailwindcss-docs",
        url: "https://tailwindcss.com/docs/installation/using-vite",
        content: "Tailwind CSS Documentation",
      },
      {
        name: "Shadcn UI",
        id: "shadcn-ui-docs",
        url: "https://ui.shadcn.com/docs/installation",
        content: "Shadcn UI Documentation",
      },
      {
        name: "Ant Design",
        id: "ant-design-docs",
        url: "https://ant.design/components/overview",
        content: "Ant Design Documentation",
      },
      {
        name: "Material UI",
        id: "material-ui-docs",
        url: "https://mui.com/material-ui/getting-started/",
        content: "Material UI Documentation",
      },
      {
        name: "Bootstrap",
        id: "bootstrap-docs",
        url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
        content: "Bootstrap Documentation",
      },
    ],
  },
  {
    name: "Icon Library",
    id: "icon-library",
    subContent: [
      {
        name: "Lucide Icons",
        id: "lucide-icons-docs",
        url: "https://lucide.dev/",
        content: "Lucide Icons Documentation",
      },
      {
        name: "Hero Icons",
        id: "hero-icons-docs",
        url: "https://heroicons.com/",
        content: "Hero Icons Documentation",
      },
      {
        name: "React Icons",
        id: "react-icons-docs",
        url: "https://react-icons.github.io/react-icons/",
        content: "React Icons Documentation",
      },
    ],
  },
  {
    name: "Backend Framework",
    id: "backend-framework",
    subContent: [
      {
        name: "Node.js",
        id: "nodejs-docs",
        url: "https://nodejs.org/docs/latest/api/",
        content: "Node.js Documentation",
      },
      {
        name: "Express.js",
        id: "expressjs-docs",
        url: "https://expressjs.com/en/5x/api.html",
        content: "Express.js API Documentation",
      },
      {
        name: "Django",
        id: "django-docs",
        url: "https://docs.djangoproject.com/en/5.2/",
        content: "Django Documentation",
      },
    ],
  },
  {
    name: "Database",
    id: "database",
    subContent: [
      {
        name: "MongoDB",
        id: "mongodb-docs",
        url: "https://www.mongodb.com/docs/manual/",
        content: "MongoDB Documentation",
      },
      {
        name: "PostgreSQL",
        id: "postgresql-docs",
        url: "https://www.postgresql.org/docs/current/",
        content: "PostgreSQL Documentation",
      },
    ],
  },
  {
    name: "Deployment",
    id: "deployment",
    subContent: [
      {
        name: "render",
        id: "render-docs",
        url: "https://render.com/",
        content: "Render Deployment Service",
      },
      {
        name: "fly.io",
        id: "flyio-docs",
        url: "https://fly.io/",
        content: "Fly.io Deployment Service",
      },
    ],
  },
  {
    name: "Authentication",
    id: "authentication",
    subContent: [
      {
        name: "JWT",
        id: "jwt-docs",
        url: "https://jwt.io/",
        content: "JWT Documentation",
      },
    ],
  },
];

export default FullStackReference;
