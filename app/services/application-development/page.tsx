import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Smartphone, Globe, Database, Zap, CheckCircle } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const developmentImages = [
  {
    src: "/images/services/App-dev4.jpg",
    alt: "Web Application Development",
    title: "Web Applications",
    description: "Modern, responsive web applications",
  },
  {
    src: "/images/services/App-dev3.jpg",
    alt: "Mobile App Development",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps",
  },
  {
    src: "/images/services/App-dev1.jpg",
    alt: "Enterprise Applications",
    title: "Enterprise Solutions",
    description: "Large-scale enterprise software",
  },
  {
    src: "/images/services/App-dev2.jpg",
    alt: "Cloud-Native Development",
    title: "Cloud-Native Development",
    description: "Scalable cloud applications",
  },
]

const technologyStackImages = [
  {
    src: "/images/services/App-dev1.jpg",
    alt: "Frontend Technologies",
    title: "Frontend Technologies",
    description: "React, Angular, Vue.js, Next.js",
  },
  {
    src: "/images/services/App-dev4.jpg",
    alt: "Backend Technologies",
    title: "Backend Technologies",
    description: "Node.js, Java, .NET, Python",
  },
  {
    src: "/images/services/App-dev3.jpg",
    alt: "Mobile Technologies",
    title: "Mobile Technologies",
    description: "React Native, Flutter, iOS/Android Native",
  },
]

export default function ApplicationDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Application Development Services</h1>
            <p className="text-xl lg:text-2xl text-cyan-200 mb-8">Custom application development solutions</p>
            <p className="text-lg text-cyan-100 max-w-3xl mx-auto">
              Full software development lifecycle support with cutting-edge technologies and agile methodologies to
              deliver scalable, secure, and high-performance applications.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">End-to-End Development Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our Application Development Services encompass the complete software development lifecycle, from
                conceptualization and design to deployment and maintenance. We leverage modern technologies, agile
                methodologies, and industry best practices to deliver robust, scalable applications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need web applications, mobile apps, enterprise software, or cloud-native solutions, our
                experienced development teams deliver high-quality applications that drive business value and user
                engagement.
              </p>
            </div>
            <div>
              <ImageSlider images={developmentImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Development Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Web Application Development</h3>
                <p className="text-gray-600">
                  Modern, responsive web applications using latest frameworks and technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
                <p className="text-gray-600">
                  Native and cross-platform mobile applications for iOS and Android platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Enterprise Applications</h3>
                <p className="text-gray-600">
                  Large-scale enterprise software solutions with complex business logic and integrations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Database className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">API Development</h3>
                <p className="text-gray-600">
                  RESTful APIs and microservices architecture for seamless system integration.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cloud-Native Development</h3>
                <p className="text-gray-600">
                  Scalable cloud applications leveraging containerization and serverless architectures.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Legacy Modernization</h3>
                <p className="text-gray-600">
                  Transform legacy applications with modern technologies and architectures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
              <p className="text-xl text-gray-600">Agile methodology ensuring quality and timely delivery</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Discovery & Planning</h3>
                  <p className="text-gray-600 text-sm">
                    Requirements analysis, architecture design, and project planning
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-green-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Design & Prototyping</h3>
                  <p className="text-gray-600 text-sm">UI/UX design, wireframing, and interactive prototypes</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Development & Testing</h3>
                  <p className="text-gray-600 text-sm">
                    Agile development with continuous testing and quality assurance
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-orange-600">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Deployment & Support</h3>
                  <p className="text-gray-600 text-sm">Production deployment and ongoing maintenance support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process with Slider */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageSlider images={technologyStackImages} className="h-80" autoPlay={true} interval={3500} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Expertise</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our development teams are proficient in a wide range of technologies, frameworks, and platforms,
                ensuring we can deliver the right solution for your specific needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From modern frontend frameworks to robust backend technologies and mobile platforms, we have the
                expertise to build high-quality applications across the technology spectrum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Expertise</h2>
              <p className="text-xl text-gray-600">Cutting-edge technologies for modern application development</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">React</div>
                      <div className="text-sm text-gray-600">Component-based UI</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Angular</div>
                      <div className="text-sm text-gray-600">Enterprise applications</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Vue.js</div>
                      <div className="text-sm text-gray-600">Progressive framework</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Next.js</div>
                      <div className="text-sm text-gray-600">Full-stack React</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Backend Technologies</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Node.js</div>
                      <div className="text-sm text-gray-600">JavaScript runtime</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Java</div>
                      <div className="text-sm text-gray-600">Enterprise solutions</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">.NET</div>
                      <div className="text-sm text-gray-600">Microsoft ecosystem</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Python</div>
                      <div className="text-sm text-gray-600">AI/ML integration</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Mobile Technologies</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">React Native</div>
                      <div className="text-sm text-gray-600">Cross-platform</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Flutter</div>
                      <div className="text-sm text-gray-600">Google framework</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">iOS Native</div>
                      <div className="text-sm text-gray-600">Swift/Objective-C</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Android Native</div>
                      <div className="text-sm text-gray-600">Kotlin/Java</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">AWS</div>
                      <div className="text-sm text-gray-600">Cloud services</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Azure</div>
                      <div className="text-sm text-gray-600">Microsoft cloud</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Docker</div>
                      <div className="text-sm text-gray-600">Containerization</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Kubernetes</div>
                      <div className="text-sm text-gray-600">Orchestration</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Development Services</h2>
            <p className="text-xl text-cyan-200 mb-12">
              Delivering high-quality applications with modern technologies and best practices
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Code</h3>
                <p className="text-cyan-200">Clean, maintainable code following industry best practices</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Agile Delivery</h3>
                <p className="text-cyan-200">Fast, iterative development with continuous feedback</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Expertise</h3>
                <p className="text-cyan-200">Experienced teams with deep technical knowledge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Next Application?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Partner with our expert development team to bring your ideas to life with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              {/* <Button size="lg" variant="outline">
                <Link href="/services/skill-development">Explore Training Services</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
