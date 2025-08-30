# LI Post Generator

## Project Description
Landing Page

The landing page should be visually appealing with an artistic design inspired by LinkedIn’s branding style (professional, clean, and modern).

At the center, include a dialog box (input field) where users can enter the topic or description of the LinkedIn post they want to generate.

User Options
Alongside the topic input, provide two additional controls:

Theme Selector – e.g., Professional, Thought Leadership, Storytelling, Conversational, etc.

Length Selector – users can choose from 300, 400, or 500 words/characters (depending on your target metric).

Generation Step

Once the user submits their inputs, the details are sent to the Gemini API.

The system message for Gemini should include clear guidance, for example:

“You are generating LinkedIn posts. Each post must have a strong hook, engaging content, and a compelling call-to-action (CTA). Maintain clarity, professionalism, and make sure the post fits within LinkedIn’s tone.”

Output Display

The API returns 3 different variations of the LinkedIn post, each with a slightly different tone/style based on the chosen theme.

These posts should then be displayed neatly on the webpage, with options for the user to copy or save the content.

## Product Requirements Document
Product Requirements Document (PRD)

1.  Introduction

    1.1 Project Name
    LI Post Generator

    1.2 Document Version
    1.0

    1.3 Date
    [Current Date - YYYY-MM-DD]

    1.4 Purpose
    This document outlines the detailed product requirements for the "LI Post Generator" - a web application designed to assist professionals in generating high-quality LinkedIn posts using artificial intelligence. It serves as a comprehensive guide for development, design, and testing teams.

    1.5 Project Goal and Vision
    The vision for the LI Post Generator is to empower working professionals to consistently create engaging, professional, and impactful LinkedIn content, thereby enhancing their personal brand and network presence with minimal time and effort. Our goal is to convert a user's raw ideas into ready-to-post content quickly and efficiently.

    1.6 Target Audience & Pain Points
    1.6.1 Primary Target Audience
    Working professionals, including early to mid-career individuals, managers, consultants, founders, and MBA students, who aspire to grow their LinkedIn presence but encounter challenges in consistently creating high-quality posts.

    1.6.2 Key Pain Points & Needs
    *   Time & Research Burden: Busy professionals often lack the time required for research, structuring, and editing strong LinkedIn posts. They have ideas but cannot afford hours refining them.
    *   Idea-to-Post Gap: Users frequently have only a brief idea or topic (e.g., "importance of networking" or "AI in marketing") and struggle to transform it into a compelling, structured post with a strong hook, engaging body, and clear call-to-action (CTA).
    *   Content Quality & Engagement: Professionals desire posts that are not only polished but also resonate with readers and encourage interaction. They often lack confidence in tailoring the tone (e.g., professional, thought-leadership, conversational).
    *   Consistency in Posting: Building a personal brand on LinkedIn demands regular content. Creative block and lack of inspiration often prevent this consistency.

2.  Product Overview

    2.1 High-Level Description
    The LI Post Generator is a web-based application that leverages the Gemini API to generate professional LinkedIn posts. Users provide a topic or description, select a preferred theme and desired length, and the system delivers three unique post variations. The application's landing page will feature a visually appealing, clean, and modern design, drawing inspiration from LinkedIn's established branding.

    2.2 Value Proposition
    The tool offers significant value by:
    *   Converting raw ideas into ready-to-post content with just a few intuitive inputs.
    *   Providing multiple post variations, each with a slightly different tone and style, allowing users to select content that best aligns with their personal voice and brand.
    *   Saving considerable time and effort by eliminating the need for extensive research and drafting.
    *   Enabling professionals to maintain a consistent presence on LinkedIn, which is crucial for boosting visibility and professional growth.

3.  User Stories (Key Features)

    *   As a busy professional, I want to quickly enter my topic/idea so that I can generate a LinkedIn post without spending much time drafting.
    *   As a professional building my brand, I want to choose the tone (e.g., "Thought Leadership") and desired length for my post so that it aligns perfectly with my personal brand and content strategy.
    *   As a user, I want to see three different variations of the generated post simultaneously so that I can easily compare and pick the best option.
    *   As a user, I want a clear and prominent "Copy" button for each generated post so that I can quickly transfer the content to my clipboard.
    *   As a user, if I am not satisfied with a specific post variation, I want to regenerate only that single post so that I don't lose other good options.
    *   As a user, I expect the page to load quickly and the post generation process to be reasonably fast so that my workflow remains efficient and frustration-free.
    *   As a user, I want the application's interface to be clean, professional, and intuitive to use on both my desktop and mobile devices.

