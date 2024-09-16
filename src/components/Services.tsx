"use client"
import { motion } from 'framer-motion'
import { Hammer, Shield, Truck, Headphones } from 'lucide-react'

const services = [
  { icon: Hammer, title: 'Construction Solutions', description: 'Expert solutions for all your construction needs' },
  { icon: Shield, title: 'Safety Management', description: 'Ensuring workplace safety is our top priority' },
  { icon: Truck, title: 'Logistics Support', description: 'Efficient logistics to keep your projects moving' },
  { icon: Headphones, title: 'Customer Support', description: '24/7 support for all your inquiries' },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}