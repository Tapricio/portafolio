import styles from "./page.module.css";
import Index from "@/components/Index/Index";

export default function Home() {
  return (
    <div className="w-[80%] mx-auto h-[5000px] bg-red-400">
      <Index />
    </div>
  );
}
