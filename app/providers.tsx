"use client";
import React from "react";
import { ChakraProvider, createSystem } from "@chakra-ui/react";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ChakraProvider
        value={createSystem({
          theme: {
            tokens: {
              colors: {
                navy: { value: "#293B59" },
                tea: { value: "#479DA5" },
              },
            },
          },
        })}
      >
        {children}
      </ChakraProvider>
    </div>
  );
}
