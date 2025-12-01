"use client";

import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, CheckCircle, FileText } from "lucide-react";

const dummyAssets = [
{ id: 1, name: "BrandLogo.png", type: "Image", status: "Safe", lastChecked: "2025-12-01 10:00 AM" },
{ id: 2, name: "PromoVideo.mp4", type: "Video", status: "Tampered", lastChecked: "2025-12-01 10:05 AM" },
{ id: 3, name: "Report.pdf", type: "PDF", status: "Safe", lastChecked: "2025-12-01 10:10 AM" },
];

export default function MonitorPage() {
return ( <div className="ml-20 min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white p-10">
  {/* Header */}
  <motion.h1
    className="text-4xl font-bold mb-6"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    Asset Monitoring Dashboard
  </motion.h1>

  <p className="text-gray-300 mb-10 max-w-2xl">
    Continuous monitoring of your digital assets with INN verification, deepfake detection, 
    and anomaly analysis to protect your brand value.
  </p>

  {/* Stats Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
    >
      <ShieldCheck size={36} className="text-green-400 mb-2" />
      <h3 className="font-semibold text-lg">Verified Assets</h3>
      <p className="text-gray-300 text-2xl mt-2">{dummyAssets.filter(a => a.status === "Safe").length}</p>
    </motion.div>

    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
    >
      <AlertTriangle size={36} className="text-red-400 mb-2" />
      <h3 className="font-semibold text-lg">Tampered Assets</h3>
      <p className="text-gray-300 text-2xl mt-2">{dummyAssets.filter(a => a.status === "Tampered").length}</p>
    </motion.div>

    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
    >
      <CheckCircle size={36} className="text-blue-400 mb-2" />
      <h3 className="font-semibold text-lg">Total Assets</h3>
      <p className="text-gray-300 text-2xl mt-2">{dummyAssets.length}</p>
    </motion.div>
  </div>

  {/* Asset Table */}
  <motion.div
    className="overflow-x-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    <table className="min-w-full divide-y divide-neutral-700">
      <thead className="bg-neutral-800">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">Asset</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">Type</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">Status</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">Last Checked</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-700">
        {dummyAssets.map(asset => (
          <tr key={asset.id} className="hover:bg-white/10 transition-colors">
            <td className="px-6 py-4 flex items-center space-x-2">
              <FileText size={20} />
              <span>{asset.name}</span>
            </td>
            <td className="px-6 py-4">{asset.type}</td>
            <td className={`px-6 py-4 font-semibold ${asset.status === "Safe" ? "text-green-400" : "text-red-400"}`}>
              {asset.status}
            </td>
            <td className="px-6 py-4">{asset.lastChecked}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </motion.div>
</div>

);
}
