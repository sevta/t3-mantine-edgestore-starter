import { EdgeStoreProvider } from "@/lib/edgestore";
import { theme } from "@/lib/theme";
import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ModalsProvider } from "@mantine/modals";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";
import PatchLoader from "./_components/patch-loader";
import AuthProvider from "./_providers/auth-provider";

export const metadata = {
  title: "Starter",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <PatchLoader />
        <AuthProvider>
          <EdgeStoreProvider>
            <TRPCReactProvider cookies={cookies().toString()}>
              <MantineProvider theme={theme}>
                <ModalsProvider
                  labels={{
                    confirm: "Confirm",
                    cancel: "Cancel",
                  }}
                  modalProps={{
                    overlayProps: {
                      blur: 18,
                      backgroundOpacity: 0.3,
                    },
                    centered: true,
                  }}
                >
                  {children}
                </ModalsProvider>
              </MantineProvider>
            </TRPCReactProvider>
          </EdgeStoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
