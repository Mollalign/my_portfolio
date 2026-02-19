"use client";

import { use, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SharedPageProps {
  params: Promise<{ token: string }>;
}

export default function SharedPage({ params }: SharedPageProps) {
  const { token } = use(params);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
            Mollalign
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          {/* Card */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" x2="12" y1="2" y2="15" />
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-center text-foreground mb-2">
              Shared Conversation
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              Someone shared a conversation from Informatics Tutor with you
            </p>

            {/* Share Code Box */}
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <p className="text-xs text-muted-foreground mb-2 text-center uppercase tracking-wider">
                Share Code
              </p>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-background rounded-lg px-4 py-3 text-sm font-mono text-foreground break-all border border-border">
                  {token}
                </code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="shrink-0"
                >
                  {copied ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  )}
                </Button>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-4">
              <h2 className="font-semibold text-foreground">How to view:</h2>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                    1
                  </span>
                  <span>Open the <strong className="text-foreground">Informatics Tutor</strong> app</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                    2
                  </span>
                  <span>Go to <strong className="text-foreground">Profile → Browse Shared</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
                    3
                  </span>
                  <span>Paste the share code above and tap <strong className="text-foreground">View</strong></span>
                </li>
              </ol>
            </div>

            {/* App Store Links (placeholder) */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center mb-4">
                Don&apos;t have the app yet?
              </p>
              <div className="flex justify-center gap-3">
                <Button variant="outline" size="sm" disabled>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  App Store
                </Button>
                <Button variant="outline" size="sm" disabled>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  Play Store
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Coming soon
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            <Link href="/" className="hover:text-primary transition-colors">
              ← Back to Portfolio
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
