"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({children}: { children: React.ReactNode }){
  const router = useRouter();

	return (
		<NextUIProvider>
			{children}
		</NextUIProvider>
	);
}
