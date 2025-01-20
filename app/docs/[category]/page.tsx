import { notFound } from "next/navigation";

// This would typically come from a CMS or API
const docsContent = {
  "getting-started": {
    title: "Getting Started",
    description: "Learn how to get started with our platform",
    sections: [
      {
        title: "Installation",
        content: "Follow these steps to install and set up your environment...",
      },
      {
        title: "Configuration",
        content: "Configure your application with these essential settings...",
      },
    ],
  },
  "components": {
    title: "Components",
    description: "Explore our library of reusable components",
    sections: [
      {
        title: "Button",
        content: "Buttons allow users to trigger actions...",
      },
      {
        title: "Input",
        content: "Input components for collecting user data...",
      },
    ],
  },
  "api": {
    title: "API Reference",
    description: "Comprehensive API documentation",
    sections: [
      {
        title: "Authentication",
        content: "Learn about our authentication methods...",
      },
      {
        title: "Endpoints",
        content: "Explore available API endpoints...",
      },
    ],
  },
  "examples": {
    title: "Examples",
    description: "Real-world examples and use cases",
    sections: [
      {
        title: "Basic Usage",
        content: "Simple examples to get you started...",
      },
      {
        title: "Advanced Patterns",
        content: "Complex patterns and best practices...",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(docsContent).map((category) => ({
    category,
  }));
}

export default function DocsPage({ params }: { params: { category: string } }) {
  const category = params.category;
  const content = docsContent[category as keyof typeof docsContent];

  if (!content) {
    notFound();
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">{content.title}</h1>
        <p className="mt-2 text-xl text-muted-foreground">
          {content.description}
        </p>
        <div className="mt-10 space-y-10">
          {content.sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>{section.content}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}