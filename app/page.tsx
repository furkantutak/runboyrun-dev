import Image from "next/image";
import HeroSection from "@/components/landing/HeroSection";
import AboutRunBoyRun from "@/components/landing/AboutRunBoyRun";
import TechStackShowcase from "@/components/landing/TechStackShowcase";
import UseCaseCards from "@/components/landing/UseCaseCards";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/Footer";
import { redirect } from "next/navigation";
import { i18n } from "./i18n-settings";

export default function Home() {
  redirect(`/${i18n.defaultLocale}`);
}
