import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { LinkedinIcon, Mail } from "lucide-react"

const directors = [
  {
    name: "Rajesh Kumar Sharma",
    position: "Chairman & CEO",
    experience: "25+ years",
    background:
      "Former VP of Technology at Fortune 500 company, led digital transformation initiatives across multiple industries. MBA from IIM Ahmedabad, B.Tech from IIT Delhi.",
    expertise: ["Strategic Planning", "Digital Transformation", "Enterprise Architecture"],
    vision: "Driving technology innovation to create sustainable business value for our clients globally.",
  },
  {
    name: "Priya Mehta",
    position: "Chief Technology Officer",
    experience: "20+ years",
    background:
      "Ex-Microsoft Principal Architect, specialized in cloud technologies and enterprise solutions. M.Tech from IIT Bombay, certified in multiple cloud platforms.",
    expertise: ["Cloud Architecture", "Enterprise Solutions", "Technology Strategy"],
    vision: "Leveraging cutting-edge technology to solve complex business challenges and accelerate growth.",
  },
  {
    name: "Amit Patel",
    position: "Chief Operating Officer",
    experience: "22+ years",
    background:
      "Former Operations Director at Infosys, expert in service delivery and process optimization. MBA in Operations, Six Sigma Black Belt certified.",
    expertise: ["Service Delivery", "Process Excellence", "Quality Management"],
    vision: "Ensuring operational excellence and delivering exceptional value to every client engagement.",
  },
  {
    name: "Dr. Sunita Rao",
    position: "Chief Innovation Officer",
    experience: "18+ years",
    background:
      "PhD in Computer Science, former Research Head at TCS Innovation Labs. Published 50+ research papers in AI/ML and emerging technologies.",
    expertise: ["Artificial Intelligence", "Research & Development", "Innovation Strategy"],
    vision: "Pioneering next-generation technologies to keep our clients ahead of the innovation curve.",
  },
]

export default function BoardOfDirectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Board of Directors</h1>
            <p className="text-xl lg:text-2xl text-blue-200">
              Visionary leaders driving technology excellence and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Executive Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our board combines decades of industry experience with visionary leadership to guide Market Eyes toward
                continued growth and innovation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {directors.map((director, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                        {director.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{director.name}</h3>
                        <p className="text-blue-600 font-semibold mb-2">{director.position}</p>
                        <p className="text-sm text-gray-500 mb-4">{director.experience} Experience</p>

                        <p className="text-gray-700 mb-4 leading-relaxed">{director.background}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Core Expertise:</h4>
                          <div className="flex flex-wrap gap-2">
                            {director.expertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <blockquote className="italic text-gray-600 border-l-4 border-blue-600 pl-4 mb-4">
                          "{director.vision}"
                        </blockquote>

                        <div className="flex space-x-3">
                          <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors">
                            <LinkedinIcon className="h-4 w-4 text-blue-600" />
                          </button>
                          <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                            <Mail className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Company Vision Alignment */}
            <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">United by Vision</h2>
              <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
                Our leadership team is united by a shared commitment to excellence, innovation, and client success.
                Together, they bring over 85 years of combined experience in technology leadership, ensuring that
                Market Eyes remains at the forefront of digital transformation and continues to deliver exceptional value
                to Fortune 500 companies worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
