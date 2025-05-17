import type { Metadata } from 'next';

const ProseDemo = () => (
  <>
    <h1>The Joke Tax Chronicles</h1>
    <p>
      Once upon a time, in a far-off land, there was a very lazy king who spent
      all day lounging on his throne. One day, his advisors came to him with a
      problem: the kingdom was running out of money.
    </p>
    <h2>The King's Plan</h2>
    <p>
      The king thought long and hard, and finally came up with{' '}
      <a href="#">a brilliant plan</a>: he would tax the jokes in the kingdom.
    </p>
    <blockquote>
      "After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege."
    </blockquote>
    <h3>The Joke Tax</h3>
    <p>
      The king's subjects were not amused. They grumbled and complained, but the
      king was firm:
    </p>
    <ul>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
    <p>
      As a result, people stopped telling jokes, and the kingdom fell into a
      gloom. But there was one person who refused to let the king's foolishness
      get him down: a court jester named Jokester.
    </p>
    <h3>Jokester's Revolt</h3>
    <p>
      Jokester began sneaking into the castle in the middle of the night and
      leaving jokes all over the place: under the king's pillow, in his soup,
      even in the royal toilet. The king was furious, but he couldn't seem to
      stop Jokester.
    </p>
    <p>
      And then, one day, the people of the kingdom discovered that the jokes
      left by Jokester were so funny that they couldn't help but laugh. And once
      they started laughing, they couldn't stop.
    </p>
    <h3>The People's Rebellion</h3>
    <p>
      The people of the kingdom, feeling uplifted by the laughter, started to
      tell jokes and puns again, and soon the entire kingdom was in on the joke.
    </p>
    <div>
      <table>
        <thead>
          <tr>
            <th>King's Treasury</th>
            <th>People's happiness</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Empty</td>
            <td>Overflowing</td>
          </tr>
          <tr>
            <td>Modest</td>
            <td>Satisfied</td>
          </tr>
          <tr>
            <td>Full</td>
            <td>Ecstatic</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax. Jokester was declared a hero, and the
      kingdom lived happily ever after.
    </p>
    <p>
      The moral of the story is: never underestimate the power of a good laugh
      and always be careful of bad ideas.
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
    width={24}
    height={24}
    viewBox="0 0 154 154"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>shadcn logo</title>
    <g clip-path="url(#clip0_2141_29)">
      <path
        d="M124.801 76.8L76.8008 124.8"
        stroke="black"
        stroke-width="19.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M115.2 24L24 115.2"
        stroke="black"
        stroke-width="19.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2141_29">
        <rect width="153.6" height="153.6" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const GithubIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Github</title>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      transform="scale(64)"
      fill="#1B1F23"
    />
  </svg>
);

const Home = () => (
  <div className="grid divide-y border-x lg:grid-cols-3 lg:divide-x lg:divide-y-0">
    <header className="p-12">
      <div className="prose mx-auto">
        <div className="flex items-center justify-between gap-4">
          <ShadcnLogo />
          <a
            href="https://github.com/haydenbleasel/shadcn-prose"
            target="_blank"
            rel="noopener noreferrer"
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
        <pre>npm install -D shadcn-prose</pre>
        <p>
          Then update your <code>globals.css</code>:
        </p>
        <pre>@import 'shadcn-prose';</pre>
        <h2>Usage</h2>
        <p>
          Add a <code>prose</code> class to your content and you're good to go:
        </p>
        <pre>{`<div className="prose">
  <h1>Hello world</h1>
  <p>This is a paragraph</p>
</div>`}</pre>
        <p>On the right is an example of the prose styles in action.</p>
        <p>
          You can opt-out of the styles by adding the <code>not-prose</code>{' '}
          class:
        </p>
        <pre>
          {`<div className="prose">
  <h1>Hello world</h1>
  <div className="not-prose">
    <p>This is a paragraph</p>
  </div>
</div>`}
        </pre>
      </div>
    </header>
    <main className="bg-secondary px-12 py-24 lg:col-span-2">
      <div className="prose mx-auto">
        <ProseDemo />
      </div>
    </main>
  </div>
);

export default Home;
