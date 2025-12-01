"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Download, Edit2, FileText, FileVideo, Image } from "lucide-react";

export default function UserProfilePage() {
const [uploadedFiles, setUploadedFiles] = useState([
{ id: 1, name: "brand_logo.png", type: "image/png", status: "Embedded" },
{ id: 2, name: "intro_video.mp4", type: "video/mp4", status: "Pending" },
{ id: 3, name: "brochure.pdf", type: "application/pdf", status: "Embedded" },
]);

return ( <div className="ml-20 min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white p-10 flex flex-col space-y-8 justify-center">
  {/* Header */}
  <motion.h1
    className="text-4xl font-bold mb-4"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    User Profile
  </motion.h1>

  <p className="text-gray-300 mb-8 max-w-2xl">
    Manage your account information and view the status of your uploaded assets.
  </p>

  {/* User Info */}
  <motion.div
    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <User size={80} className="text-blue-400" />
    <div className="flex-1 flex flex-col space-y-2">
      <h2 className="text-2xl font-semibold">John Doe</h2>
      <p className="text-gray-300">Email: john.doe@example.com</p>
      <p className="text-gray-300">Role: User</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-2 w-36 py-2 bg-blue-500 rounded-xl font-semibold text-white flex items-center justify-center"
      >
        <Edit2 size={18} className="mr-2" /> Edit Profile
      </motion.button>
    </div>
  </motion.div>

  {/* Uploaded Assets */}
  <motion.div
    className="mt-8 flex flex-col space-y-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h2 className="text-2xl font-semibold">Uploaded Assets</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {uploadedFiles.map(file => (
        <motion.div
          key={file.id}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex flex-col items-center space-y-2 shadow-lg"
          whileHover={{ scale: 1.03 }}
        >
          {file.type.startsWith("image") && <Image size={40} className="text-purple-400" />}
          {file.type.startsWith("video") && <FileVideo size={40} className="text-yellow-400" />}
          {file.type === "application/pdf" && <FileText size={40} className="text-red-400" />}
          <p className="text-gray-300 text-sm truncate max-w-[150px]">{file.name}</p>
          <p className={`text-sm font-semibold ${file.status === "Embedded" ? "text-green-400" : "text-yellow-400"}`}>
            {file.status}
          </p>
          {file.status === "Embedded" && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center px-3 py-1 bg-blue-500 rounded-xl font-semibold text-white mt-2"
            >
              <Download size={16} className="mr-1" /> Download
            </motion.button>
          )}
        </motion.div>
      ))}
    </div>
  </motion.div>
</div>

);
}
