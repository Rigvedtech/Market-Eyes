"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { navItemAnimation, staggerChildren } from "@/lib/animations"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      className="bg-white shadow-lg sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div variants={navItemAnimation}>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/logo3.png"
                alt="Market Eyes Logo"
                width={80}
                height={20}
                className="object-contain  brightness-100 contrast-1000"
                priority
              />
            </Link>
          </motion.div>
          {/* Desktop Navigation */}  
          <motion.div 
            className="hidden lg:flex items-center space-x-8"
            variants={staggerChildren}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <motion.div variants={navItemAnimation}>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <motion.div 
                        className="grid gap-3 p-6 w-[400px]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <NavigationMenuLink asChild>
                          <Link
                            href="/about/this-is-us"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">This Is Us!</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about our company and mission
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          {/* <Link
                            href="/about/board-of-directors"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Board of Directors</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Meet our leadership team
                            </p>
                          </Link> */}
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/about/vision"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Vision</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our vision and future roadmap
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          {/* <Link
                            href="/about/certificates"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Certificates</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              CMMI Level 5 & ISO 27001 certifications
                            </p>
                          </Link> */}
                        </NavigationMenuLink>
                      </motion.div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </motion.div>

                <motion.div variants={navItemAnimation}>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <motion.div 
                        className="grid gap-3 p-6 w-[400px]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/hmis"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">HMIS</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Comprehensive Healthcare Management Information System
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </motion.div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </motion.div>

                <motion.div variants={navItemAnimation}>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <motion.div 
                        className="grid gap-3 p-6 w-[500px] grid-cols-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/it-infrastructure"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">IT Infrastructure & Cloud</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/cyber-security"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Cyber Security</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/data-technologies"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Data Technologies</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/sap"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">SAP Services</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/application-managed"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Application Managed Services</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/digital-marketing"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Digital Marketing</div>
                          </Link>
                        </NavigationMenuLink>
                      </motion.div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </motion.div>

                <motion.div variants={navItemAnimation}>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Technology</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <motion.div 
                        className="grid gap-3 p-6 w-[400px]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <NavigationMenuLink asChild>
                          <Link
                            href="/technology/cloud-solution"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Cloud Solution</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/technology/erp"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">ERP</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/technology/crm"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">CRM</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/technology/sap-focus"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">SAP Technology Focus</div>
                          </Link>
                        </NavigationMenuLink>
                      </motion.div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </motion.div>

                <motion.div variants={navItemAnimation}>
                  <NavigationMenuItem>
                    <Link href="/engagement-model" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Engagement Model
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </motion.div>

                <motion.div variants={navItemAnimation}>
                  <NavigationMenuItem>
                    <Link href="/partners" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Partners
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </motion.div>
              </NavigationMenuList>
            </NavigationMenu>

            <motion.div variants={navItemAnimation}>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/about/this-is-us" className="text-gray-700 hover:text-blue-600">
                About Us
              </Link>
              <Link href="/services/it-infrastructure" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="/technology/cloud-solution" className="text-gray-700 hover:text-blue-600">
                Technology
              </Link>
              <Link href="/engagement-model" className="text-gray-700 hover:text-blue-600">
                Engagement Model
              </Link>
              <Link href="/partners" className="text-gray-700 hover:text-blue-600">
                Partners
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  )
}