4.  Functional Requirements

    4.1 Landing Page UI & Visual Design
    *   FR.1.1 Aesthetic: The landing page shall be visually appealing, featuring an artistic design inspired by LinkedIn's branding style (professional, clean, modern).
    *   FR.1.2 Color Palette:
        *   Primary: LinkedIn-ish Blue (#0A66C2)
        *   Primary Dark: (#004182)
        *   Background: Off-White (#F3F2EF) - use for general page background
        *   Surface: Pure White (#FFFFFF) - reserve for cards and primary UI elements
        *   Text Primary: Charcoal (#1F2328)
        *   Text Secondary: Slate (#5E6B75)
        *   Borders/Dividers: (#E0E3E7)
        *   Accent (sparingly): Teal (#0EA5A4)
        *   States: Success (#1A7F37), Warning (#B54708), Error (#B42318)
        *   Tip: Blue should primarily be used for Call-to-Actions (CTAs) and links.
    *   FR.1.3 Typography:
        *   Font family: Inter (with System UI fallback for performance).
        *   Scale (rem): 32 (h1), 24 (h2), 20 (h3), 16 (body), 14 (auxiliary text).
        *   Weights: 600 for headings, 400–500 for body text.
        *   Line heights: 1.2 for headings, 1.6 for body text.
        *   Links: Underlined on hover/focus, using Primary Blue (#0A66C2).
    *   FR.1.4 Spacing, Radius, Elevation:
        *   Spacing scale: 4, 8, 12, 16, 24, 32 pixels.
        *   Radius: 12–16px for primary cards and input fields (rounded-xl/2xl aesthetic).
        *   Shadows: Ultra-subtle, e.g., 0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.04).
        *   Borders: 1px solid #E0E3E7 on cards and input fields.
    *   FR.1.5 Header: A slim bar, featuring a logo on the left and minimal navigation (e.g., "About," "Pricing," "FAQ") on the right. It shall be sticky on scroll and display a subtle shadow.
    *   FR.1.6 Hero Section: Composed of two main areas: the left side will contain a prominent headline and supporting subcopy; the right side will feature a subtle abstract pattern (e.g., geometric grid or soft gradient blob). The primary Call-to-Action (CTA) in this section will be "Generate Posts."

    4.2 Input Controls
    *   FR.2.1 Input Card: All input controls shall be housed within a white card on the off-white page background, featuring 24–32px padding and clear hierarchical organization.
    *   FR.2.2 Topic Input Field: A multi-line dialog box (textarea) allowing users to enter the topic or detailed description of the LinkedIn post they wish to generate.
        *   FR.2.2.1 Validation - Empty Input: The system shall prevent an API call if this field is empty. An inline error message "Please enter a topic or description before generating." will be displayed below the textbox.
        *   FR.2.2.2 Validation - Too Short: Inputs of 1–2 words will be allowed, but a helper text "Tip: More detail helps generate better posts." will be shown.
        *   FR.2.2.3 Validation - Too Long: Inputs exceeding 500 characters will be truncated to 500 characters. A message "Your input is too long. Please shorten to under 500 characters." will be displayed.
    *   FR.2.3 Theme Selector: A control providing three options for the post's tone/style.
        *   FR.2.3.1 Options: Professional, Thought Leadership, Conversational/Storytelling.
            *   Professional: Clear, concise, business-oriented tone (for updates, achievements, announcements).
            *   Thought Leadership: Insightful, authoritative, idea-driven (positions user as an expert).
            *   Conversational/Storytelling: Relatable, engaging, narrative-driven (personal stories, lessons, reflections).
        *   FR.2.3.2 UI: Presented as segmented pill chips; the selected chip shall be visually indicated by a solid blue fill.
    *   FR.2.4 Length Selector: A control offering three predefined word count options.
        *   FR.2.4.1 Options: 300 words (Short), 400 words (Medium), 500 words (Long).
            *   Short (≈ 300 words): Snappy, digestible update.
            *   Medium (≈ 400 words): Balanced depth & engagement.
            *   Long (≈ 500 words): More detailed, thought-leadership style post.
        *   FR.2.4.2 Rationale: Length is defined in words because LinkedIn's algorithm often rewards long-form content (200–500 words) for engagement, and word counts are more intuitive for users than character counts.
        *   FR.2.4.3 UI: Presented as segmented pill chips; the selected chip shall be visually indicated by a solid blue fill.
    *   FR.2.5 Hashtag Toggle: An on/off switch to control hashtag inclusion.
        *   FR.2.5.1 Functionality:
            *   "On": The Gemini API will be instructed to suggest 3–5 relevant hashtags at the end of each generated post.
            *   "Off": Posts will be generated without hashtags.
        *   FR.2.5.2 UI: A simple switch accompanied by the label "Add hashtags."
    *   FR.2.6 Generate Button: A primary action button, styled in solid blue, to initiate the post generation process.
    *   FR.2.7 Reset Button: A secondary action button, styled as a ghost button, to clear the input fields.

    4.3 Generation Process
    *   FR.3.1 API Integration: Upon submission of user inputs, the collected details (topic, selected theme, length, hashtag preference) shall be securely sent to the Gemini API.
    *   FR.3.2 System Message: The system message provided to the Gemini API must include explicit guidance: "You are generating LinkedIn posts. Each post must have a strong hook, engaging content, and a compelling call-to-action (CTA). Maintain clarity, professionalism, and make sure the post fits within LinkedIn’s tone."
    *   FR.3.3 Output: The Gemini API shall return three distinct variations of the LinkedIn post. Each post variation should exhibit a slightly different tone/style, tailored to the chosen theme.

    4.4 Output Display
    *   FR.4.1 Layout - Desktop/Laptop (Wider Screens): The three generated post variations shall be displayed side-by-side in three equal-width cards. This layout enables users to instantly compare tone and content without additional toggling or clicks.
    *   FR.4.2 Layout - Mobile/Tablet (Narrow Screens): The layout shall adapt to a vertical scroll list, with one card displayed per row. Each card will utilize the full screen width to ensure optimal readability. Users will scroll down to view Post 1, then Post 2, then Post 3.
    *   FR.4.3 Card Structure (for each generated post):
        *   FR.4.3.1 Header Row: Each card's header shall include a badge or label (e.g., “Variation 1” or “Professional Tone”) and the approximate word count (e.g., “~400 words”).
        *   FR.4.3.2 Body Text: The main body of the card will contain the generated LinkedIn post. The text shall be formatted with good line-height and a line width of approximately 70–80 characters for optimal readability.
        *   FR.4.3.3 Action Row:
            *   Copy Button: A prominent, clearly labeled button as the primary action, allowing users to copy the post content.
            *   Regenerate Button: A secondary, more subtle button (represented by a refresh icon + “Regenerate” label) to allow users to generate a new variation for that specific slot (Future Iteration - V2).
            *   "Preview in LinkedIn style" link: A link to a future feature allowing users to visualize the post within a LinkedIn-like interface.

    4.5 User Interaction Flow (MVP)
    *   FR.5.1 Input Submission: The user will enter their inputs into the form fields and click the "Generate" button.
    *   FR.5.2 Loading State: During the Gemini API call (expected 2-5 seconds), the results area shall display loading skeletons or spinners to indicate progress.
    *   FR.5.3 Post Comparison: Users will read and compare the three generated posts, presented in the appropriate responsive layout.
    *   FR.5.4 Copy Action: Upon clicking the "Copy" button below a specific post, the content of that post will be copied to the user's clipboard.
        *   FR.5.4.1 Feedback: A confirmation toast notification, e.g., “Copied to clipboard ✅”, will appear briefly (2 seconds) to confirm the action.
    *   FR.5.5 Regenerate Action (V2): (Future scope) If a user is dissatisfied with a particular post variation, they can click the "Regenerate" button under that card. This action will send a new request to the Gemini API using the original inputs for that specific slot, returning a fresh alternative without affecting the other two posts or requiring the user to re-fill the main form.
    *   FR.5.6 Post-Copy Action: Once satisfied and copied, the user can then paste the content directly into LinkedIn or any other desired platform.

    4.6 Error Handling & Input Validation
    *   FR.6.1 Gemini API Failure: If the Gemini API experiences downtime, network issues, or a timeout (>10s), an inline error message shall be displayed in the results area: “⚡ Post generation failed due to an error. Please try again.” The form inputs will remain intact, allowing the user to retry without retyping.
    *   FR.6.2 Gemini Empty Response: In cases where the Gemini API returns an empty response (even if the call was technically successful), the same fallback message will be displayed: “⚡ Couldn’t generate posts this time. Please try again.”
    *   FR.6.3 Gemini Off-topic / Unsuitable Output: For the MVP, no complex moderation for off-topic or unsuitable output will be implemented. Users can simply use the "Regenerate" button to get a new output. (Future: Implement content filtering for profanity/off-topic detection).
    *   FR.6.4 User Flow with Errors: If a Gemini API error or empty response occurs, a clear inline red error banner will be displayed. The user can then click the "Generate" button again, with all their original inputs preserved, to attempt regeneration.

5.  Non-Functional Requirements

    5.1 Performance
    *   NFR.1.1 Page Load Time: The target for the first contentful paint (FCP) on a broadband connection is less than 2 seconds. This will be achieved by utilizing static assets and optimizing image/SVG illustrations to be lightweight (<200kb).
    *   NFR.1.2 API Response (Gemini): Generation requests to the Gemini API are expected to take between 2–5 seconds, which is considered acceptable for AI model processing. If response times exceed 8 seconds, appropriate loading skeletons or spinners will be displayed to manage user expectations.
    *   NFR.1.3 Throughput / Concurrency (MVP): For the MVP phase, the system is expected to handle 1–5 concurrent requests effectively.
    *   NFR.1.4 Copy/Interaction Speed: User interactions, particularly the "Copy" button action, must provide instant feedback (<100ms), followed by a toast notification.
    *   NFR.1.5 Performance Guardrails (MVP-friendly):
        *   Caching: Aggressive caching for static assets will be implemented (CDN-managed, e.g., by Vercel). No specific caching for generated posts is needed as they are unique.
        *   Timeouts/Errors: If the Gemini API takes longer than 10 seconds to respond or fails, a graceful error message ("⚡ Oops, try again") will be displayed.
        *   Mobile-first optimization: Given that 60–70% of LinkedIn browsing occurs on mobile devices, ensuring legibility of posts and full-width cards on narrow screens is critical.

    5.2 Scalability
    *   NFR.2.1 Anticipated Traffic Volumes (MVP Assumptions):
        *   Launch phase (first 1–2 months): Approximately 50–100 early adopters, generating 2–5 posts per session. This translates to an upper bound of ~200–500 generations per day.
        *   Growth phase (3–6 months with promotion): Approximately 500–1,000 active users, each generating ~3 posts/session, 2 sessions/week. This equals ~3,000–6,000 generations per week.
    *   NFR.2.2 Implications: The MVP infrastructure, leveraging free-tier hosting (e.g., Vercel/Netlify) and the Gemini free quota, is expected to adequately support initial traffic volumes. However, a plan for increasing API quotas will be necessary if user growth accelerates beyond these initial projections.
    *   NFR.2.3 Future Scalability: For larger scale (e.g., 1k+ Daily Active Users, potentially 50–100 concurrent requests), plans will include scaling Gemini quotas and potentially adding request queueing or retry logic.

    5.3 Accessibility
    *   NFR.3.1 Contrast: All buttons, links, and text elements must maintain a minimum contrast ratio of 4.5:1 against their backgrounds to ensure readability for users with visual impairments.
    *   NFR.3.2 Hit Targets: Interactive elements (buttons, toggles) shall have a minimum hit target size of 44x44 pixels to facilitate interaction on touch devices and for users with motor impairments.
    *   NFR.3.3 Keyboard Navigation: The application must be fully navigable using a keyboard. Visible focus rings (e.g., `outline: 2px solid #0A66C2 + offset`) will clearly indicate the currently focused element.
    *   NFR.3.4 Motion: The application shall respect the user's `prefers-reduced-motion` setting, disabling or reducing non-essential animations and fancy entrances to prevent discomfort for sensitive users.

    5.4 Visual Design & Branding (Detailed)
    *   NFR.4.1 Visual North Star (Mood Board, in words): The design will embody an airy, card-based layout with ample negative space and a strong grid system. The overall tone will be trustworthy, enterprise-grade, with minimal ornamentation and purposeful motion.
    *   NFR.4.2 Motion & Micro-interactions:
        *   Durations: Hover and press states will have durations of 150–220ms. Card reveals and similar transitions will occur over 250–300ms.
        *   Easings: Use `ease-out` for element entrances and `ease-in` for exits.
        *   Feedback: Copy actions will trigger a toast notification "Copied to clipboard" (2s duration). Regenerate actions will display skeleton loaders.
    *   NFR.4.3 Iconography & Imagery:
        *   Icons: Stroked line icons (e.g., from `lucide-react`) at 20–24px size with a 1.5px stroke weight.
        *   Illustrations: Abstract grids, subtle gradients, and light 3D blobs are preferred. Cartoonish characters should be avoided.
    *   NFR.4.4 Design Principles (Do / Don’t):
        *   Do: Prioritize abundant white/neutral space, judicious and restrained use of blue (primary brand color), and a clear typographic rhythm.
        *   Don’t: Avoid excessive gradients, rainbow-like accent colors, heavy shadows, or fully rounded ("rounded-full") chips. Maintain a mature, professional aesthetic.
    *   NFR.4.5 Example Section Layouts (Wireframe Cues):
        *   Hero: Max-width of 7xl, utilizing a 12-column grid. Text content will span 6–7 columns, while illustrative art will span 5–6 columns.
        *   Input Card: Centered on the page with a max-width of 3xl. Features 32px padding and 24px gaps between elements. The CTA button will be sticky on mobile.
        *   Results: Max-width of 4xl, with 16px gaps between post cards. Each post card will ensure 20–24px line length for body text readability.

    5.5 Technical Environment & Error Monitoring
    *   NFR.5.1 Tech Stack (Implied): The primary technologies for development are expected to be Next.js and TailwindCSS. Hosting will leverage platforms like Vercel or Netlify (free tier).
    *   NFR.5.2 Error/Performance Monitoring (Optional MVP): Integration of a free-tier solution like Sentry or LogRocket is recommended to catch API errors, slow loads, and user-side crashes, providing valuable insights for stability and performance.

6.  External Integrations

    6.1 MVP Integrations (Version 1)
    *   E.1.1 Gemini API: This is the core AI generation engine for the LinkedIn posts.
    *   E.1.2 Analytics: To track usage, traffic patterns, and drop-off points.
        *   Google Analytics 4 (GA4): A free and industry-standard solution.
        *   Plausible: A privacy-friendly alternative, offering a free trial (paid long-term).
    *   E.1.3 Error/Performance Monitoring (Optional but useful): To monitor API errors, slow loading times, and user-reported crashes.
        *   Sentry or LogRocket: Both offer free tiers.

    6.2 Future Integrations (V2 & V3)
    *   E.2.1 Authentication / Accounts: (Required if user history, saved posts, or personalization features are introduced).
        *   Supabase Auth: Offers a generous free tier and integrates well with Next.js.
        *   Clerk.dev: Provides an easy-to-use UI and a free starter plan.
        *   Auth0: A powerful solution, but potentially overkill for early stages.
    *   E.2.2 Database / Storage: (Required if features like "Save Post History" or user-specific personalization are introduced).
        *   Supabase: Provides Postgres + storage, with a clean-integrating free tier.
        *   Firebase Firestore: Another robust option with a solid free tier.
    *   E.2.3 LinkedIn Publishing: Direct posting functionality would require integration with the LinkedIn Marketing Developer Platform API.
        *   Caveat: Access to this API is restricted and requires approval from LinkedIn, which is selective.
        *   Use case: A "Post directly to LinkedIn" button. Until approval is secured, "Copy" and "Preview" remain the safer MVP paths.
    *   E.2.4 User Feedback Loop: (Optional, but highly valuable for iterative improvement).
        *   Implementation: A simple "thumbs up/down" mechanism after post generation to collect quality ratings.
        *   Tracking: Data can be tracked using existing integrations like Firebase, Supabase, or lightweight serverless databases (e.g., Tinybird, Airtable free tiers).
    *   E.2.5 Email/Notification: (If user accounts are introduced later).
        *   Use cases: Transactional emails (e.g., "Your post is ready," content ideas).
        *   Providers (with free tiers): Resend, Postmark (trial), or Brevo (Sendinblue).

7.  Future Scope / Roadmap

    7.1 MVP (Version 1) - Copy Option Only
    The initial release will focus on core functionality and a seamless user experience for content generation and immediate use.
    *   Core Functionality: Implementation of topic input, theme selection (Professional, Thought Leadership, Conversational), length selection (300, 400, 500 words), and hashtag toggle.
    *   API Integration: Full integration with the Gemini API for post generation.
    *   Output Display: Generation and display of 3 distinct post variations in a responsive layout (3-column desktop, vertical scroll mobile).
    *   Action: A "Copy" button for each generated post, with a confirmation toast notification. No need for user accounts, databases, or saving features at this stage to keep it lightweight and frictionless.
    *   Validation & Error Handling: Robust input validation and basic Gemini API error handling as defined in FR.6.0.
    *   Analytics: Integration with Google Analytics 4 (GA4) for basic usage tracking.
    *   Hosting: Deployment on a free-tier hosting platform like Vercel or Netlify.

    7.2 Future Iterations (V2, V3, etc.)
    Subsequent versions will expand functionality based on user feedback and growth.
    *   7.2.1 Post Preview Mode (V2): Introduce a feature that allows users to view the generated post within a LinkedIn-style preview card, providing a visual representation of how it would appear in their feed. An optional toggle for "Preview with hashtags" vs. "Without hashtags" could be included.
    *   7.2.2 Regenerate Option (V2): Add a "Regenerate" button below each generated post card. This button will trigger a new request to the Gemini API, using the same initial settings (topic, theme, length, hashtags), to produce a fresh alternative for that specific slot without affecting other variations or requiring form re-entry.
    *   7.2.3 Light Editing/Polishing (V2+): Implement an inline editor directly within the displayed post cards, enabling users to make minor wording tweaks before copying. Future enhancements could include grammar checks or tone adjustment suggestions.
    *   7.2.4 History Management (V3 - Requires Accounts): If user accounts are introduced, allow users to view and revisit their past generated posts, which would be useful for consistency and long-term content strategy.
    *   7.2.5 Direct Sharing (V3 - Requires LinkedIn API Approval): Once authenticated and approved by the LinkedIn Marketing Developer Platform API, enable a "Post Directly to LinkedIn" button to facilitate seamless sharing from the application.
    *   7.2.6 Personalization & Analytics (V3+): Implement more advanced analytics to learn from user preferences (e.g., frequently chosen themes or lengths) and track which generated posts perform best on LinkedIn (clicks, likes, comments) to fine-tune future suggestions.

8.  Assumptions & Constraints

    8.1 Timeline (MVP)
    *   Week 1–2: Planning & Setup (Finalize requirements, choose stack, set up repo, basic landing page, input form).
    *   Week 3: API Integration & Core Functionality (Connect inputs to Gemini API, generate variations, implement copy-to-clipboard).
    *   Week 4: Design Polish & Testing (Apply LinkedIn-inspired design, responsive layout, QA on desktop + mobile).
    *   End of Week 4 / Start of Week 5: MVP Launch (Soft launch with copy option, simple hosting).
    *   Realistically, the MVP should be live in approximately 1 month for a solo developer, or 2–3 weeks for a small team.

    8.2 Budgetary Considerations
    *   Must Use Free / Low-Cost Resources:
        *   Hosting: Vercel (free tier) for Next.js applications.
        *   Database (if needed later): Supabase / Firebase (generous free tiers).
        *   Design: TailwindCSS for styling, free icon sets (e.g., `lucide-react`, Heroicons). No premium UI kits will be used.
        *   Authentication (if later needed): Clerk / Supabase Auth (both offer free tiers).
        *   Gemini API: Google provides a free monthly quota, which is assumed to be sufficient for MVP testing and initial user adoption. Scaling costs will only be considered once significant, sustained usage is observed.
    *   Avoid Costs in V1:
        *   No paid analytics (use free GA4 or Plausible's free trial).
        *   No complex backend infrastructure (rely on serverless functions with Next.js API routes).
        *   No premium design tools (stick to Figma free plan for any wireframes/mocks).

    8.3 Gemini API Access & Quota
    *   Assumption: The Gemini API will remain consistently available and performant within Google's free quota limits, which are expected to be sufficient for MVP traffic volumes. Any significant deviation may impact performance or require budget adjustments.

    8.4 LinkedIn Publishing API
    *   Constraint: Direct posting to LinkedIn via API (planned for V3) is dependent on obtaining approval from the LinkedIn Marketing Developer Platform API. Access is highly restricted and approval-based. Therefore, the "Copy" functionality will be the primary and most reliable method for users to utilize generated posts in the MVP and immediate future.

## Technology Stack
TECHSTACK for \"LI Post Generator\" Project

This document outlines the recommended technology stack for the \"LI Post Generator\" project, a landing page designed to generate LinkedIn posts using AI. The selection prioritizes rapid development, cost-efficiency for the Minimum Viable Product (MVP), scalability, and alignment with the visual and functional requirements outlined in the project brief.

1.  Frontend Development

Framework: Next.js (React Framework)
Justification:
  - Excellent for building performant landing pages and single-page applications.
  - Supports Server-Side Rendering (SSR) and Static Site Generation (SSG), crucial for fast initial page loads (target <2 seconds FCP) and SEO.
  - Built-in API routes for easy integration with external APIs (like Gemini) without needing a separate backend server.
  - Strong developer experience, large community, and well-suited for modern web development.
  - Seamless integration with Vercel for deployment.

Styling: Tailwind CSS
Justification:
  - Utility-first CSS framework that enables rapid UI development consistent with the LinkedIn-inspired design (professional, clean, and modern).
  - Highly customizable, allowing precise control over spacing, typography, colors, and shadows, matching the provided visual guidelines (e.g., specific color tokens, border-radius, subtle shadows).
  - Generates minimal CSS, contributing to fast page load times.
  - Excellent for responsive design, enabling the desktop (3-column) and mobile (vertical scroll) layouts.

User Interface Components: Headless UI (for unstyled components like dialogs, toggles) or custom components
Justification:
  - Provides accessible, unstyled UI primitives that can be fully customized with Tailwind CSS, ensuring adherence to the project's unique visual design while maintaining accessibility standards.

Iconography: Lucide React / Heroicons
Justification:
  - Both offer a wide range of clean, stroked line icons that align with the minimalist aesthetic of LinkedIn branding.
  - Free and easy to integrate into a React/Next.js application.
  - Specifically, Lucide React was mentioned as a preference.

2.  AI & Core API

Generative AI API: Google Gemini API
Justification:
  - Core to the project's functionality for generating LinkedIn posts.
  - Provides a powerful, multi-modal AI model capable of understanding detailed prompts (topic, theme, length) and generating creative, relevant text.
  - Google's generous free monthly quota is suitable for MVP and early growth phases (up to ~500 generations/day initially).
  - Direct integration via Next.js API routes ensures a streamlined serverless architecture.

3.  Hosting & Deployment

Platform: Vercel
Justification:
  - Optimized for Next.js applications, offering seamless deployment, automatic scaling, and global Content Delivery Network (CDN) for static assets.
  - Provides a robust free tier that comfortably supports anticipated MVP traffic volumes (~50-100 early adopters, 200-500 generations/day).
  - Handles caching of static assets aggressively, contributing to fast page load times (<2 seconds FCP).
  - Serverless functions (Next.js API routes) are automatically deployed and scaled.

4.  State Management & Data Handling (MVP & Future)

Frontend State: React's Context API or Zustand / Jotai (lightweight state libraries)
Justification:
  - For managing UI state (e.g., form inputs, loading states, generated posts).
  - Context API is built-in and sufficient for simpler global states. Lightweight libraries like Zustand or Jotai offer better performance and developer experience for more complex local state without the overhead of Redux.

Database (Future - for user history, saved posts): Supabase (Postgres + Storage) / Firebase Firestore
Justification:
  - If future features like \"Save Post History\" or user accounts are introduced.
  - Both offer generous free tiers suitable for future iterations and scale well.
  - Supabase provides a full Postgres database with real-time capabilities and storage, integrating cleanly with Next.js.
  - Firebase Firestore is a NoSQL document database, also a solid choice for its ease of use and free tier.

5.  External Integrations

Analytics: Google Analytics 4 (GA4) / Plausible
Justification:
  - **GA4 (MVP):** Free, industry standard for tracking usage, traffic, and drop-offs. Provides comprehensive insights.
  - **Plausible (Alternative):** Privacy-friendly, has a free trial, and is a good option if privacy is a primary concern. GA4 is preferred for MVP due to its robust free offering.

Error & Performance Monitoring: Sentry / LogRocket (lite)
Justification:
  - **Sentry (MVP):** Free tier offers robust error tracking, performance monitoring, and crash reporting, essential for identifying and resolving issues quickly during launch.
  - **LogRocket (Alternative):** Lite version can provide session replay for debugging user issues.

Authentication (Future - for user accounts):
  - **Supabase Auth / Clerk.dev (MVP Preferred):** Both offer free tiers and integrate well with Next.js, providing comprehensive authentication features (email/password, OAuth).
  - **Auth0 (Alternative):** Powerful but might be overkill for early stages, with a more complex pricing model.

Email/Notification (Future - for transactional emails):
  - **Resend / Postmark (trial) / Brevo (Sendinblue):** Offer free tiers or generous trials for sending transactional emails (e.g., \"Your post is ready\").

6.  Development & Auxiliary Tools

Version Control: Git & GitHub
Justification:
  - Industry standard for collaborative development, code management, and version history.
  - Free for public and private repositories.

Code Editor: VS Code
Justification:
  - Popular, highly extensible editor with strong support for JavaScript, React, Next.js, and Tailwind CSS through various extensions.

Linting & Formatting: ESLint & Prettier
Justification:
  - Ensures code quality, consistency, and adherence to best practices across the project.

Project Management: Trello / Linear / GitHub Issues
Justification:
  - For tracking tasks, progress, and managing the development workflow (e.g., for the ~1-month MVP timeline).

7.  Performance & Scalability Strategy

The chosen stack is inherently designed for performance and scalability, particularly for a web application starting as a landing page:

Page Load Times: Next.js's SSG/SSR capabilities combined with Vercel's CDN and Tailwind CSS's minimal footprint will ensure target <2 seconds First Contentful Paint (FCP) on broadband.

AI API Latency: Gemini API responses are expected to be 2-5 seconds. The UI will incorporate loading skeletons/spinners during this time to provide a good user experience.

Traffic Handling: Vercel's serverless architecture scales automatically with increased traffic, handling concurrent requests efficiently. Gemini's free quota will suffice for MVP, with a plan to monitor usage and upgrade quotas as traffic grows (up to ~5k-10k active users / ~20k-50k generations/month).

Caching: Vercel's CDN will automatically cache static assets aggressively, reducing load times. As most generated content is unique, advanced caching for results is not needed for MVP.

8.  Error Handling & Input Validation

The frontend (Next.js) will implement robust input validation (e.g., checking for empty or excessively long topic inputs) before making API calls. Inline error messages will guide the user.

For Gemini API errors (e.g., API down, network issues, timeout, empty response), the application will display user-friendly inline messages (e.g., \"⚡ Post generation failed due to an error. Please try again.\") within the results area, without clearing the user's initial inputs. This allows for easy retry and maintains a smooth user flow, aligning with the MVP requirements for graceful error handling.

9.  Conclusion

This technology stack provides a solid foundation for building the \"LI Post Generator\", enabling rapid development of a visually appealing, high-performance, and scalable application. The emphasis on free and low-cost services ensures the MVP can be launched efficiently within the given timeline and budget, with clear pathways for future growth and feature expansion.

## Project Structure
PROJECTSTRUCTURE

This document outlines the proposed file and folder structure for the "LI Post Generator" project. The structure is designed to be clean, modular, and maintainable, leveraging a Next.js framework with TypeScript and Tailwind CSS, which aligns with the project's performance and design goals.

**1. Root Directory (`./`)**

This is the top-level directory containing project-wide configuration files and essential documentation.

*   `package.json`: Manages project dependencies, scripts (e.g., `dev`, `build`, `start`), and metadata.
*   `next.config.js`: Configuration file for Next.js, allowing customization of build processes, routing, and various settings.
*   `tailwind.config.js`: Configuration for Tailwind CSS, including color palette, typography, spacing, and component variants, directly reflecting the "Visual North Star" guidelines.
*   `postcss.config.js`: PostCSS configuration, primarily used by Tailwind CSS for processing CSS.
*   `.env.local`: Stores sensitive environment variables, such as the `GEMINI_API_KEY`, which are not committed to version control.
*   `.gitignore`: Specifies files and directories that Git should ignore, like `node_modules`, `.env.local`, and build artifacts.
*   `README.md`: Provides a comprehensive overview of the project, setup instructions, development guidelines, and deployment notes.
*   `tsconfig.json`: TypeScript configuration file, defining compiler options and project settings for type checking and compilation.

**2. Public Assets (`./public/`)**

This directory holds static assets that are directly served by Next.js.

*   `favicon.ico`: The favicon displayed in browser tabs.
*   `linkedin-logo.svg`: A vector-based logo inspired by LinkedIn's branding, used in the header and potentially other UI elements.
*   `abstract-pattern.svg` / `gradient-blob.svg`: Lightweight abstract graphic elements (as per "Iconography & Imagery" in design) used for background embellishment in sections like the Hero.

**3. Source Code (`./src/`)**

This is the main directory for all application source code, organized for clear separation of concerns.

*   **`./src/app/` (Next.js App Router - Pages & API Routes)**
    This directory utilizes Next.js 13+ App Router for defining application routes, layouts, and API endpoints.

    *   `layout.tsx`: The root layout component. It defines the overall structure of the application, including the global `<html>` and `<body>` tags, the `Header`, and `Footer`, applying global styling (`globals.css`).
    *   `page.tsx`: The main landing page component. This file orchestrates all major sections of the application (Hero, Input Form, Post Results Display) and manages the overall state flow.
    *   `globals.css`: Contains global CSS styles, including Tailwind CSS directives (`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`) and any custom global styles not handled by Tailwind.
    *   **`./src/app/api/` (API Routes - Serverless Functions)**
        This subdirectory contains serverless functions that act as API endpoints for backend logic.

        *   `generate-post/route.ts`: This API endpoint handles POST requests from the client.
            *   It receives the user's topic, theme, length, and hashtag preference.
            *   It calls the Gemini API client (`lib/gemini-client.ts`).
            *   It constructs the system message and user prompt according to the specified guidance.
            *   It implements robust error handling for Gemini API failures, network issues, or empty responses.
            *   It returns an array of 3 generated LinkedIn post variations to the client.

*   **`./src/components/` (Reusable UI Components)**
    This directory contains all presentational React components, promoting reusability and maintainability.

    *   **`./src/components/ui/` (Design System Primitives)**
        Contains highly reusable, atomic UI components that form the building blocks of the design system, adhering to "Key Components" and "Tailwind Token Hints".
        *   `Button.tsx`: A generic button component with variants for primary, secondary, and subtle actions (e.g., "Copy", "Regenerate", "Reset").
        *   `Input.tsx`: A textarea component for the topic input field, handling validation and error states.
        *   `SegmentedControl.tsx`: A component for segmented button groups, used for Theme and Length selectors. Handles selection state and visual feedback.
        *   `ToggleSwitch.tsx`: A simple on/off switch component for the "Add hashtags" option.
        *   `Card.tsx`: A generic card component with consistent styling (borders, shadows, radius), used as a wrapper for the input form and individual post displays.
        *   `Spinner.tsx`: A loading spinner component displayed during Gemini API calls.
        *   `Toast.tsx`: A notification component for ephemeral messages, such as "Copied to clipboard".
        *   `Badge.tsx`: A small label component for displaying "Variation 1" or "Professional Tone" on post cards.
    *   `Header.tsx`: The application's sticky header bar, including the logo and minimal navigation links ("About", "Pricing", "FAQ").
    *   `Footer.tsx`: The application's footer, containing muted links and copyright information.
    *   `HeroSection.tsx`: The top section of the landing page, featuring the main headline, subcopy, and the primary "Generate Posts" CTA button.
    *   `PostInputForm.tsx`: Encapsulates the entire user input section. It combines the `Input` (for topic), `SegmentedControl` (for theme and length), and `ToggleSwitch` (for hashtags), along with "Generate" and "Reset" buttons. It also handles client-side input validation and displays relevant helper/error messages.
    *   `PostResultsDisplay.tsx`: The container component for displaying the generated posts. It manages the responsive layout (three columns on desktop, vertical scroll on mobile) and renders three `PostCard` components.
    *   `PostCard.tsx`: Displays a single generated LinkedIn post. Each card includes a `Badge` (e.g., "Variation 1"), word count, the formatted post body, and action buttons (`Button` for "Copy", `Button` for "Regenerate", and a placeholder for "Preview").
    *   `ErrorMessage.tsx`: A dedicated component for displaying inline error messages or API failure notifications to the user, styled clearly and consistently.

*   **`./src/lib/` (Libraries & Utilities)**
    This directory houses utility functions, API clients, and helper modules.

    *   `gemini-client.ts`: Configures and exports the Gemini API client. It defines the core `generateContent` function with the system message and incorporates user inputs into the prompt.
    *   `constants.ts`: Stores application-wide constants, such as predefined theme and length options, character limits for input validation, and API message templates.
    *   `utils.ts`: General utility functions, including a helper for conditionally joining Tailwind CSS classes (`cn`) and any other small, generic helpers.
    *   `analytics.ts`: Integrates Google Analytics 4 (GA4), providing functions to initialize GA4 and track specific events (e.g., "post_generated", "post_copied", "regenerate_clicked").
    *   `monitoring.ts`: Initializes error and performance monitoring tools like Sentry or LogRocket, configured for the free tier to catch API errors, slow loads, and client-side issues.
    *   `clipboard.ts`: A helper module for interacting with the browser's clipboard API, primarily for the "Copy to clipboard" functionality.

*   **`./src/hooks/` (Custom React Hooks)**
    This directory contains custom React hooks to encapsulate reusable stateful logic.

    *   `useWindowSize.ts`: A hook to detect and provide the current window width, enabling responsive layout logic for desktop vs. mobile display of post cards.
    *   `useToast.ts`: A hook to manage and display toast notifications globally across the application.
    *   `usePostGenerator.ts`: A central hook that orchestrates the logic for form submission, interaction with the `generate-post` API route, managing loading states, handling API errors, and updating the state with generated posts.

*   **`./src/types/` (TypeScript Type Definitions)**
    This directory contains TypeScript interface and type definitions used throughout the application, ensuring strong type checking.

    *   `index.d.ts`: Contains global types or interfaces that don't fit into a specific module.
    *   `post.d.ts`: Defines interfaces for the structure of a generated LinkedIn post and related data (e.g., `PostVariation`, `GeneratePostRequest`, `GeneratePostResponse`).

## Database Schema Design
SCHEMADESIGN

1.  Introduction

For the Minimum Viable Product (MVP) of the LI Post Generator, the application is designed to be stateless and does not require a persistent database. User inputs are processed in real-time by the Gemini API, and the generated content is displayed transiently on the user interface. No user data, generated posts, or history are stored in MVP. This approach prioritizes rapid development, low cost, and a frictionless user experience.

2.  Future Scope Database Requirements

As the project evolves beyond MVP (e.g., V2 and V3 iterations), a database will become essential to support advanced features such as:
*   **User Authentication and Accounts**: To enable personalized experiences.
*   **Saved Post History**: Allowing users to revisit, edit, and manage their previously generated LinkedIn posts.
*   **Personalization**: Storing user preferences or tracking post performance for AI model fine-tuning.
*   **User Feedback**: Capturing ratings or feedback on generated posts.
*   **Direct Publishing**: If future integrations allow posting directly to LinkedIn, maintaining a record of published content may be beneficial.

The proposed schema below outlines the structure required to support these future capabilities, primarily focusing on user management and post history.

3.  Proposed Schema for Future Iterations (V2+)

The following schema is designed with a relational database in mind (e.g., PostgreSQL, as used by Supabase), but can be adapted for NoSQL solutions like Firestore.

**Table: `Users`**
This table will store user account information.

*   **`user_id`** (Primary Key, UUID or Integer)
    *   Description: Unique identifier for each user.
    *   Constraints: NOT NULL, UNIQUE
*   **`email`** (VARCHAR(255))
    *   Description: User's email address, used for login and notifications.
    *   Constraints: NOT NULL, UNIQUE
*   **`username`** (VARCHAR(100), Optional)
    *   Description: A display name for the user.
*   **`password_hash`** (VARCHAR(255), Optional)
    *   Description: Hashed password if using custom authentication. (Often managed by external auth providers like Supabase Auth or Clerk.dev, in which case this field might not be directly in this table).
*   **`auth_provider_id`** (VARCHAR(255), Optional)
    *   Description: Identifier from an external authentication provider (e.g., Supabase Auth's user ID).
*   **`created_at`** (TIMESTAMP WITH TIME ZONE)
    *   Description: Timestamp when the user account was created.
    *   Constraints: NOT NULL, DEFAULT CURRENT_TIMESTAMP
*   **`updated_at`** (TIMESTAMP WITH TIME ZONE)
    *   Description: Timestamp of the last update to the user's profile.
    *   Constraints: NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

**Table: `GeneratedPosts`**
This table will store the details and content of each set of generated LinkedIn post variations for a specific user.

*   **`post_id`** (Primary Key, UUID or Integer)
    *   Description: Unique identifier for each set of generated posts.
    *   Constraints: NOT NULL, UNIQUE
*   **`user_id`** (Foreign Key, UUID or Integer)
    *   Description: Links to the `Users` table, indicating which user generated these posts.
    *   Constraints: NOT NULL (or NULLABLE if anonymous history tracking is considered), REFERENCES `Users(user_id)` ON DELETE CASCADE
*   **`topic_input`** (TEXT)
    *   Description: The original topic or description provided by the user.
    *   Constraints: NOT NULL
*   **`theme_selected`** (VARCHAR(50))
    *   Description: The theme chosen by the user (e.g., "Professional", "Thought Leadership", "Conversational/Storytelling").
    *   Constraints: NOT NULL
*   **`length_selected`** (INTEGER)
    *   Description: The requested length in words (e.g., 300, 400, 500).
    *   Constraints: NOT NULL
*   **`hashtags_enabled`** (BOOLEAN)
    *   Description: Whether the user requested hashtags (TRUE/FALSE).
    *   Constraints: NOT NULL
*   **`generated_variation_1`** (TEXT)
    *   Description: The full text content of the first generated post variation.
    *   Constraints: NOT NULL
*   **`generated_variation_2`** (TEXT)
    *   Description: The full text content of the second generated post variation.
    *   Constraints: NOT NULL
*   **`generated_variation_3`** (TEXT)
    *   Description: The full text content of the third generated post variation.
    *   Constraints: NOT NULL
*   **`selected_variation_index`** (SMALLINT, Optional)
    *   Description: Index (1, 2, or 3) of the post variation the user chose to copy or interact with most.
*   **`feedback_rating`** (SMALLINT, Optional)
    *   Description: User's feedback on the generation (e.g., 1-5, or a simple "liked" boolean).
*   **`generated_at`** (TIMESTAMP WITH TIME ZONE)
    *   Description: Timestamp when the posts were generated.
    *   Constraints: NOT NULL, DEFAULT CURRENT_TIMESTAMP
*   **`last_edited_at`** (TIMESTAMP WITH TIME ZONE, Optional)
    *   Description: Timestamp if the post content was later edited by the user within the application.
*   **`is_archived`** (BOOLEAN, Optional)
    *   Description: Flag to indicate if the user has archived this post set (e.g., for "soft delete").

4.  Relationships

*   **One-to-Many**: A `User` can generate multiple sets of `GeneratedPosts`.
    *   The `user_id` in the `GeneratedPosts` table acts as a foreign key, linking each post set to the `Users` table.
    *   `ON DELETE CASCADE` ensures that if a user account is deleted, all associated `GeneratedPosts` records are also removed.

5.  Indexing Strategy (Future Optimization)

*   **`Users` table**:
    *   Index `email` for fast lookups during login.
    *   Index `auth_provider_id` if external authentication is heavily used.
*   **`GeneratedPosts` table**:
    *   Index `user_id` for efficient retrieval of a user's post history.
    *   Index `generated_at` for chronological ordering of posts.

This schema provides a robust foundation for extending the LI Post Generator's functionality to include personalized user experiences and content management in future iterations.

## User Flow
USERFLOW

1. Introduction
This document outlines the user flow for the "LI Post Generator", a tool designed to help professionals quickly create engaging LinkedIn posts. The primary goal is to provide a seamless and intuitive experience, enabling users to transform a brief topic into multiple high-quality, structured LinkedIn post variations with minimal effort. This flow covers the core journey from initial input to post generation, display, and interaction.

2. Key Persona
The target user is a busy working professional (e.g., early to mid-career, manager, consultant, founder, MBA student) who aims to grow their LinkedIn presence but faces challenges with consistent content creation. They need a quick, reliable way to turn ideas into polished posts, tailored to specific tones and lengths, without the burden of extensive research or drafting.

3. Core User Journeys

3.1. Flow 1: Successful Post Generation & Copy

Step 1: Arrive on Landing Page

- User navigates to the LI Post Generator's URL.

- **Visual:** The user sees a visually appealing, LinkedIn-inspired landing page. The header is at the top (logo, minimal nav), followed by a prominent hero section (headline, subcopy, abstract pattern). At the center of the screen, the main "Input Card" is visible, inviting interaction.

- **Interaction:** No direct interaction required from the user yet, but the page sets the stage for post creation.

Step 2: Input & Configure Post Details

- **Topic Input:**

  - User locates the "Topic or Description" input field (textarea) within the central Input Card.

  - User types their idea or topic (e.g., "importance of networking in career growth").

  - **Validation & Feedback:**

    - If left empty, a "Generate Posts" attempt will trigger an inline error: "Please enter a topic or description before generating."

    - If input is extremely short (e.g., "AI"), a helper text appears: "Tip: More detail helps generate better posts."

    - If input exceeds 500 characters, it is truncated, and a message appears: "Your input is too long. Please shorten to under 500 characters."

- **Theme Selector:**

  - User selects one of three predefined themes: "Professional", "Thought Leadership", or "Conversational/Storytelling" via a segmented chip group.

  - **Interaction:** Clicking a chip highlights it (e.g., blue fill), indicating it's selected. The previously selected chip reverts to its default (white with border).

  - **Default:** "Professional" is pre-selected.

- **Length Selector:**

  - User selects one of three predefined post lengths in words: "300 words", "400 words", or "500 words" via a segmented chip group.

  - **Interaction:** Similar to the Theme Selector, clicking a chip highlights it as selected.

  - **Default:** "400 words" is pre-selected.

- **Hashtag Toggle:**

  - User interacts with a simple on/off switch labeled "Add hashtags".

  - **Interaction:** Toggling "On" means Gemini will suggest 3-5 relevant hashtags. Toggling "Off" means no hashtags will be included.

  - **Default:** Toggle is "On".

Step 3: Initiate Generation

- User reviews their inputs and clicks the prominent "Generate Posts" button at the bottom of the Input Card.

- **Validation Check:** The system re-validates the topic input. If it's empty, the API call is prevented, and an inline error is shown.

- **Loading State:**

  - The "Generate Posts" button visually indicates a loading state (e.g., disabled, spinner icon).

  - The "Results Display Area" (which might have been hidden or empty before) transitions to show skeleton loaders for three post cards, indicating that content is being fetched.

- **Backend Process:** The system sends the user's topic, chosen theme, length, and hashtag preference to the Gemini API, along with a predefined system message.

Step 4: View Generated Posts

- Upon receiving a successful response from the Gemini API (typically 2-5 seconds), the loading skeletons are replaced by three distinct generated LinkedIn post variations.

- **Desktop/Laptop Layout:**

  - The three generated posts are displayed side-by-side in three equal-width cards. This allows for instant comparison.

- **Mobile/Tablet Layout:**

  - The three posts are displayed in a vertical scroll list, with one full-width card per row, ensuring readability on narrower screens.

- **Card Structure (for each post):**

  - **Header Row:** Contains a badge/label (e.g., "Variation 1", "Professional Tone") and the estimated word count (e.g., "~400 words").

  - **Body Text:** The generated LinkedIn post content, formatted for readability (good line-height, ~70-80 character line width).

  - **Action Row:**

    - **Copy Button:** A primary, clear button labeled "Copy".

    - **Regenerate Button:** A secondary, subtle button (e.g., refresh icon + "Regenerate" text).

    - (Future) "Preview in LinkedIn style" link: Currently a placeholder, planned for later iterations.

Step 5: Copy a Post

- User reads and compares the three generated post variations.

- User selects their preferred post and clicks the "Copy" button located in that post's action row.

- **Feedback:** A confirmation toast message appears briefly (e.g., "Copied to clipboard ✅", for 2 seconds), providing immediate feedback that the content has been copied.

- **Next Action:** The user can then paste the copied content directly into LinkedIn or any other desired application.

3.2. Flow 2: Regenerate a Specific Post

Step 1: View Generated Posts

- User has successfully generated and is currently viewing the three post variations as described in Flow 1, Step 4.

Step 2: Regenerate a Variation

- User finds one of the generated posts (e.g., "Variation 2") not entirely suitable or wants a fresh alternative for that specific slot.

- User clicks the subtle "Regenerate" button beneath that particular post card.

- **Loading State:** Only the specific card for which "Regenerate" was clicked transitions into a loading state (e.g., a skeleton loader appears within that card), while the other two cards remain visible.

- **Backend Process:** The system re-sends the *original* topic, theme, length, and hashtag preferences to the Gemini API. The API generates a *new* post variation, specifically to replace the content in that chosen slot.

- **Display New Post:** Upon successful API response, the new post content replaces the loading state in that specific card. The user can then review this new variation and choose to copy it or regenerate it again.

3.3. Flow 3: Error Handling & Retries

Step 1: Input Validation Errors

- **Scenario: Empty Topic Input**

  - User attempts to click "Generate Posts" with the "Topic or Description" field empty.

  - **Prevention:** The API call is blocked.

  - **Feedback:** An inline error message appears directly below the topic input field: "Please enter a topic or description before generating." (in a distinct error style, e.g., red text).

  - **User Action:** User must enter a topic before proceeding.

- **Scenario: Too Long Topic Input**

  - User pastes an excessively long text (e.g., an essay) into the topic field.

  - **Behavior:** The input is truncated to a safe limit (e.g., 500 characters).

  - **Feedback:** An inline message appears below the topic field: "Your input is too long. Please shorten to under 500 characters."

  - **User Action:** User can choose to shorten their input or proceed with the truncated version.

- **Scenario: Too Short Topic Input**

  - User enters a very brief input (e.g., "AI").

  - **Behavior:** The API call is allowed to proceed.

  - **Feedback:** A helper text appears below the topic field: "Tip: More detail helps generate better posts." This is a suggestion, not a blocking error.

  - **User Action:** User can choose to add more detail or proceed with the current input.

Step 2: API Generation Errors

- **Scenario: Gemini API Failure/Network Issue/Timeout/Empty Response**

  - User initiates generation (Flow 1, Step 3).

  - The Gemini API encounters an error, the network fails, the request times out, or the API returns an empty response.

  - **Feedback:** The loading state in the "Results Display Area" is replaced by an inline error message: "⚡ Post generation failed due to an error. Please try again." or "⚡ Couldn’t generate posts this time. Please try again." (displayed prominently, e.g., in a red banner or section).

  - **Persistence:** The user's original inputs (topic, theme, length, hashtag toggle) remain intact in the Input Card.

  - **User Action:** User can review the error message, potentially adjust their inputs if they suspect an issue, and then click "Generate Posts" again to retry.

- **Scenario: Off-topic/Unsuitable Output (without API error)**

  - User receives generated posts, but they are completely off-topic or inappropriate (rare, but possible). The API itself did not return an error.

  - **Feedback:** No explicit system error message is displayed.

  - **User Action:** The user can either click the "Regenerate" button on specific cards to get new variations or use the "Reset" button (if implemented) in the Input Card to clear all inputs and start afresh. (Future: More sophisticated moderation filters may be added).

4. Wireframe Descriptions & Interaction Details

4.1. Landing Page Structure

- **Header:**

  - **Description:** A slim bar fixed at the top of the viewport.

  - **Content:** Left-aligned project logo ("LI Post Generator"). Right-aligned minimal navigation links ("About", "Pricing", "FAQ").

  - **Interaction:** Sticky behavior with a subtle shadow appearing on scroll. Navigation links are clickable.
- **Hero Section:**

  - **Description:** The prominent section below the header, designed to capture attention.

  - **Content:** Left side features a compelling headline and supporting subcopy explaining the tool's value. Right side displays a subtle abstract visual pattern (e.g., geometric grid or soft gradient blob). A primary call-to-action button, "Generate Posts", initially guides users towards the input section.

  - **Interaction:** The "Generate Posts" button may initially scroll the user down to the Input Card.
- **Input Card (Central Dialogue Box):**

  - **Description:** The core interactive element, centrally positioned on the page. It is presented as a clean, white card on the off-white page background, featuring generous padding, rounded corners (rounded-2xl), and a subtle shadow/border.

  - **Content:**

    - **Topic Input Field:** A multi-line textarea with a clear label "Topic or Description" and a helpful placeholder: "Enter your post topic or description (e.g., 'Key takeaways from a recent industry conference on AI ethics')."

    - **Theme Selector:** A horizontal group of three segmented "pill chips" for "Professional", "Thought Leadership", "Conversational/Storytelling".

    - **Length Selector:** A horizontal group of three segmented "pill chips" for "300 words", "400 words", "500 words".

    - **Hashtag Toggle:** A simple switch component with the label "Add hashtags".

    - **Action Buttons:** A primary, solid blue button labeled "Generate Posts" (rounded-xl) and a secondary, ghost-style "Reset" button.

  - **Interaction:** All input fields are interactive. The chips are selectable. The toggle is switchable. Buttons trigger actions as described in the core flows.
- **Results Display Area:**

  - **Description:** The section where generated posts are presented. Initially hidden or showing a placeholder.

  - **Layout (Desktop/Laptop):** Three equal-width cards arranged horizontally, side-by-side, with 16px gaps between them.

  - **Layout (Mobile/Tablet):** Three full-width cards arranged vertically, one per row, allowing for scrolling.

  - **Card Structure (each generated post card):**

    - **Header Row:** Contains a badge/label (e.g., "Variation 1", "Professional Tone") and the calculated word count (e.g., "~400 words").

    - **Body Text:** The main content of the generated LinkedIn post, formatted for readability (good line-height, ~70-80 char line width).

    - **Action Row:**

      - **Copy Button:** A prominent, solid blue button (primary action).

      - **Regenerate Button:** A subtle, secondary button (refresh icon + "Regenerate" text, ghost style).

      - (Future) "Preview in LinkedIn style" link: A non-functional placeholder in MVP, indicating future capability.

  - **Interaction:** Users can scroll to view all posts on mobile. Buttons within each card are interactive.
- **Footer:**

  - **Description:** Located at the bottom of the page, providing supplementary information.

  - **Content:** Muted links (e.g., "Privacy Policy", "Terms of Service"), copyright information, small type, generous spacing.

  - **Interaction:** Links are clickable.

4.2. Component-Specific Interactions

- **Theme Selector & Length Selector (Chips):**

  - **Behavior:** Clicking an unselected chip makes it active/highlighted (e.g., background fills with primary blue, text turns white), while deselecting any previously active chip in the same group.
  - **Visual:** Unselected chips have a white background with a light border; selected chips have a blue background and white text.
- **Hashtag Toggle:**

  - **Behavior:** A simple switch mechanism. Clicking it toggles its state between "On" and "Off" (e.g., visual change from grey to blue, or vice versa).
- **Generate Button:**

  - **Behavior:** A click initiates the API call. During the API call, the button changes to a disabled state and may display a loading spinner.

  - **Visual:** Solid blue background, white text, rounded-xl. Hover state shows a darker blue. Disabled state is visually distinct (e.g., reduced opacity).
- **Loading States:**

  - **Behavior:** When API calls are in progress (for initial generation or regeneration), visual feedback is provided.

  - **Visual:** For initial generation, the entire results area shows three distinct skeleton loaders for cards. For specific card regeneration, only that card displays a skeleton loader.
- **Generated Post Cards:**

  - **Behavior:** These cards are static displays of text, but contain interactive elements.

  - **Visual:** White background, rounded-2xl corners, subtle shadow and border. Internal padding ensures readability.
- **Copy Button:**

  - **Behavior:** On click, the text content of its associated post is copied to the user's clipboard.

  - **Visual & Feedback:** Solid blue background, white text. Upon successful copy, a toast notification appears for 2 seconds: "Copied to clipboard ✅".
- **Regenerate Button:**

  - **Behavior:** On click, re-triggers the API to generate a new variation specifically for that card's slot, retaining the original input parameters.

  - **Visual:** Ghost style button (e.g., text only or minimal border), smaller than the copy button, often accompanied by a refresh icon. Becomes disabled/shows loading when its card is regenerating.
- **"Preview in LinkedIn style" Link (Future):**

  - **Behavior:** In MVP, this is a non-functional placeholder. Future iterations would open a modal or navigate to a page showing the post rendered as it would appear on LinkedIn.

  - **Visual:** A text link, possibly with an external link icon.

5. States & Feedback

- **Idle State:** The initial landing page display, with the Input Card ready for user interaction. No generated posts are visible.
- **Inputting State:** User is actively typing in the topic field, selecting options, or toggling switches. Input validation messages may appear dynamically below fields.
- **Loading State:**

  - **Initiate Generation:** "Generate Posts" button displays a spinner and is disabled. The Results Display Area shows three skeleton card loaders.

  - **Regenerate Single Post:** The specific card being regenerated displays a skeleton loader within its boundaries; its "Regenerate" button is disabled.
- **Success State:**

  - **Post Generation:** Three distinct post cards are displayed in the Results Area, replacing any loading indicators.

  - **Copy Action:** A transient "Copied to clipboard ✅" toast message appears, then fades after ~2 seconds.
- **Error State:**

  - **Input Validation Errors:** Inline error messages (e.g., red text) appear directly beneath the problematic input field. The API call is prevented until fixed (for critical errors like empty topic).

  - **API Generation Errors:** A prominent inline error message (e.g., "⚡ Post generation failed due to an error. Please try again.") is displayed in the Results Area, replacing any generated posts or loading indicators. The user's input selections remain intact in the Input Card, allowing for easy retry.

## Styling Guidelines
STYLING GUIDELINES DOCUMENT

1.  DESIGN PHILOSOPHY & PRINCIPLES
    The "LI Post Generator" styling is inspired by LinkedIn's professional, clean, and modern branding. Our goal is to create a visually appealing, trustworthy, and enterprise-grade user experience with an artistic touch. The design emphasizes clarity, functionality, and a seamless flow for users.

    Core Principles:
    *   **Professionalism**: Clean lines, muted colors, and a polished aesthetic.
    *   **Clarity & Usability**: Intuitive layout, easy-to-read typography, and clear calls-to-action.
    *   **Modern Aesthetics**: Use of white space, subtle shadows, and purposeful motion.
    *   **LinkedIn-esque**: Harmonize with LinkedIn's visual language without being a direct clone.
    *   **Artistic Subtlety**: Incorporate abstract patterns and thoughtful design elements without distraction.

2.  VISUAL IDENTITY & BRANDING
    Our visual north star draws from:
    *   LinkedIn homepage and feed (card density, spacing, content presentation).
    *   LinkedIn Marketing pages (effective CTA usage, restrained blue applications).
    *   Microsoft Design site (enterprise minimalism, disciplined use of whitespace).

    The overall tone is trustworthy, minimal, and purposeful.

3.  COLOR PALETTE
    Our palette is designed to be crisp, professional, and accessible, using a restrained application of blue and cool neutrals.

    Color Tokens:
    *   **Primary Blue**: `#0A66C2` (LinkedIn-ish Blue) - Used for primary actions, links, and selected states.
    *   **Primary Dark**: `#004182` - Hover state for primary blue elements.
    *   **Background**: `#F3F2EF` (Off-White) - The main page background color, providing a warm, neutral base.
    *   **Surface**: `#FFFFFF` (Pure White) - Used for primary interactive components like cards, dialog boxes, and input fields.
    *   **Text Primary**: `#1F2328` (Charcoal) - Main body text, headings.
    *   **Text Secondary**: `#5E6B75` (Slate) - Secondary text, auxiliary information, muted labels.
    *   **Borders/Dividers**: `#E0E3E7` - Subtle borders for cards, inputs, and separators.
    *   **Accent**: `#0EA5A4` (Teal) - Used sparingly for highlights, secondary badges, or subtle indicators.
    *   **Success State**: `#1A7F37` - Feedback for successful operations (e.g., "Copied!").
    *   **Warning State**: `#B54708` - For alerts requiring user attention (not yet implemented in MVP).
    *   **Error State**: `#B42318` - For indicating errors or validation failures.

    Usage Tip: Keep backgrounds warm-neutral (`#F3F2EF`) and reserve pure white (`#FFFFFF`) for cards. Utilize the primary blue (`#0A66C2`) primarily for Call-to-Actions (CTAs) and clickable elements.

4.  TYPOGRAPHY
    A clean, modern sans-serif typeface ensures readability and a professional appearance.

    *   **Font Family**: Inter (with `System UI` as a fallback for performance and native feel).
    *   **Font Scale (rem)**:
        *   `H1`: 32px (extra large titles)
        *   `H2`: 24px (section titles)
        *   `H3`: 20px (sub-headings, card titles)
        *   `Body`: 16px (main content text)
        *   `Auxiliary`: 14px (small text, labels, metadata, captions)
    *   **Font Weights**:
        *   `600`: Headings (bold)
        *   `400-500`: Body text (regular to medium)
    *   **Line Heights**:
        *   `1.2`: Headings (tight)
        *   `1.6`: Body text (comfortable for readability)
    *   **Links**: Underlined on hover/focus, using `Primary Blue #0A66C2`.

5.  SPACING, RADIUS, & ELEVATION
    Consistency in these elements creates a harmonious and polished interface.

    *   **Spacing Scale (px)**: Based on a 4px grid system.
        *   `4`, `8`, `12`, `16`, `24`, `32`
        *   These values are used for padding, margins, and gaps between elements.
    *   **Border Radius**:
        *   `12-16px`: For primary cards, input fields, and main buttons, giving a "rounded-xl/2xl" feel. Avoid overly rounded "pill" shapes for components where a more mature look is desired.
    *   **Shadows (Elevation)**:
        *   Ultra-subtle, used sparingly for cards and modals to create a sense of depth without heaviness.
        *   Example: `0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.04)`
    *   **Borders**:
        *   `1px solid #E0E3E7`: Used for borders on cards and input fields to define boundaries subtly.

6.  KEY COMPONENTS & LAYOUT

    **6.1. Global Layout**
    *   **Page Background**: The entire page should use the `Background #F3F2EF` color.
    *   **Container Width**: Content should be constrained to a `max-w-7xl` (e.g., 1280px) for desktop, centered on the page, to maintain readability and visual balance.
    *   **Whitespace**: Ample negative space is crucial for an airy and clean aesthetic.

    **6.2. Header**
    *   A slim bar positioned at the top of the page.
    *   **Left**: Project logo (text-based or simple icon).
    *   **Right**: Minimal navigation (e.g., "About", "Pricing", "FAQ").
    *   **Behavior**: Sticky on scroll, with a subtle shadow appearing when scrolled, to indicate elevation.

    **6.3. Hero Section**
    *   Uses a 12-column grid system (`max-w-7xl` container).
    *   **Left (6-7 columns)**: Prominent headline (`H1`) and a descriptive sub-copy (`Body` text).
    *   **Right (5-6 columns)**: Subtle abstract pattern (geometric grid or soft gradient blob) for visual interest, rather than heavy imagery.
    *   **Primary CTA**: A prominent button labeled "Generate Posts".

    **6.4. Input Card (Generator Controls)**
    *   Presented as a `Surface #FFFFFF` card, centered with a `max-w-3xl` width.
    *   **Padding**: `24-32px` interior padding.
    *   **Hierarchy**: Clear visual hierarchy with `24px` gaps between major input groups.
    *   **Components**:
        *   **Topic Input Field**:
            *   A `textarea` for users to enter their post topic or description.
            *   Styling: `Surface #FFFFFF` background, `1px solid #E0E3E7` border, `12-16px` border-radius.
            *   Placeholder text: "Enter your LinkedIn post topic or description..."
            *   Error State: Red border (`Error State #B42318`) and inline error message below.
        *   **Theme Selector**:
            *   Three distinct options: "Professional", "Thought Leadership", "Conversational/Storytelling".
            *   Presentation: Segmented, pill-shaped chips/buttons.
            *   **Unselected State**: `Surface #FFFFFF` background, `1px solid #E0E3E7` border, `Text Primary #1F2328`.
            *   **Selected State**: `Primary Blue #0A66C2` background, `Pure White #FFFFFF` text.
        *   **Length Selector**:
            *   Three options: "300 words", "400 words", "500 words".
            *   Presentation: Similar segmented, pill-shaped chips/buttons as the Theme Selector.
            *   **Unselected State**: `Surface #FFFFFF` background, `1px solid #E0E3E7` border, `Text Primary #1F2328`.
            *   **Selected State**: `Primary Blue #0A66C2` background, `Pure White #FFFFFF` text.
        *   **Hashtag Toggle**:
            *   A simple on/off switch with a clear label "Add hashtags".
            *   **Off State**: Muted `Text Secondary #5E6B75`.
            *   **On State**: `Primary Blue #0A66C2`.
        *   **Action Buttons**:
            *   **Primary Button**: "Generate Posts" (Solid `Primary Blue #0A66C2` background, `Pure White #FFFFFF` text, `12-16px` border-radius).
            *   **Secondary Button**: "Reset" (Ghost button: transparent background, `Primary Blue #0A66C2` text, `1px solid #E0E3E7` border, `12-16px` border-radius).

    **6.5. Results Display (Generated Posts)**
    *   **Container Width**: `max-w-4xl`, centered.
    *   **Gaps**: `16px` gaps between individual post cards.
    *   **Layout (Desktop/Laptop)**:
        *   Three columns side-by-side, each of equal width.
        *   Allows for instant comparison of posts.
    *   **Layout (Mobile/Tablet)**:
        *   Switches to a vertical scroll list.
        *   Each card takes full width for optimal readability.
    *   **Card Structure (for each generated post)**:
        *   Each card is a `Surface #FFFFFF` with `12-16px` border-radius, `1px solid #E0E3E7` border, and a subtle shadow.
        *   **Header Row**:
            *   **Badge/Label**: E.g., “Variation 1” or “Professional Tone” (using `Text Secondary` or `Accent` for the badge background/text).
            *   **Word Count**: E.g., "~400 words" (`Auxiliary` text, `Text Secondary #5E6B75`).
        *   **Body Text**:
            *   The generated LinkedIn post.
            *   Formatted with a good `1.6` line-height for readability.
            *   Line length should be approximately `70–80 characters` (max-width on text content within the card).
            *   Uses `Body` text size and `Text Primary #1F2328` color.
        *   **Action Row**:
            *   **Copy Button**: Primary action. Large, clear, solid `Primary Blue #0A66C2` background, `Pure White #FFFFFF` text.
            *   **Regenerate Button**: Secondary action. Subtle, maybe an icon (refresh) plus "Regenerate" text, or a ghost button style. Uses `Text Secondary #5E6B75` color.
            *   (Future) "Preview in LinkedIn style" link: A tertiary action, using `Primary Blue #0A66C2` as a link.

    **6.6. Footer**
    *   Muted links, small type (`Auxiliary` text), and plenty of vertical space.
    *   Uses `Text Secondary #5E6B75` for text.

    **6.7. Error & Loading States**
    *   **API Failure/Empty Response**:
        *   Displayed as an inline message within the results area (or a dedicated banner).
        *   Text: “⚡ Post generation failed due to an error. Please try again.” or “⚡ Couldn’t generate posts this time. Please try again.”
        *   Styling: `Error State #B42318` text color, potentially a subtle red background for the message area.
        *   Crucially, form inputs should remain intact.
    *   **Empty Input Validation**:
        *   Inline error message directly below the topic textbox.
        *   Text: “Please enter a topic or description before generating.”
        *   Styling: `Error State #B42318` text color.
    *   **Too Short Input (Helper Text)**:
        *   Inline helper text below the topic textbox.
        *   Text: “Tip: More detail helps generate better posts.”
        *   Styling: `Text Secondary #5E6B75` text color.
    *   **Too Long Input (Truncation Warning)**:
        *   Inline message below the topic textbox.
        *   Text: “Your input is too long. Please shorten to under 500 characters.”
        *   Styling: `Warning State #B54708` text color.
    *   **Loading States**:
        *   During API calls (Gemini generation), display loading skeletons or spinners in the results area. This provides immediate feedback and manages user expectations for the `2-5 second` API response time.

7.  ICONOGRAPHY & IMAGERY
    *   **Icons**: Stroked line icons are preferred (e.g., from `lucide-react`).
        *   Size: `20-24px`.
        *   Stroke Weight: `1.5px`.
        *   Color: Primarily `Text Secondary #5E6B75` or `Primary Blue #0A66C2` for interactive elements.
    *   **Illustrations**: Abstract grids, subtle gradients, and light 3D blobs.
        *   Avoid cartoonish characters or overly complex graphics.
        *   Maintain a light and professional feel.

8.  MOTION & MICRO-INTERACTIONS
    Animations should be subtle, purposeful, and enhance the user experience without being distracting.

    *   **Durations**:
        *   `150–220ms` for hover/press states (buttons, links, chips).
        *   `250–300ms` for card reveals or larger component transitions.
    *   **Easings**:
        *   `ease-out` for elements entering the view (smoother start, quick finish).
        *   `ease-in` for elements exiting the view (quick start, smoother finish).
    *   **Feedback**:
        *   **Copy Action**: A toast notification "Copied to clipboard ✅" appearing for `2 seconds`.
        *   **Regenerate Action**: The specific card will show a skeleton loader while the API request is processed.
        *   **Button Presses**: Subtle scale or opacity changes on press.

9.  ACCESSIBILITY
    Ensuring the application is usable by everyone is paramount.

    *   **Color Contrast**: All text, buttons, and critical UI elements must meet WCAG AA contrast ratio of `4.5:1` against their background.
    *   **Hit Targets**: Interactive elements (buttons, chips, toggles) should have a minimum hit target area of `44x44px`.
    *   **Keyboard Navigation**: Visible focus rings must be present for all interactive elements.
        *   Example: `outline: 2px solid #0A66C2` with a subtle offset.
    *   **Reduced Motion**: Respect `prefers-reduced-motion` settings in user operating systems, disabling non-essential animations and transitions for those users.
    *   **Semantic HTML**: Use appropriate semantic HTML elements for structure and meaning.

10. DO'S & DON'TS
    **DO:**
    *   Prioritize lots of white/neutral space.
    *   Maintain a restrained usage of `Primary Blue #0A66C2`.
    *   Establish a clear typographic rhythm.
    *   Use card-based layouts for content organization.
    *   Focus on subtle, purposeful motion.

    **DON'T:**
    *   Overuse gradients or apply them everywhere.
    *   Introduce rainbow accents or a wide array of bright colors.
    *   Implement heavy or multiple drop shadows.
    *   Use overly rounded "full-pill" chips (keep component rounding grown-up, e.g., `rounded-xl`).
    *   Incorporate cartoonish or overly playful imagery.

11. TAILWIND TOKEN HINTS (Implementation Snippets)
    These provide a quick reference for developers using Tailwind CSS to implement the styling guidelines.

    *   **Cards**: `rounded-2xl border border-slate-200 shadow-sm bg-white`
    *   **Primary Button**: `bg-[#0A66C2] hover:bg-[#004182] text-white rounded-xl`
    *   **Unselected Chips**: `bg-white border border-slate-200 text-slate-900 rounded-lg`
    *   **Selected Chips**: `bg-[#0A66C2] text-white rounded-lg`
    *   **Page Background**: `bg-[#F3F2EF] text-slate-900`
    *   **Textarea/Input Field**: `bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-blue-500`
    *   **Error Text**: `text-[#B42318]`
    *   **Focus Ring**: `focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-2`
