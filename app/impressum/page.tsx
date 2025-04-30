import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | devware.",
  description: "Impressum",
};

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="w-full md:w-[860px] mx-auto px-8">
        <h1 className="text-4xl font-bold tracking-tight mb-8 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
          Impressum
        </h1>
        <div className="prose prose-invert max-w-none">
          {/* Hier kommt später der Impressum-Inhalt */}
        </div>
      </div>
    </div>
  );
}
