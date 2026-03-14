"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            View the full formula breakdown
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            See exactly what's inside, the research behind each ingredient, and why the doses matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formula">
              <Button size="lg" className="h-12 text-base px-8 rounded-md">
                Inside the Formula
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/product">
              <Button size="lg" variant="outline" className="h-12 text-base px-8 rounded-md border-primary text-primary hover:bg-primary/5">
                Pre-Order Peak Performance
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
