import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, TrendingUp, Globe, Users } from "lucide-react"

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Vision</h1>
            <p className="text-xl lg:text-2xl text-blue-200">
              Shaping the future of technology, one innovation at a time
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Vision Statement</h2>
            <blockquote className="text-2xl lg:text-3xl text-gray-700 italic leading-relaxed mb-8">
              "To be the global leader in technology transformation, empowering enterprises to achieve unprecedented
              growth through innovative, sustainable, and human-centered digital solutions."
            </blockquote>
            <p className="text-lg text-gray-600">
              We envision a world where technology seamlessly integrates with human potential, creating limitless
              possibilities for businesses and communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Mission Statement</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our mission is to deliver world-class IT services and solutions that drive digital transformation, enhance
              operational efficiency, and create sustainable competitive advantages for our clients. We are committed to
              excellence, innovation, and building long-term partnerships that generate mutual value and success.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                  <p className="text-gray-600">
                  We strive for perfection in every project, maintaining industry-standard best practices and delivering exceptional results that exceed expectations.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace cutting-edge technologies and creative solutions to solve complex business challenges and
                    drive digital transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Partnership</h3>
                  <p className="text-gray-600">
                    We build long-term relationships based on trust, transparency, and mutual success with our clients,
                    partners, and team members.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
                  <p className="text-gray-600">
                    We aim to create positive change on a global scale, helping organizations worldwide achieve their
                    digital transformation goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Integrity</h3>
                  <p className="text-gray-600">
                    We conduct business with the highest ethical standards, ensuring transparency, honesty, and
                    accountability in all our interactions.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Agility</h3>
                  <p className="text-gray-600">
                    We adapt quickly to changing market conditions and client needs, delivering solutions with
                    exceptional turn-around time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Future Roadmap</h2>
              <p className="text-xl text-blue-200">Our strategic vision for the next decade</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">AI & Automation Excellence</h3>
                <p className="text-blue-200">
                  Establish ourselves as the leading AI/ML solutions provider, helping clients automate 50% of their
                  routine processes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">2026</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Global Expansion</h3>
                <p className="text-blue-200">
                  Expand operations to 5 new countries, serving 1000+ enterprise clients with localized expertise and
                  24/7 support.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">2030</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Sustainable Technology</h3>
                <p className="text-blue-200">
                  Lead the industry in sustainable technology solutions, helping clients achieve carbon neutrality
                  through smart IT infrastructure.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6">Strategic Pillars for Growth</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-blue-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Innovation Labs</h4>
                  <p className="text-sm text-blue-200">R&D centers for emerging technologies</p>
                </div>
                <div className="bg-blue-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Talent Development</h4>
                  <p className="text-sm text-blue-200">World-class training and certification programs</p>
                </div>
                <div className="bg-blue-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Strategic Partnerships</h4>
                  <p className="text-sm text-blue-200">Alliances with technology leaders</p>
                </div>
                <div className="bg-blue-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Client Success</h4>
                  <p className="text-sm text-blue-200">Dedicated success management teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
