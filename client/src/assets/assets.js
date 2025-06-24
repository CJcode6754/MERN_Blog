import logo from "./blog_logo.png";
import arrow from "./arrow.svg";
import tech from "./tech.jpg";
import startUp from "./startUp.jpg";
import lifestyle from "./lifestyle.png";
import finance from "./finance.jpg";
import user from './user.png';
import facebook from './facebook.png';
import twitter from './twitter.png';

export const assets = {
  logo,
  arrow,
  user,
  facebook,
  twitter
};

export const blodCategories = [
  "All",
  "Technology",
  "Startup",
  "Lifestyle",
  "Finance",
];

export const blogs = [
  {
    id: "1",
    title: "The Future of AI in Everyday Life",
    subtitle: "How artificial intelligence is reshaping our routines",
    description: `
      <h2 class="text-2xl font-bold mb-4">Overview</h2>
      <p class="mb-4">Artificial Intelligence is revolutionizing how we interact with technology daily. Here are 5 key ways it's reshaping our lives:</p>

      <h3 class="text-lg font-semibold mt-6 mb-2">1. Smart Assistants</h3>
      <p class="mb-4">AI tools like Siri, Alexa, and Google Assistant handle over 1 billion voice requests each month to manage reminders, schedules, and tasks.</p>

      <h3 class="text-lg font-semibold mt-6 mb-2">2. Personalized Recommendations</h3>
      <p class="mb-4">80% of content on platforms like Netflix and YouTube is driven by AI algorithms that tailor your experience.</p>

      <h3 class="text-lg font-semibold mt-6 mb-2">3. Healthcare Innovations</h3>
      <p class="mb-4">AI is reducing diagnostic errors by 50%, improving early disease detection and saving lives.</p>

      <h3 class="text-lg font-semibold mt-6 mb-2">4. Transportation</h3>
      <p class="mb-4">Self-driving vehicles and traffic AI are improving road safety and efficiency globally.</p>

      <h3 class="text-lg font-semibold mt-6 mb-2">5. Future Potential</h3>
      <p class="mb-4">By 2030, AI is expected to contribute $15.7 trillion to the global economy, impacting jobs, education, and daily routines.</p>
    `,
    category: "Technology",
    created_at: "2025-06-01T10:30:00Z",
    updated_at: "2025-06-01T10:30:00Z",
    __v: 0,
    image: tech,
    isPublished: true,
  },
  {
    id: "2",
    title: "Launching a Startup with No Funding",
    subtitle: "Bootstrapping your way to success",
    description: `
      <h2 class="text-2xl font-bold mb-4">Introduction</h2>
      <p class="mb-4">Many great startups began with close to ₱0. Here's how to turn an idea into a business with grit and strategy:</p>

      <h3 class="text-lg font-semibold mt-6 mb-2">1. Validate Your Idea</h3>
      <p class="mb-4">Use free tools like Google Forms, Reddit, or Facebook groups to test your concept and get real feedback from users.</p>

      <h3 class="text-lg font-semibold mt-6 mb-2">2. Build an MVP</h3>
      <p class="mb-4">Create a simple, working version of your product using platforms like WordPress, Bubble, or Glide.</p>

      <h3 class="text-lg font-semibold mt-6 mb-2">3. Use Free Tools</h3>
      <p class="mb-4">Manage your project with Notion, promote with Canva, and collaborate using Slack or Discord—all for free.</p>

      <h3 class="text-lg font-semibold mt-6 mb-2">4. Focus on Revenue</h3>
      <p class="mb-4">Set a goal to earn your first ₱1,000 in 30 days by offering a real solution, even before scaling.</p>

      <h3 class="text-lg font-semibold mt-6 mb-2">5. Grow Organically</h3>
      <p class="mb-4">Leverage social media, referrals, and community groups to spread your idea without needing to spend on ads.</p>
    `,
    category: "Startup",
    created_at: "2025-06-05T09:00:00Z",
    updated_at: "2025-06-05T09:00:00Z",
    __v: 0,
    image: startUp,
    isPublished: true,
  },
  {
    id: "3",
    title: "5 Morning Habits That Improve Your Day",
    subtitle: "Simple lifestyle shifts with lasting impact",
    description: `
    <h2 class="text-2xl font-bold mb-4">Start Strong: Transform Your Mornings</h2>
    <p class="mb-4">Incorporating the right habits early in the day can boost your productivity and mindset. Here are 5 powerful morning habits:</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">1. Wake Up Early</h3>
    <p class="mb-4">Waking up 30–60 minutes earlier gives you quiet time to focus, reflect, and mentally prepare.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">2. Hydrate First</h3>
    <p class="mb-4">Drinking a glass of water after waking helps activate your organs and boosts energy.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">3. Stretch or Move</h3>
    <p class="mb-4">A 5–10 minute stretch or walk can wake up your body and mind for the day.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">4. Practice Gratitude</h3>
    <p class="mb-4">Jotting down 3 things you’re thankful for sets a positive tone for the day.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">5. Avoid Your Phone</h3>
    <p class="mb-4">Avoid checking notifications during the first 30 minutes of your day to reduce anxiety.</p>
  `,
    category: "Lifestyle",
    created_at: "2025-06-10T07:15:00Z",
    updated_at: "2025-06-10T07:15:00Z",
    __v: 0,
    image: lifestyle,
    isPublished: true,
  },
  {
    id: "4",
    title: "Understanding Personal Finance in Your 20s",
    subtitle: "A guide to building healthy money habits early",
    description: `
    <h2 class="text-2xl font-bold mb-4">Financial Freedom Starts Early</h2>
    <p class="mb-4">Building strong financial habits in your 20s lays the foundation for future success. Here's how:</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">1. Create a Simple Budget</h3>
    <p class="mb-4">Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings/investments.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">2. Save Consistently</h3>
    <p class="mb-4">Aim to save ₱1,000/month. Automate your savings to make it easier.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">3. Build an Emergency Fund</h3>
    <p class="mb-4">Target at least 3 months of expenses saved in a separate account.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">4. Start Investing Early</h3>
    <p class="mb-4">Use beginner-friendly platforms and start with just ₱500–₱1,000.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">5. Avoid Bad Debt</h3>
    <p class="mb-4">Avoid unnecessary loans and always pay off your credit card in full.</p>
  `,
    category: "Finance",
    created_at: "2025-06-12T14:45:00Z",
    updated_at: "2025-06-12T14:45:00Z",
    __v: 0,
    image: finance,
    isPublished: false,
  },
  {
    id: "5",
    title: "Top 10 Programming Languages in 2025",
    subtitle: "What tech professionals are learning this year",
    description: `
    <h2 class="text-2xl font-bold mb-4">2025’s Most Valuable Programming Languages</h2>
    <p class="mb-4">Here's a ranked list based on job demand, developer preference, and tech trends:</p>

    <ol class="list-decimal list-inside space-y-2">
      <li><strong>Python</strong> – Versatile, beginner-friendly, and leading in AI and data science.</li>
      <li><strong>JavaScript</strong> – Essential for web development and full-stack frameworks.</li>
      <li><strong>TypeScript</strong> – Adds safety and scale to JavaScript applications.</li>
      <li><strong>Go</strong> – Fast, efficient, and ideal for cloud and backend systems.</li>
      <li><strong>Rust</strong> – Known for memory safety and growing rapidly in popularity.</li>
      <li><strong>Java</strong> – Still dominant in enterprise and Android development.</li>
      <li><strong>Kotlin</strong> – Modern alternative to Java for Android apps.</li>
      <li><strong>C#</strong> – Powerful in enterprise apps and game development with Unity.</li>
      <li><strong>Swift</strong> – The go-to language for iOS development.</li>
      <li><strong>PHP</strong> – Still relevant for WordPress and legacy web systems.</li>
    </ol>
  `,
    category: "Technology",
    created_at: "2025-06-15T16:20:00Z",
    updated_at: "2025-06-15T16:20:00Z",
    __v: 0,
    image: tech,
    isPublished: true,
  },
  {
    id: "6",
    title: "Startup Pitching: Dos and Don'ts",
    subtitle: "Tips from experienced founders and investors",
    description: `
    <h2 class="text-2xl font-bold mb-4">How to Nail Your Startup Pitch</h2>
    <p class="mb-4">Your pitch can make or break funding opportunities. Here's what to do—and avoid:</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">Dos</h3>
    <ul class="list-disc list-inside mb-4 space-y-1">
      <li>Start with a compelling hook in under 30 seconds.</li>
      <li>Clearly explain the problem you’re solving.</li>
      <li>Keep your solution simple and understandable.</li>
      <li>Know your numbers: revenue, market size, and growth.</li>
    </ul>

    <h3 class="text-lg font-semibold mt-6 mb-2">Don'ts</h3>
    <ul class="list-disc list-inside mb-4 space-y-1">
      <li>Don’t overwhelm with data or jargon.</li>
      <li>Don’t ignore your competition—acknowledge and differentiate.</li>
      <li>Don’t fake traction—be honest about where you are.</li>
    </ul>
  `,
    category: "Startup",
    created_at: "2025-06-18T13:00:00Z",
    updated_at: "2025-06-18T13:00:00Z",
    __v: 0,
    image: startUp,
    isPublished: false,
  },
  {
    id: "7",
    title: "Minimalism: Declutter Your Digital Life",
    subtitle: "A lifestyle trend for mental clarity",
    description: `
    <h2 class="text-2xl font-bold mb-4">Clear Mind, Clear Desktop</h2>
    <p class="mb-4">Digital clutter creates stress. Try these minimalist steps for better focus and peace:</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">1. Clean Your Desktop</h3>
    <p class="mb-4">Limit to 5 icons max. Store everything else in clearly labeled folders.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">2. Organize Your Files</h3>
    <p class="mb-4">Use folders like “Work,” “Personal,” “Archive,” and clean them up weekly.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">3. Limit App Usage</h3>
    <p class="mb-4">Keep only 10 essential apps on your home screen. Delete unused ones.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">4. Unsubscribe</h3>
    <p class="mb-4">Use tools like Unroll.Me to clean out newsletters and email spam.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">5. Digital Detox</h3>
    <p class="mb-4">Take one full day offline each week to recharge.</p>
  `,
    category: "Lifestyle",
    created_at: "2025-06-20T11:10:00Z",
    updated_at: "2025-06-20T11:10:00Z",
    __v: 0,
    image: lifestyle,
    isPublished: true,
  },
  {
    id: "8",
    title: "How to Build an Emergency Fund",
    subtitle: "Protect your finances from unexpected events",
    description: `
    <h2 class="text-2xl font-bold mb-4">Build Your Safety Net in 5 Steps</h2>
    <p class="mb-4">An emergency fund is essential for financial security. Follow these steps:</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">1. Calculate Your Goal</h3>
    <p class="mb-4">Add up 3–6 months of your basic living expenses like rent, food, and transport.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">2. Open a Dedicated Account</h3>
    <p class="mb-4">Keep your emergency savings separate from your daily spending account.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">3. Set Monthly Targets</h3>
    <p class="mb-4">Save a fixed amount monthly (start with ₱1,000) until you reach your goal.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">4. Cut Unnecessary Expenses</h3>
    <p class="mb-4">Skip one delivery or coffee per week and redirect it to savings.</p>

    <h3 class="text-lg font-semibold mt-6 mb-2">5. Automate It</h3>
    <p class="mb-4">Use auto-transfers to remove the temptation of spending your savings.</p>
  `,
    category: "Finance",
    created_at: "2025-06-22T08:55:00Z",
    updated_at: "2025-06-22T08:55:00Z",
    __v: 0,
    image: finance,
    isPublished: true,
  },
];


