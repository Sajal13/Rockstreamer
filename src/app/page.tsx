import AnimateLink from "@/components/base/AnimateLink";
import { useTheme } from "next-themes";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="">
      Hi there! This is a starter template for Next.js 13 with Tailwind CSS and
      TypeScript. You can start building your app by editing this page.
      <AnimateLink href="/">Home</AnimateLink>
      <Loading />
    </div>
  );
}
