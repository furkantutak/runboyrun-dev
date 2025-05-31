"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useTranslation } from "next-i18next";
import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";

interface PromptSearchProps {
  onSearch: (query: string) => void;
}

export default function PromptSearch({ onSearch }: PromptSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation("prompt");

  const debouncedSearch = useDebouncedCallback((value: string) => {
    onSearch(value);
  }, 300);

  return (
    <div className="relative w-full max-w-lg mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={t("search.placeholder")}
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(e.target.value);
            debouncedSearch(e.target.value);
          }}
          className="pl-9 pr-4"
        />
      </div>
    </div>
  );
} 