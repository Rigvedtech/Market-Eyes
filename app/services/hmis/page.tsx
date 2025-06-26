import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Users, Activity, Database, Shield, Smartphone } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const hmisImages = [
  {
    src: "/images/healthcare/healthcare-dashboard.jpg",
    alt: "Healthcare Management System Dashboard",
    title: "Comprehensive Dashboard",
    description: "Intuitive interface for healthcare professionals",
  },
  {
    src: "/images/healthcare/patient-management-system.jpg",
    alt: "Patient Management Module",
    title: "Patient Management",
    description: "Complete patient records and care coordination",
  },
  {
    src: "/images/healthcare/clinical-workflows.jpg",
    alt: "Clinical Workflows",
    title: "Streamlined Clinical Workflows",
    description: "Electronic health records and decision support systems",
  },
  {
    src: "/images/healthcare/healthcare-analytics.jpg",
    alt: "Healthcare Analytics",
    title: "Advanced Analytics",
    description: "Data-driven insights for better healthcare outcomes",
  },
]

const healthcareSolutionsImages = [
  {
    src: "/images/healthcare/hospital-management.jpg",
    alt: "Hospital Management System",
    title: "Hospital Management",
    description: "Complete hospital operations management solution",
  },
  {
    src: "/images/healthcare/clinic-management.jpg",
    alt: "Clinic Management System",
    title: "Clinic Management",
    description: "Streamlined solutions for outpatient facilities",
  },
  {
    src: "/images/healthcare/laboratory-system.jpg",
    alt: "Laboratory Information System",
    title: "Laboratory Information",
    description: "Comprehensive lab sample and result management",
  },
]

export default function HMISPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 to-teal-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/healthcare/healthcare-hero-background.jpg"
            alt="Modern Healthcare Technology"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">HMIS (MArogyam)</h1>
            <p className="text-xl lg:text-2xl text-green-200 mb-8">Healthcare Management Information System</p>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Comprehensive healthcare IT solutions designed to transform healthcare delivery through digital
              innovation, improving patient outcomes and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transforming Healthcare Through Technology</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                MArogyam is our comprehensive Healthcare Management Information System designed to address the complex
                needs of modern healthcare organizations. From small clinics to large hospital networks, our solution
                provides integrated healthcare management capabilities that improve patient care, streamline operations,
                and ensure regulatory compliance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Built with cutting-edge technology and deep healthcare domain expertise, MArogyam enables healthcare
                providers to focus on what matters most – delivering exceptional patient care.
              </p>
            </div>
            <div>
              <ImageSlider images={hmisImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Patient Management</h3>
                <p className="text-gray-600">
                  Comprehensive patient records, appointment scheduling, and care coordination across all departments.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Clinical Workflows</h3>
                <p className="text-gray-600">
                  Streamlined clinical processes, electronic health records, and decision support systems.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
                <p className="text-gray-600">
                  Advanced analytics and reporting for clinical insights, operational efficiency, and quality metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
                <p className="text-gray-600">
                  HIPAA-compliant security measures ensuring patient data protection and regulatory adherence.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Telemedicine</h3>
                <p className="text-gray-600">
                  Integrated telehealth capabilities for remote consultations and virtual care delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mobile Access</h3>
                <p className="text-gray-600">
                  Mobile-responsive design enabling healthcare professionals to access information anywhere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Healthcare Solutions with Slider */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageSlider images={healthcareSolutionsImages} className="h-80" autoPlay={true} interval={3500} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialized Healthcare IT Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our healthcare IT solutions are tailored for different healthcare sectors and specialties, addressing
                the unique challenges and requirements of each healthcare environment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From large hospital networks to specialized clinics, our solutions scale to meet the needs of healthcare
                providers of all sizes while maintaining the highest standards of security, compliance, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital Transformation for Healthcare</h2>
            <p className="text-xl text-gray-600 mb-12">
              Modernizing healthcare delivery through innovative technology solutions
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Assessment & Planning</h3>
                <p className="text-gray-600">
                  Comprehensive evaluation of current systems and digital transformation roadmap development.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Implementation & Integration</h3>
                <p className="text-gray-600">
                  Seamless deployment and integration with existing healthcare systems and workflows.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Training & Support</h3>
                <p className="text-gray-600">
                  Comprehensive training programs and ongoing support to ensure successful adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Transform Your Healthcare Organization</h2>
            <p className="text-xl text-green-200 mb-8">
              Join leading healthcare providers who trust MArogyam for their digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-900 hover:bg-green-50">
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-900"
              >
                <Link href="/services/data-technologies">Explore Healthcare Analytics</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
