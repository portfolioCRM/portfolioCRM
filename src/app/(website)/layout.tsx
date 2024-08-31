import "../globals.css";
import type { Metadata } from "next";
import { Layout, FixedPlugin, Footer, Navbar } from "@/components";
import React from "react";

export const metadata: Metadata = {
  title: "Raed Rdhaounia",
  description: "portfolio for  a software developer Raed Rdhaounia",
};

export default async function RootLayout({
  children,
  hero,
  clients,
  skills,
  resume,
  testimonial,
  popularClients,
  contactForm,
  auth,
}: {
  readonly children: React.ReactNode;
  readonly hero: React.ReactNode;
  readonly clients: React.ReactNode;
  readonly skills: React.ReactNode;
  readonly resume: React.ReactNode;
  readonly testimonial: React.ReactNode;
  readonly popularClients: React.ReactNode;
  readonly contactForm: React.ReactNode;
  readonly auth: React.ReactNode;
}) {
  return (
    <Layout>
      <Navbar />
      {hero}
      {clients}
      {skills}
      {resume}
      {testimonial}
      {popularClients}
      {contactForm}
      {auth}
      {children}
      <Footer />
      <FixedPlugin />
    </Layout>
  );
}
