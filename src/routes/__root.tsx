import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import WhatsAppButton from "@/components/WhatsAppButton";

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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { title: "SoluAI — Agência de Automação com IA · Atendimento, Vendas e Processos" },
  { name: "description", content: "Cada lead sem resposta e cada follow-up esquecido custa dinheiro. A SoluAI automatiza sua operação do jeito que ela já funciona — sem você precisar mudar nada. Diagnóstico gratuito." },
  { name: "keywords", content: "automação com IA, agência de automação, agente de WhatsApp, automação de atendimento, automação de vendas, automação de processos, agente de IA, Brasil" },
  { name: "author", content: "SoluAI" },
  { name: "robots", content: "index, follow" },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://soluai.com.br/" },
  { property: "og:title", content: "SoluAI — Seu negócio funcionando. Sem você no meio." },
  { property: "og:description", content: "Cada lead sem resposta e cada follow-up esquecido custa dinheiro. A SoluAI automatiza sua operação do jeito que ela já funciona — sem você precisar mudar nada." },
  { property: "og:image", content: "https://soluai.com.br/og-image.png" },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:locale", content: "pt_BR" },
  { property: "og:site_name", content: "SoluAI" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "SoluAI — Seu negócio funcionando. Sem você no meio." },
  { name: "twitter:description", content: "Cada lead sem resposta e cada follow-up esquecido custa dinheiro. A SoluAI automatiza sua operação do jeito que ela já funciona." },
  { name: "twitter:image", content: "https://soluai.com.br/og-image.png" },
      { name: "google-site-verification", content: "GkXoJD0MJqGyH4Ya1bPI7MpfP245zUBp8xyPSiPsYKg" },
],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

