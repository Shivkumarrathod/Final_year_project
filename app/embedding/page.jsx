"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Image, FileVideo, FileText, Upload, CheckCircle2, X } from "lucide-react";

export default function EmbeddingPage() {
  const [file, setFile] = useState(null);
  const [embedding, setEmbedding] = useState(false);
  const [resultFile, setResultFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setResultFile(null);
    setShowPopup(false);
  };

  const startEmbedding = () => {
    if (!file) return;

    setEmbedding(true);
    setResultFile(null);
    setShowPopup(false);

    // Simulate embedding (replace with actual API call)
    setTimeout(() => {
      setEmbedding(false);
      setResultFile(file);
      setShowPopup(true);
    }, 3000);
  };

  return (
    <div className="ml-20 min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white p-10 flex flex-col justify-center">

      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-4"
      >
        INN Embedding
      </motion.h1>

      <p className="text-gray-300 mb-8 max-w-2xl">
        Upload any digital asset (Image, Video, or PDF) and embed a secure reversible watermark
        using an INN (Invertible Neural Network). This ensures authenticity without altering visual quality.
      </p>

      {/* Main Section: Left Upload/Preview + Right Controls */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT: Upload + Preview */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="lg:w-2/5 w-full bg-white/5 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 flex flex-col items-center text-center space-y-6"
        >
          {/* Upload Box */}
          <label className="w-full flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-neutral-600 rounded-xl py-10 mb-4 hover:border-purple-500 transition">
            <Upload size={50} className="text-purple-400 mb-2" />
            <span className="text-lg text-gray-300">Click to upload or drag & drop</span>
            <span className="text-sm text-gray-500">Supported: Images, Videos, PDFs</span>
            <input type="file" className="hidden" onChange={handleFile} />
          </label>

          {/* Preview Box */}
          <div className="w-full bg-white/10 border border-neutral-700 rounded-xl p-4 flex flex-col items-center justify-center space-y-2 min-h-[100px]">
            <h2 className="text-lg font-semibold text-gray-200">Preview</h2>
            {file ? (
              <div className="flex flex-col items-center space-y-1">
                {file.type.startsWith("image") && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="w-24 h-24 object-contain rounded-lg border border-neutral-600"
                  />
                )}
                {file.type.startsWith("video") && <FileVideo size={32} className="text-yellow-400" />}
                {file.type === "application/pdf" && <FileText size={32} className="text-red-400" />}
                <span className="text-gray-300 text-sm truncate max-w-[150px]">{file.name}</span>
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No file uploaded yet</p>
            )}
          </div>
        </motion.div>

        {/* RIGHT: Instructions + Action */}
        <div className="lg:w-3/5 w-full flex flex-col space-y-6">
          <motion.div
            className="bg-white/5 backdrop-blur-md border border-neutral-700 rounded-2xl p-6 flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-semibold text-gray-200">Instructions</h2>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>Upload your digital asset (image, video, or PDF).</li>
              <li>Click "Embed Watermark" to process the file using INN.</li>
              <li>Preview is always visible on the left panel.</li>
              <li>After embedding, a pop-up will allow you to download the watermarked file.</li>
            </ul>
          </motion.div>

          {/* Embed Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startEmbedding}
            className="w-full py-4 bg-purple-500 hover:bg-purple-600 transition rounded-xl font-semibold text-white"
          >
            {embedding ? "Embedding..." : "Embed Watermark"}
          </motion.button>

          {/* Embedding Progress */}
          {embedding && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="mx-auto border-4 border-purple-400 border-t-transparent w-16 h-16 rounded-full"
            />
          )}
        </div>
      </div>

      {/* DOWNLOAD POPUP */}
      {showPopup && resultFile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-neutral-900 rounded-2xl p-8 flex flex-col items-center space-y-6 w-80 text-center"
          >
            <CheckCircle2 size={48} className="text-green-400" />
            <h2 className="text-xl font-semibold text-white">Embedding Completed!</h2>
            <p className="text-gray-300 text-sm">Your file is now watermarked and ready to download.</p>
            <a
              href={URL.createObjectURL(resultFile)}
              download={`watermarked-${resultFile.name}`}
              className="px-6 py-3 bg-green-500 rounded-xl hover:bg-green-600 transition font-semibold text-white"
            >
              Download File
            </a>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-2 text-gray-400 hover:text-white transition"
            >
              <X size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}

    </div>
  );
}
