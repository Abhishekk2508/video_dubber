import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import "../src/styles/globals.css"; // Import Tailwind CSS

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
