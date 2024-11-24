import { Card } from "@/components/Card";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-900">
      <Card name="Jeroen" title="The GOAT 🐐" since="22 Jul 2022" />
    </main>
  );
}