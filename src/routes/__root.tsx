import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Khayyam- The Food Pavilion" },
      { name: "description", content: "Khayyam The Food Pavilion — top-rated Pakistani & Continental restaurant in Faisalabad. Fresh food, elegant ambiance & easy online ordering. Visit us today!" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Khayyam- The Food Pavilion" },
      { property: "og:description", content: "Khayyam The Food Pavilion — top-rated Pakistani & Continental restaurant in Faisalabad. Fresh food, elegant ambiance & easy online ordering. Visit us today!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Khayyam- The Food Pavilion" },
      { name: "twitter:description", content: "Khayyam The Food Pavilion — top-rated Pakistani & Continental restaurant in Faisalabad. Fresh food, elegant ambiance & easy online ordering. Visit us today!" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0e0c74f3-06dc-43b6-9312-a518c5d814a2/id-preview-d8dd09f1--f16f7622-c787-4662-9891-920b025a0722.lovable.app-1778027570952.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0e0c74f3-06dc-43b6-9312-a518c5d814a2/id-preview-d8dd09f1--f16f7622-c787-4662-9891-920b025a0722.lovable.app-1778027570952.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
