import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Handshake, Award, Globe, Zap, CheckCircle, Star } from "lucide-react"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl lg:text-2xl text-slate-200 mb-8">
              Strategic technology partnerships driving innovation
            </p>
            <p className="text-lg text-slate-100 max-w-3xl mx-auto">
              We collaborate with industry-leading technology partners to deliver comprehensive solutions and maintain
              our position at the forefront of technological advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Technology Alliances</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our strategic partnerships with leading technology vendors enable us to deliver cutting-edge solutions,
              access the latest innovations, and provide our clients with best-in-class services across the entire
              technology spectrum.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              These partnerships are built on mutual trust, shared expertise, and a commitment to delivering exceptional
              value to our clients through collaborative innovation and technical excellence.
            </p>
          </div>

          {/* Partnership Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Latest Technologies</h3>
                <p className="text-gray-600 text-sm">Access to cutting-edge tools and platforms</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Certified Expertise</h3>
                <p className="text-gray-600 text-sm">Highest level certifications and training</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Support</h3>
                <p className="text-gray-600 text-sm">Worldwide technical support and resources</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Collaborative Innovation</h3>
                <p className="text-gray-600 text-sm">Joint development and solution innovation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Partners</h2>
              <p className="text-xl text-gray-600">Leading technology vendors and platform providers</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16  rounded-lg flex items-center justify-center">
                      <img src="https://neoris.com/documents/20126/0/SAP-gold-partner-logo.png/021ba2c8-8a59-a73c-7348-9b994f4d7da6?version=1.0&t=1716822579112&imagePreview=1" alt="" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">SAP Gold Partner</h3>
                      <p className="text-blue-600 font-medium">Premier Partnership</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• SAP S/4HANA implementation expertise</li>
                    <li>• SAP Analytics Cloud specialization</li>
                    <li>• RISE with SAP transformation services</li>
                    <li>• SAP SuccessFactors and Ariba solutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                      <img src="https://img.icons8.com/?size=100&id=YJfJ0JM5Imsj&format=png&color=000000" alt="" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Microsoft Gold Partner</h3>
                      <p className="text-green-600 font-medium">Gold Competency</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Azure cloud solutions and migration</li>
                    <li>• Microsoft 365 and Teams implementation</li>
                    <li>• Power Platform development</li>
                    <li>• Dynamics 365 business applications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                    <img src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" alt="Powered by AWS Cloud Computing" />  
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">AWS Advanced Partner</h3>
                      <p className="text-orange-600 font-medium">Advanced Tier</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Cloud migration and modernization</li>
                    <li>• DevOps and CI/CD implementation</li>
                    <li>• Data analytics and machine learning</li>
                    <li>• Security and compliance solutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                      <img src="https://img.icons8.com/?size=100&id=39913&format=png&color=000000" alt="" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Oracle Platinum Partner</h3>
                      <p className="text-red-600 font-medium">Platinum Level</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Oracle Cloud Infrastructure services</li>
                    <li>• Database migration and optimization</li>
                    <li>• Enterprise applications integration</li>
                    <li>• Autonomous database solutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                      <img src="https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000" alt="" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Google Cloud Partner</h3>
                      <p className="text-purple-600 font-medium">Premier Partner</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Google Cloud Platform migration</li>
                    <li>• BigQuery and data analytics</li>
                    <li>• Kubernetes and container solutions</li>
                    <li>• AI/ML platform implementation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                      <img src="https://img.icons8.com/?size=100&id=38804&format=png&color=000000" alt="" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Salesforce Partner</h3>
                      <p className="text-teal-600 font-medium">Consulting Partner</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Salesforce CRM implementation</li>
                    <li>• Custom application development</li>
                    <li>• Integration and data migration</li>
                    <li>• Lightning platform solutions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Relationships */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vendor Relationships & Certifications</h2>
              <p className="text-xl text-gray-600">Comprehensive ecosystem of technology partnerships</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Infrastructure & Cloud Partners</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">VMware vExpert Program</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Cisco Solution Partner</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Dell Technologies Partner</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">HPE Partner Ready Program</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Red Hat Partner Connect</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Software & Analytics Partners</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Tableau Technology Partner</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Qlik Solution Provider</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Snowflake Partner Network</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Databricks Partner Program</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Atlassian Solution Partner</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Partnership Benefits for Our Clients</h2>
            <p className="text-xl text-slate-200 mb-12">
              How our strategic partnerships translate to value for your business
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Preferred Pricing</h3>
                <p className="text-slate-200">Access to partner discounts and special pricing programs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Early Access</h3>
                <p className="text-slate-200">First access to new features and beta programs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                <p className="text-slate-200">Direct access to vendor technical experts and resources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leverage Our Partnership Ecosystem</h2>
            <p className="text-xl text-gray-600 mb-8">
              Benefit from our strategic partnerships and access the best technology solutions for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-600 hover:bg-slate-700">
                <Link href="/contact">Explore Partnership Benefits</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/technology/cloud-solution">View Technology Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
