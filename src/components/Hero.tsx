"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/hero-bg.jpg"
        alt="Industrial worker welding"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Trending Industry in Overall USA</h1>
          <p className="text-xl md:text-2xl mb-8">Innovative solutions for a better tomorrow</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}