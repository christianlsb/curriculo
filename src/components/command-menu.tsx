"use client";

import * as React from "react";
import { UserLogin } from "./user-login";
import { NewPost } from "./new-post";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [showNewPostModal, setShowNewPostModal] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [showLoginModal, setShowLoginModal] = React.useState(false);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    setShowLoginModal(false);
    setShowNewPostModal(true);
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden max-md:hidden">
        Pressione{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">CTRL +</span>J
        </kbd>{" "}
        para abrir o menu de comando
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Escreva o comando ou pesquise..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Ações">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                if (loggedIn) {
                  setShowNewPostModal(true);
                } else {
                  setShowLoginModal(true);
                }
              }}
            >
              <span>Criar post</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <span>Print</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>

      {showLoginModal && <UserLogin onLoginSuccess={handleLoginSuccess} />}

      {showNewPostModal && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
            onClick={() => setShowNewPostModal(false)}
          />
          <NewPost onClose={() => setShowNewPostModal(false)} />
        </>
      )}
    </>
  );
};
