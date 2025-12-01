"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Cpu, Activity, User } from "lucide-react";

const menuItems = [
  { name: "Home", icon: Home, href: "/", tooltip: "Home" },
  { name: "INN Embedding", icon: Grid, href: "/embedding", tooltip: "INN Embedding" },
  { name: "INN Prediction", icon: Cpu, href: "/prediction", tooltip: "INN Prediction" },
  { name: "Monitoring", icon: Activity, href: "/monitoring", tooltip: "Monitoring" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed left-0 top-0 h-screen w-20 
                 bg-neutral-800 border-r border-neutral-700 
                 flex flex-col justify-between py-6 z-50"
    >
      {/* TOP SECTION */}
      <div className="flex flex-col items-center space-y-8">
        <motion.div whileHover={{ scale: 1.1 }} className="text-xl font-bold tracking-widest">
          SB
        </motion.div>

        {menuItems.map(({ name, icon: Icon, href, tooltip }) => {
          const active = pathname === href;

          return (
            <Link key={name} href={href}>
              {/* Tooltip Wrapper */}
              <div className="relative group flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`p-3 rounded-xl cursor-pointer transition-colors ${
                    active ? "bg-neutral-600 text-white" : "text-neutral-400 hover:bg-neutral-700"
                  }`}
                >
                  <Icon size={22} />
                </motion.div>

                {/* TOOLTIP */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{}}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute left-16 top-1/2 -translate-y-1/2 
                             px-3 py-1 rounded-md text-sm 
                             bg-neutral-700 text-white 
                             opacity-0 group-hover:opacity-100
                             whitespace-nowrap shadow-md pointer-events-none"
                >
                  {tooltip}
                </motion.div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* USER ICON */}
      <motion.div
        whileHover={{ scale: 1.15 }}
        className="p-3 mx-auto rounded-xl bg-neutral-700 text-neutral-300 cursor-pointer"
      >
        <User size={22} />
      </motion.div>
    </motion.aside>
  );
}
