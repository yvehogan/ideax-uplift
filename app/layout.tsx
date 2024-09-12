import type { Metadata } from "next";
import { useEffect, useState } from "react";
import { Instrument_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import localfont from "next/font/local";

import "./globals.css";
import Head from "next/head";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
});

const instrument = localfont({
  src: [
    {
      path: "../public/fonts/InstrumentSans-Regular.ttf",
    },
  ],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Uplift",
  description:
    "Empowering NGOs with innovative tools to enhance finance management, access funding, and maintain transparency.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=1024" />
      </Head>
      <body className={`${instrumentSans.className} ${instrument.variable}`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
