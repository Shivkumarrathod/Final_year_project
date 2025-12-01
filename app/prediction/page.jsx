"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, X, AlertTriangle, FileVideo, FileText, Image, Upload } from "lucide-react";

export default function PredictionPage() {
  const [file, setFile] = useState(null);
  const [predicting, setPredicting] = useState(false);
  const [result, setResult] = useState(null); // { status: "Authentic"/"Tampered", confidence: 0-100 }
  const [showPopup, setShowPopup] = useState(false);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
    setShowPopup(false);
  };

  const startPrediction = () => {
    if (!file) return;

    setPredicting(true);
    setResult(null);
    setShowPopup(false);

    // Simulate API call to predict authenticity
    setTimeout(() => {
      setPredicting(false);
      // Example result, replace with real API result
      const fakeResult = {
        status: Math.random() > 0.5 ? "Authentic" : "Tampered",
        confidence: Math.floor(Math.random() * 30) + 70, // 70-100%
      };
      setResult(fakeResult);
      setShowPopup(true);
    }, 3000);
  };

  return (
    <div className="ml-20 min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white p-10 flex flex-col justify-center">

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-4"
      >
        INN Prediction
      </motion.h1>

      <p className="text-gray-300 mb-8 max-w-2xl">
        Upload a digital asset (Image, Video, or PDF) to verify authenticity using INN-based reversible
        watermarking and AI-powered anomaly detection.
      </p>

      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT: Upload + Preview */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="lg:w-2/5 w-full bg-white/5 backdrop-blur-md border border-neutral-700 rounded-2xl p-8 flex flex-col items-center text-center space-y-6"
        >
          {/* Upload Box */}
          <label className="w-full flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-neutral-600 rounded-xl py-10 mb-4 hover:border-blue-500 transition">
            <Upload size={50} className="text-blue-400 mb-2" />
            <span className="text-lg text-gray-300">Click to upload or drag & drop</span>
            <span className="text-sm text-gray-500">Supported: Images, Videos, PDFs</span>
            <input type="file" className="hidden" onChange={handleFile} />
          </label>

          {/* Preview */}
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
              <li>Click "Predict Authenticity" to check the watermark and detect tampering.</li>
              <li>Preview is always visible on the left panel.</li>
              <li>After prediction, a pop-up will show results and confidence score.</li>
            </ul>
          </motion.div>

          {/* Prediction Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startPrediction}
            className="w-full py-4 bg-blue-500 hover:bg-blue-600 transition rounded-xl font-semibold text-white"
          >
            {predicting ? "Predicting..." : "Predict Authenticity"}
          </motion.button>

          {/* Loading Spinner */}
          {predicting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="mx-auto border-4 border-blue-400 border-t-transparent w-16 h-16 rounded-full"
            />
          )}
        </div>
      </div>

      {/* RESULT POPUP */}
      {showPopup && result && (
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
            {result.status === "Authentic" ? (
              <CheckCircle2 size={48} className="text-green-400" />
            ) : (
              <AlertTriangle size={48} className="text-red-400" />
            )}
            <h2 className="text-xl font-semibold text-white">{result.status}</h2>
            <p className="text-gray-300 text-sm">Confidence: {result.confidence}%</p>
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
