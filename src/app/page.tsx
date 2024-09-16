'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const InfiniteScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-block"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <main className="min-h-screen bg-white text-black">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">JALSUDHA ENTERPRISES</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Elevate Your Industry With Pure Water Solutions</h2>
          <p className="text-xl mb-8">With a passion for purity, we create innovative water purification systems for industrial needs.</p>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded">Get Started</button>
            <button className="border border-black px-6 py-3 rounded">View Projects</button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p>Satisfied Clients</p>
          </div>
          <Image src="/placeholder.svg" alt="Water purifier" width={200} height={200} />
          <div>
            <h3 className="text-4xl font-bold">1000+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </section>

      <InfiniteScroll>
        <span className="text-4xl font-bold mx-4">Water Purification</span>
        <span className="text-4xl font-bold mx-4">Industrial Solutions</span>
        <span className="text-4xl font-bold mx-4">Innovative Technology</span>
        <span className="text-4xl font-bold mx-4">Sustainable Practices</span>
      </InfiniteScroll>

      <section className="py-20 px-4" ref={targetRef}>
        <motion.div style={{ opacity, scale }} className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">JALSUDHA's Solutions Surpassed Our Expectations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-2">Passionate Innovators</h3>
              <p>Our team of visionary experts is dedicated to revolutionizing water purification technology.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Client-Centric Approach</h3>
              <p>We tailor our solutions to meet the unique needs of each industry we serve.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Cutting-Edge Technology</h3>
              <p>Our purification systems leverage the latest advancements in water treatment.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
              <p>We understand the importance of time in industry and always deliver on schedule.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Tailored Solutions For Your Needs</h2>
          <div className="space-y-6">
            {['Industrial Water Purification', 'Wastewater Treatment', 'Customized Filtration Systems', 'Water Quality Analysis'].map((service, index) => (
              <motion.div 
                key={index}
                className="flex justify-between items-center p-4 bg-white rounded-lg shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-xl font-bold">{service}</h3>
                <motion.div 
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">We Blend Purity And Functionality Seamlessly</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="mb-4">Our water purification solutions combine aesthetic design with powerful functionality, ensuring clean water for all your industrial needs.</p>
              <a href="#" className="text-blue-600 hover:underline">Learn More →</a>
            </div>
            <Image src="/placeholder.svg" alt="Water purification system" width={500} height={300} className="rounded-lg" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Witness Our Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Image src="/placeholder.svg" alt="Project 1" width={300} height={600} className="rounded-lg" />
            <Image src="/placeholder.svg" alt="Project 2" width={300} height={600} className="rounded-lg" />
            <Image src="/placeholder.svg" alt="Project 3" width={300} height={600} className="rounded-lg" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Create Pure Solutions Together</h2>
          <p className="mb-8">Ready to elevate your water purification systems? Contact JALSUDHA ENTERPRISES to discuss how we can help you achieve the highest standards of water purity for your industry.</p>
          <button className="bg-white text-black px-6 py-3 rounded">Get Started</button>
        </div>
      </section>

      <footer className="bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto flex justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">JALSUDHA ENTERPRISES</h3>
            <p>Providing pure water solutions for industries across India.</p>
          </div>
          <nav>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">Services</a></li>
              <li><a href="#" className="hover:text-blue-600">About</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </main>
  )
}