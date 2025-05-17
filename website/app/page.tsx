const ProseDemo = () => (
  <>
    <h1>
      The Joke Tax Chronicles
    </h1>
    <p>
      Once upon a time, in a far-off land, there was a very lazy king who
      spent all day lounging on his throne. One day, his advisors came to him
      with a problem: the kingdom was running out of money.
    </p>
    <h2>
      The King's Plan
    </h2>
    <p>
      The king thought long and hard, and finally came up with{" "}
      <a
        href="#"
      >
        a brilliant plan
      </a>
      : he would tax the jokes in the kingdom.
    </p>
    <blockquote>
      "After all," he said, "everyone enjoys a good joke, so it's only fair
      that they should pay for the privilege."
    </blockquote>
    <h3>
      The Joke Tax
    </h3>
    <p>
      The king's subjects were not amused. They grumbled and complained, but
      the king was firm:
    </p>
    <ul>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
    <p>
      As a result, people stopped telling jokes, and the kingdom fell into a
      gloom. But there was one person who refused to let the king's
      foolishness get him down: a court jester named Jokester.
    </p>
    <h3>
      Jokester's Revolt
    </h3>
    <p>
      Jokester began sneaking into the castle in the middle of the night and
      leaving jokes all over the place: under the king's pillow, in his soup,
      even in the royal toilet. The king was furious, but he couldn't seem to
      stop Jokester.
    </p>
    <p>
      And then, one day, the people of the kingdom discovered that the jokes
      left by Jokester were so funny that they couldn't help but laugh. And
      once they started laughing, they couldn't stop.
    </p>
    <h3>
      The People's Rebellion
    </h3>
    <p>
      The people of the kingdom, feeling uplifted by the laughter, started to
      tell jokes and puns again, and soon the entire kingdom was in on the
      joke.
    </p>
    <div>
      <table>
        <thead>
          <tr>
            <th>
              King's Treasury
            </th>
            <th>
              People's happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Empty
            </td>
            <td>
              Overflowing
            </td>
          </tr>
          <tr>
            <td>
              Modest
            </td>
            <td>
              Satisfied
            </td>
          </tr>
          <tr>
            <td>
              Full
            </td>
            <td>
              Ecstatic
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      The king, seeing how much happier his subjects were, realized the error
      of his ways and repealed the joke tax. Jokester was declared a hero, and
      the kingdom lived happily ever after.
    </p>
    <p>
      The moral of the story is: never underestimate the power of a good laugh
      and always be careful of bad ideas.
    </p>
  </>
)

const Home = () => (
  <div className="grid grid-cols-3 divide-x border-x">
    <header className="p-12">
      <div className="prose mx-auto">
        <svg width={48} height={48} viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2141_29)">
            <path d="M124.801 76.8L76.8008 124.8" stroke="black" stroke-width="19.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M115.2 24L24 115.2" stroke="black" stroke-width="19.2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_2141_29">
              <rect width="153.6" height="153.6" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1 className="mt-8">shadcn-prose</h1>
        <p>A drop-in replacement for <code>@tailwindcss/typography</code>, designed for use with shadcn/ui. Includes headings, paragraphs, lists and more.</p>
        <h2>Installation</h2>
        <p>Simply install the package:</p>
        <pre>npm install -D shadcn-prose</pre>
        <p>Then update your <code>globals.css</code>:</p>
        <pre>@import 'shadcn-prose';</pre>
        <h2>Usage</h2>
        <p>Add a <code>prose</code> class to your content and you're good to go:</p>
        <pre>{`<div className="prose">
  <h1>Hello world</h1>
  <p>This is a paragraph</p>
</div>`}</pre>
        <p>On the right is an example of the prose styles in action.</p>
      </div>
    </header>
    <main className="col-span-2 px-12 py-24 bg-secondary">
      <div className="prose mx-auto">
        <ProseDemo />
      </div>
    </main>
  </div>
)


export default Home;