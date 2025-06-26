"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const counters = [
  { label: "Projects Delivered Within Cost", value: 98, suffix: "%" },
  { label: "Consulting Hours Clocked", value: 50000, suffix: "+" },
  { label: "Repeat Business Rate", value: 96, suffix: "%" },
  { label: "Business Referrals from Clients", value: 100, suffix: "%" },
  { label: "Triple Digit Growth Year On Year", value: 150, suffix: "%" },
  { label: "Best in Class Talent Pool", value: 200, suffix: "+" },
]

export default function CounterSection() {
  const [counts, setCounts] = useState(counters.map(() => 0))
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("counter-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      counters.forEach((counter, index) => {
        let start = 0
        const end = counter.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = end
              return newCounts
            })
            clearInterval(timer)
          } else {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = Math.floor(start)
              return newCounts
            })
          }
        }, 16)
      })
    }
  }, [isVisible])

  return (
    <section id="counter-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Track Record Speaks</h2>
          <p className="text-xl text-gray-600">Delivering excellence across all metrics that matter</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {counters.map((counter, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
                  {counts[index]}
                  {counter.suffix}
                </div>
                <p className="text-gray-700 font-medium">{counter.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