export const comments_data = [
  {
    id: "c1",
    blog: blogs[0],
    name: "Jane Doe",
    content: "This post gave me a better understanding of how AI affects our daily routines. Great insights!",
    isApproved: true,
    created_at: "2025-06-01T12:15:00Z",
    updated_at: "2025-06-01T12:15:00Z",
    __v: 0
  },
  {
    id: "c2",
    blog: blogs[1],
    name: "Michael Reyes",
    content: "I didn’t realize AI was already being used in transportation. Eye-opener!",
    isApproved: true,
    created_at: "2025-06-01T13:40:00Z",
    updated_at: "2025-06-01T13:40:00Z",
    __v: 0
  },
  {
    id: "c3",
    blog: blogs[1],
    name: "Anna Santos",
    content: "I'm currently building a startup with no funding. These tips are exactly what I needed!",
    isApproved: true,
    created_at: "2025-06-05T11:25:00Z",
    updated_at: "2025-06-05T11:25:00Z",
    __v: 0
  },
  {
    id: "c4",
    blog: blogs[2],
    name: "Leo Villanueva",
    content: "I started waking up early last week and already feel more productive. Thanks for the list!",
    isApproved: true,
    created_at: "2025-06-10T08:00:00Z",
    updated_at: "2025-06-10T08:00:00Z",
    __v: 0
  },
  {
    id: "c5",
    blog: blogs[4],
    name: "Rhea Lim",
    content: "Happy to see Python still at the top! Hoping Rust continues to rise too.",
    isApproved: true,
    created_at: "2025-06-15T18:30:00Z",
    updated_at: "2025-06-15T18:30:00Z",
    __v: 0
  },
  {
    id: "c6",
    blog: blogs[7],
    name: "Mark de Guzman",
    content: "I’ve been meaning to start an emergency fund. This gave me the push to get going.",
    isApproved: true,
    created_at: "2025-06-22T10:00:00Z",
    updated_at: "2025-06-22T10:00:00Z",
    __v: 0
  }
];

export const dashboard_data = {
    "blogs": 10,
    "comments": 5,
    "drafts": 0,
    "recentBlogs": blogs.slice(0, 5),
}