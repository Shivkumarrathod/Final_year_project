"use client";

import { motion } from "framer-motion";
import { Layers, Eye, Radar, ShieldCheck, Fingerprint, GlobeLock } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white overflow-x-hidden min-h-screen pl-6">

      {/* Floating Gradient Blobs */}
      <motion.div
        className="absolute top-32 left-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 bg-rose-500/20 blur-[120px] rounded-full"
        animate={{ x: [0, -40, 40, 0], y: [0, 50, -50, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 space-y-6">
        
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SmartBAM — INN Watermarking & Brand Protection
        </motion.h1>

        <motion.p
          className="text-gray-300 max-w-2xl leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Secure your brand assets using INN-based watermarking, authenticity prediction, 
          continuous monitoring, and AI-powered brand value protection.
        </motion.p>

        <Link href="/embedding">
          <motion.div
            className="px-8 py-3 mt-4 rounded-xl bg-white text-black font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform inline-block cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start INN Watermarking
          </motion.div>
        </Link>
      </section>

      {/* FEATURES */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 md:px-20 py-12">
        {[
          {
            icon: <Layers size={36} className="text-purple-400" />,
            title: "INN Watermarking",
            text: "Embed reversible neural fingerprints into assets with zero visual distortion."
          },
          {
            icon: <Eye size={36} className="text-amber-400" />,
            title: "INN Watermark Prediction",
            text: "Instantly verify if the watermark exists and evaluate authenticity."
          },
          {
            icon: <Radar size={36} className="text-teal-400" />,
            title: "Continuous Monitoring",
            text: "Track your assets across platforms and detect unauthorized reuse."
          },
          {
            icon: <ShieldCheck size={36} className="text-red-400" />,
            title: "Brand Value Protection",
            text: "Prevent digital impersonation and identity misuse with AI forensics."
          },
          {
            icon: <Fingerprint size={36} className="text-pink-400" />,
            title: "Neural Fingerprint Safety",
            text: "INN ensures any tampering breaks the watermark, enabling instant detection."
          },
          {
            icon: <GlobeLock size={36} className="text-green-400" />,
            title: "Global Asset Surveillance",
            text: "Monitor asset spread, identify risk patterns, and detect brand leaks."
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-3"
          >
            <div>{feature.icon}</div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.text}</p>
          </motion.div>
        ))}
      </section>

      {/* ABOUT SECTION */}

      {/* FOOTER */}
      <footer className="bg-neutral-900 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} SmartBAM • INN Watermarking & Brand Protection System
      </footer>
    </div>
  );
}
