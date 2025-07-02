import type { Metadata } from 'next';
import Image from 'next/image';

const ProseDemo = () => (
  <>
    <h1>Styling the Web: A Modern CSS Journey</h1>

    <p>
      CSS has come a long way since its inception. From simple layout tweaks to
      complex responsive designs, it's become an essential tool for crafting
      delightful web experiences. In this article, we’ll explore various HTML
      elements commonly styled with modern CSS utility systems like{' '}
      <code>tailwindcss</code>
      and component libraries.
    </p>

    <h2>Introduction</h2>
    <p>
      Web design today is more accessible than ever. Thanks to utility-first
      frameworks and component-based architectures, developers can build
      beautiful UIs with less effort.
    </p>

    <h3>Key Benefits of Utility CSS</h3>
    <ul>
      <li>Faster development</li>
      <li>Consistent design system</li>
      <li>Better collaboration between dev and design</li>
    </ul>

    <h3>What You Need</h3>
    <ol>
      <li>Basic HTML/CSS knowledge</li>
      <li>Code editor (e.g., VS Code)</li>
      <li>Modern browser for testing</li>
    </ol>

    <h2>Checklist</h2>
    <ul>
      <li>
        <input checked disabled type="checkbox" /> <p>Install Tailwind CSS</p>
      </li>
      <li>
        <input disabled type="checkbox" /> <p>Configure PostCSS</p>
      </li>
      <li>
        <input disabled type="checkbox" /> <p>Create base components</p>
      </li>
    </ul>

    <h2>Sample Image</h2>
    <p>
      Here's a sample image to test image styling. Make sure it scales well on
      all screen sizes.
    </p>
    <center>
      <Image
        alt="Cute kitten"
        height={400}
        src="https://placehold.co/600x400"
        unoptimized
        width={600}
      />
    </center>

    <h2>Code Example</h2>
    <pre>
      <code>{`/* Tailwind example */
.button {
  @apply px-4 py-2 bg-blue-600 text-white rounded;
}`}</code>
    </pre>

    <h2>Blockquote</h2>
    <blockquote>
      "Design is not just what it looks like and feels like. Design is how it
      works." — Steve Jobs
    </blockquote>

    <h2>Table Example</h2>
    <table>
      <thead>
        <tr>
          <th>Framework</th>
          <th>Type</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tailwind CSS</td>
          <td>Utility-First</td>
          <td>70k+</td>
        </tr>
        <tr>
          <td>Bootstrap</td>
          <td>Component-Based</td>
          <td>160k+</td>
        </tr>
        <tr>
          <td>Bulma</td>
          <td>Utility/Component Hybrid</td>
          <td>45k+</td>
        </tr>
      </tbody>
    </table>

    <h2>Inline Elements</h2>
    <p>
      You can <strong>bold</strong> text, <em>italicize</em> it,{' '}
      <u>underline</u> it, or even add <a href="https://example.com">links</a>.
      Here’s some <code>inline code</code> too.
    </p>

    <h2>Definition List</h2>
    <dl>
      <dt>CSS</dt>
      <dd>Cascading Style Sheets</dd>
      <dt>HTML</dt>
      <dd>HyperText Markup Language</dd>
      <dt>JS</dt>
      <dd>JavaScript</dd>
    </dl>

    <h2>Details and Summary</h2>
    <details>
      <summary>Click to expand additional info</summary>
      <p>
        Utility CSS simplifies the process of managing and scaling CSS in large
        projects.
      </p>
    </details>

    <h2>Inline Elements</h2>
    <p>
      You can <strong>bold</strong> text, <em>italicize</em> it,{' '}
      <u>underline</u> it, or even add <a href="https://example.com">links</a>.
      Here’s some <code>inline code</code> too.{' '}
      <mark>Highlight important info</mark> and <small>small text size</small>.{' '}
      <abbr title="HyperText Markup Language">HTML</abbr> is the foundation of
      the web.
    </p>

    <h2>Superscript & Subscript</h2>
    <p>
      E = mc<sup>2</sup> is Einstein's mass-energy equivalence. Water is H
      <sub>2</sub>O.
    </p>

    <h2>Conclusion</h2>
    <p>
      Whether you're using Tailwind, vanilla CSS, or any other system, a solid
      understanding of how HTML elements behave is key to great styling. Test
      extensively to ensure consistent, accessible results across devices.
    </p>
  </>
);

export const metadata: Metadata = {
  title: 'shadcn-prose',
  description:
    'A drop-in replacement for @tailwindcss/typography, designed for use with shadcn/ui. Includes headings, paragraphs, lists and more.',
  openGraph: {
    title: 'shadcn-prose',
    description:
      'A drop-in replacement for @tailwindcss/typography, designed for use with shadcn/ui. Includes headings, paragraphs, lists and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'shadcn-prose',
    creator: '@haydenbleasel',
    description:
      'A drop-in replacement for @tailwindcss/typography, designed for use with shadcn/ui. Includes headings, paragraphs, lists and more.',
  },
};

const ShadcnLogo = () => (
  <svg
    fill="none"
    height={24}
    viewBox="0 0 154 154"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>shadcn logo</title>
    <g clip-path="url(#clip0_2141_29)">
      <path
        d="M124.801 76.8L76.8008 124.8"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="19.2"
      />
      <path
        d="M115.2 24L24 115.2"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="19.2"
      />
    </g>
    <defs>
      <clipPath id="clip0_2141_29">
        <rect fill="white" height="153.6" width="153.6" />
      </clipPath>
    </defs>
  </svg>
);

const GithubIcon = () => (
  <svg
    fill="none"
    height={24}
    viewBox="0 0 1024 1024"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Github</title>
    <path
      clip-rule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      fill="#1B1F23"
      fill-rule="evenodd"
      transform="scale(64)"
    />
  </svg>
);

const Home = () => (
  <div className="grid divide-y border-x lg:grid-cols-3 lg:divide-x lg:divide-y-0">
    <header className="bg-secondary p-12">
      <div className="prose mx-auto">
        <div className="flex items-center justify-between gap-4">
          <ShadcnLogo />
          <a
            href="https://github.com/haydenbleasel/shadcn-prose"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </div>
        <h1 className="mt-8">shadcn-prose</h1>
        <p>
          A drop-in replacement for <code>@tailwindcss/typography</code>,
          designed for use with shadcn/ui. Includes headings, paragraphs, lists
          and more.
        </p>
        <h2>Installation</h2>
        <p>Simply install the package:</p>
        <pre className="!bg-background border">npm i shadcn-prose</pre>
        <p>
          Then update your <code>globals.css</code>:
        </p>
        <pre className="!bg-background border">@import 'shadcn-prose';</pre>
        <h2>Usage</h2>
        <p>
          Add a <code>prose</code> class to your content and you're good to go:
        </p>
        <pre className="!bg-background border">{`<div className="prose">
  <h1>Hello world</h1>
  <p>This is a paragraph</p>
</div>`}</pre>
        <p>On the right is an example of the prose styles in action.</p>
        <p>
          You can opt-out of the styles by adding the <code>not-prose</code>{' '}
          class:
        </p>
        <pre className="!bg-background border">
          {`<div className="prose">
  <h1>Hello world</h1>
  <div className="not-prose">
    <p>This is a paragraph</p>
  </div>
</div>`}
        </pre>
      </div>
    </header>
    <main className="px-12 py-24 lg:col-span-2">
      <div className="prose mx-auto">
        <ProseDemo />
      </div>
    </main>
  </div>
);

export default Home;
