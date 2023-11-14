"use client"

import * as React from "react";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons"; // Assuming this exists, otherwise replace with an import from 'react-icons'

export function GitHubButton() {
  return (
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="icon">
        <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
        <span className="sr-only">GitHub</span>
      </Button>
    </a>
  );
}
