"use client"

import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Check,
  ChevronRight,
  Upload,
  Building,
  Calendar,
  Award,
} from "lucide-react"
import Header from "./Header"
import HNewFooter from "./HNewfooter"

export default function FranchiseOnBoardForm() {
  const [loading, setLoading] = useState(false)
  const [downloadLoading, setDownloadLoading] = useState(false)
  const [fileErrors, setFileErrors] = useState({
    panCard: "",
    certificates: "",
  })
  const [activeSection, setActiveSection] = useState(0)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [doctorData, setDoctorData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    registrationNumber: "",
    registrationCouncil: "",
    registrationYear: "",
    qualification: "",
    yearOfCompletion: "",
    collegeInstitute: "",
    yearsOfExperience: "",
    specialty: "",
    locality: "",
    additionalNotes: "",
    establishment: "",
    city1: "",
    state1: "",
    amount: "",
    panCard: null,
    certificates: [],
  })

  // For admin access via URL parameter
  const isAdmin = new URLSearchParams(window.location.search).get("admin") === "true"

  const formSections = [
    { title: "Personal Information", icon: "user" },
    { title: "Business Details", icon: "building" },
    { title: "Additional Information", icon: "file-text" },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setDoctorData((prev) => ({ ...prev, [name]: value }))

    // Add subtle animation to the input field
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      e.target.classList.add("scale-input")
      setTimeout(() => {
        e.target.classList.remove("scale-input")
      }, 200)
    }
  }

  const validateFileSize = (file, maxSize = 5 * 1024 * 1024) => {
    return file.size <= maxSize
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target

    if (name === "certificates") {
      // Check each certificate file size
      const validFiles = []
      let hasError = false

      for (let i = 0; i < files.length; i++) {
        if (!validateFileSize(files[i])) {
          setFileErrors((prev) => ({
            ...prev,
            certificates: `File "${files[i].name}" exceeds 5MB limit`,
          }))
          hasError = true
          break
        }
        validFiles.push(files[i])
      }

      if (!hasError) {
        setFileErrors((prev) => ({ ...prev, certificates: "" }))
        setDoctorData((prev) => ({
          ...prev,
          certificates: [...prev.certificates, ...validFiles],
        }))
      }
    } else if (name === "panCard") {
      const file = files[0]

      if (file && !validateFileSize(file)) {
        setFileErrors((prev) => ({
          ...prev,
          panCard: "PAN Card file exceeds 5MB limit",
        }))
        e.target.value = "" // Reset the input
      } else {
        setFileErrors((prev) => ({ ...prev, panCard: "" }))
        setDoctorData({ ...doctorData, [name]: file })
      }
    }
  }

  const nextSection = () => {
    if (activeSection < formSections.length - 1) {
      setActiveSection((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevSection = () => {
    if (activeSection > 0) {
      setActiveSection((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Prevent multiple submissions
    if (loading) return

    // Final validation check
    if (fileErrors.panCard || fileErrors.certificates) {
      toast.error("Please fix file size issues before submitting")
      return
    }

    setLoading(true)

    const formData = new FormData()

    Object.keys(doctorData).forEach((key) => {
      if (key === "certificates") {
        if (doctorData.certificates && doctorData.certificates.length > 0) {
          doctorData.certificates.forEach((file) => {
            if (file instanceof File) {
              formData.append("certificates", file)
            }
          })
        }
      } else if (key === "panCard") {
        if (doctorData.panCard instanceof File) {
          formData.append("panCard", doctorData.panCard)
        }
      } else if (doctorData[key] !== undefined && doctorData[key] !== null) {
        formData.append(key, doctorData[key])
      }
    })

    try {
      // Set timeout for the request
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 60000) // 60 second timeout

      const response = await fetch("https://healthcare-backend-production-dc4c.up.railway.app/api/franchise/add", {
        method: "POST",
        body: formData,
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        setFormSubmitted(true)
        toast.success("Form submitted successfully!")
        // Reset form
        setDoctorData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          postalCode: "",
          registrationNumber: "",
          registrationCouncil: "",
          registrationYear: "",
          qualification: "",
          yearOfCompletion: "",
          collegeInstitute: "",
          yearsOfExperience: "",
          specialty: "",
          locality: "",
          additionalNotes: "",
          establishment: "",
          city1: "",
          state1: "",
          amount: "",
          panCard: null,
          certificates: [],
        })

        // Reset file input fields
        if (document.getElementById("panUpload")) {
          document.getElementById("panUpload").value = ""
        }
        if (document.getElementById("certificatesUpload")) {
          document.getElementById("certificatesUpload").value = ""
        }
      } else {
        const errorData = await response.json().catch(() => ({}))
        toast.error(errorData.message || "Error submitting form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      if (error.name === "AbortError") {
        toast.error("Request timed out. Please check your internet connection and try again.")
      } else {
        toast.error("Error submitting form. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    if (downloadLoading) return

    setDownloadLoading(true)

    try {
      // Set timeout for the request
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 60000) // 60 second timeout

      const response = await fetch("https://healthcare-backend-production-dc4c.up.railway.app/api/franchise/download", {
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || "Failed to download file")
      }

      const blob = await response.blob()
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = "franchise.xlsx"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast.success("File downloaded successfully")
    } catch (error) {
      console.error("Error downloading file:", error)
      if (error.name === "AbortError") {
        toast.error("Download timed out. Please check your internet connection and try again.")
      } else {
        toast.error(`Error downloading file: ${error.message}`)
      }
    } finally {
      setDownloadLoading(false)
    }
  }

  // Function to remove a certificate file
  const removeCertificate = (index) => {
    setDoctorData((prev) => ({
      ...prev,
      certificates: prev.certificates.filter((_, i) => i !== index),
    }))
  }

  // Function to remove PAN card
  const removePanCard = () => {
    setDoctorData((prev) => ({
      ...prev,
      panCard: null,
    }))
    if (document.getElementById("panUpload")) {
      document.getElementById("panUpload").value = ""
    }
  }

  return (
    <>
      
      <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen  pb-10">
        <h1 className="sr-only">
          Welcome to aayushhealth | Aayushwellness| Online consultaion|Treatment|Franchisee| Online Doctor Consultation
          |Aayushwellness,Aayushhealth,view medical records online,patient health portal,hospital appointment
          booking,virtual health consultation,health checkup packages,Heatlhcare Sevices,
          Health,Pathology,franchise,Earning Potential, hospital onboarding, health franchise, join hospital network,
          healthcare partner,Aayush Healthcare, doctor,Franchise,Nurse,Consultation,Online Consultation,affordable
          treatment{" "}
        </h1>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Buttons */}
          <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+918433732988"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 group"
              aria-label="Contact us on WhatsApp"
            >
              <div className="absolute -left-40 bg-white px-3 py-2 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-sm font-medium">
                Chat on WhatsApp
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4c-4.38 0-7.93 3.55-7.93 7.93a7.9 7.9 0 0 0 1.07 3.98L4 20l4.17-1.1a7.9 7.9 0 0 0 3.78.96h.01c4.38 0 7.93-3.55 7.93-7.93 0-2.12-.82-4.1-2.3-5.6zm-5.55 12.17h-.01a6.55 6.55 0 0 1-3.35-.92l-.24-.14-2.47.65.66-2.41-.16-.25a6.55 6.55 0 0 1-1-3.49c0-3.63 2.96-6.58 6.6-6.58a6.56 6.56 0 0 1 6.58 6.58c0 3.64-2.96 6.59-6.6 6.59zm3.61-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.07-.32-.1-.45.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05a5.42 5.42 0 0 1-2.68-2.34c-.2-.35.2-.32.58-1.08.07-.13.03-.24-.02-.34-.05-.1-.45-1.08-.62-1.48-.16-.39-.32-.33-.45-.34-.11-.01-.24-.01-.37-.01-.13 0-.34.05-.52.25-.18.2-.68.67-.68 1.62 0 .96.7 1.88.8 2.01.1.13 1.37 2.1 3.32 2.94.46.2.83.32 1.11.41.47.15.89.13 1.23.08.37-.06 1.17-.48 1.33-.94.17-.46.17-.86.12-.94-.05-.08-.19-.13-.4-.23z" />
              </svg>
            </a>

            {/* Call Button */}
            <a
              href="tel:+918433732988"
              className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 active:scale-95 group"
              aria-label="Call us"
            >
              <div className="absolute -left-24 bg-white px-3 py-2 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-sm font-medium">
                Call Us
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                <path d="M19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
              </svg>
            </a>
          </div>
          <div
            className="overflow-hidden opacity-0 translate-y-4"
            style={{
              animation: "fadeInUp 0.5s ease forwards",
            }}
          >
            {formSubmitted ? (
              <div className="p-8 text-center">
                <div
                  className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 scale-0"
                  style={{
                    animation: "scaleIn 0.5s ease forwards 0.2s",
                  }}
                >
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for your interest in our franchise partnership. We'll review your information and get back
                  to you soon.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <>
                {/* Company Logo */}
                <div className="flex justify-center pt-8">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/png_footer_aw_1.png?v=1739967055"
                    alt="Company Logo"
                    className="h-20 object-contain opacity-0"
                    style={{
                      animation: "fadeIn 0.5s ease forwards 0.2s",
                    }}
                  />
                </div>

                {/* Form Title */}
                <div
                  className="text-center px-6 pt-4 opacity-0"
                  style={{
                    animation: "fadeIn 0.5s ease forwards 0.3s",
                  }}
                >
                  <h1 className="font-bold !text-[#233f8f] text-3xl sm:text-4xl mb-2">
                    Healthcare Franchise Partnership Form
                  </h1>
                  <p className="text-gray-600 mb-1 max-w-2xl mx-auto">
                    Join hands with us to revolutionize healthcare access in your region and build a rewarding business.
                  </p>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Start your healthcare journey with us</p>
                </div>

                {/* Progress Steps */}
                <div className="px-8 py-4">
                  <div className="flex items-center justify-center mb-8">
                    {formSections.map((section, index) => (
                      <div key={index} className="flex items-center">
                        <button
                          onClick={() => setActiveSection(index)}
                          className={`flex items-center justify-center w-10 h-10 rounded-full ${
                            index <= activeSection ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                          } transition-colors duration-300 hover:scale-105 active:scale-95`}
                        >
                          {index < activeSection ? (
                            <Check className="h-5 w-5" />
                          ) : section.icon === "user" ? (
                            <User className="h-5 w-5" />
                          ) : section.icon === "building" ? (
                            <Building className="h-5 w-5" />
                          ) : (
                            <FileText className="h-5 w-5" />
                          )}
                        </button>
                        <div className="text-sm font-medium ml-2 hidden sm:block">{section.title}</div>
                        {index < formSections.length - 1 && (
                          <div
                            className={`w-12 sm:w-16 h-1 mx-2 ${
                              index < activeSection ? "bg-blue-600" : "bg-gray-200"
                            } transition-colors duration-300`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
                    {activeSection === 0 && (
                      <div
                        className="opacity-0 translate-x-4"
                        style={{
                          animation: "slideInRight 0.3s ease forwards",
                        }}
                      >
                        <div className="relative mb-8">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-4 text-xl bg-white text-gray-900 font-semibold">
                              Personal Information
                            </span>
                          </div>
                        </div>

                        {/* Full Name Section */}
                        <div className="mb-6">
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            Full Name <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                              <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={doctorData.firstName}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                            <div className="relative">
                              <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={doctorData.lastName}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <Mail className="h-4 w-4 mr-2" />
                              Email <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={doctorData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <Phone className="h-4 w-4 mr-2" />
                              Phone <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={doctorData.phone}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                        </div>

                        {/* Address */}
                        <div className="mb-6">
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            Address <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="address"
                              placeholder="Street Address"
                              value={doctorData.address}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>

                        {/* City, State, Postal Code */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              City <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={doctorData.city}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              State <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="state"
                                placeholder="State"
                                value={doctorData.state}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              Postal Code <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="postalCode"
                                placeholder="Postal Code"
                                value={doctorData.postalCode}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end mt-8">
                          <button
                            type="button"
                            onClick={nextSection}
                            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center hover:scale-102 active:scale-98"
                          >
                            Next Step
                            <ChevronRight className="h-4 w-4 ml-2" />
                          </button>
                        </div>
                      </div>
                    )}

                    {activeSection === 1 && (
                      <div
                        className="opacity-0 translate-x-4"
                        style={{
                          animation: "slideInRight 0.3s ease forwards",
                        }}
                      >
                        <div className="relative mb-8">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-4 text-xl bg-white text-gray-900 font-semibold">Business Details</span>
                          </div>
                        </div>

                        {/* Existing Healthcare Business */}
                        <div className="mb-6">
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <Building className="h-4 w-4 mr-2" />
                            Do you own an existing healthcare-related business?{" "}
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="space-y-2 flex flex-col">
                            <label className="flex items-center p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                              <input
                                type="radio"
                                name="establishment"
                                value="yes"
                                checked={doctorData.establishment === "yes"}
                                required
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="ml-2">Yes</span>
                            </label>

                            <label className="flex items-center p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                              <input
                                type="radio"
                                name="establishment"
                                value="no"
                                checked={doctorData.establishment === "no"}
                                onChange={handleChange}
                                required
                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="ml-2">No</span>
                            </label>
                          </div>
                        </div>

                        {/* Years of Experience */}
                        <div className="mb-6">
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            Years of Experience in Healthcare Industry <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="registrationYear"
                              placeholder="Years of Experience"
                              value={doctorData.registrationYear}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>

                        {/* City and State Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              Preferred City for Franchise <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="city1"
                                placeholder="Enter City"
                                value={doctorData.city1}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>

                          <div>
                            <label className="block font-medium text-gray-700 mb-2 flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              Preferred State for Franchise <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="state1"
                                placeholder="Enter State"
                                value={doctorData.state1}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                              />
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                            </div>
                          </div>
                        </div>

                        {/* Investment Amount */}
                        <div className="mb-6">
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <Award className="h-4 w-4 mr-2" />
                            Amount Ready To Invest <span className="text-red-500 ml-1">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="amount"
                              placeholder="Enter Amount"
                              value={doctorData.amount}
                              onChange={handleChange}
                              required
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>

                        <div className="flex justify-between mt-8">
                          <button
                            type="button"
                            onClick={prevSection}
                            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors hover:scale-102 active:scale-98"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={nextSection}
                            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center hover:scale-102 active:scale-98"
                          >
                            Next Step
                            <ChevronRight className="h-4 w-4 ml-2" />
                          </button>
                        </div>
                      </div>
                    )}

                    {activeSection === 2 && (
                      <div
                        className="opacity-0 translate-x-4"
                        style={{
                          animation: "slideInRight 0.3s ease forwards",
                        }}
                      >
                        <div className="relative mb-8">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-4 text-xl bg-white text-gray-900 font-semibold">
                              Additional Information
                            </span>
                          </div>
                        </div>

                        {/* Additional Notes */}
                        <div className="mb-6">
                          <label className="block font-medium text-gray-700 mb-2 flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Additional Notes
                          </label>
                          <div className="relative">
                            <textarea
                              name="additionalNotes"
                              placeholder="Any additional information you'd like to share about your interest in our franchise"
                              value={doctorData.additionalNotes}
                              onChange={handleChange}
                              rows={4}
                              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out resize-none"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 input-focus-line"></div>
                          </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="mb-6">
                          <div className="mt-4">
                            <button
                              type="button"
                              onClick={() => window.open("/terms-and-conditions.pdf", "_blank")}
                              className="text-blue-600 hover:text-blue-800 underline font-medium flex items-center"
                            >
                              <FileText className="h-4 w-4 mr-2" />
                              View Terms and Conditions
                            </button>
                          </div>
                        </div>

                        {/* Contract */}
                        <div className="mt-4">
                          <a
                            href="/Franchise-form.pdf"
                            download="Franchise-form.pdf"
                            className="text-blue-600 hover:text-blue-800 underline font-medium flex items-center"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Franchise Agreemnet
                          </a>
                        </div>

                        {/* Optional Document Uploads */}
                        <div className="space-y-6">
                          <div>
                            <label className="block font-medium text-gray-700 mb-2 items-center">
                              <FileText className="h-4 w-4 mr-2" />
                              Fill the Agreement, scan and upload here
                            </label>
                            {fileErrors.panCard && <p className="text-sm text-red-500 mb-2">{fileErrors.panCard}</p>}
                            <div
                              className="h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors p-4"
                              onClick={() => document.getElementById("panUpload").click()}
                            >
                              <input
                                type="file"
                                name="panCard"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="hidden"
                                id="panUpload"
                              />
                              <div className="text-center">
                                <span className="mx-auto flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 mb-3">
                                  <Upload className="h-6 w-6" />
                                </span>
                                <p className="text-sm font-medium text-gray-900">Click to upload</p>
                                <p className="text-xs text-gray-500 mt-1">PDF, DOC up to 5MB</p>
                              </div>
                            </div>
                            {doctorData.panCard && (
                              <div className="mt-2 flex items-center justify-between p-2 bg-blue-50 rounded-md">
                                <p className="text-sm text-gray-700">{doctorData.panCard.name}</p>
                                <button
                                  type="button"
                                  onClick={removePanCard}
                                  className="text-red-500 text-sm hover:text-red-700 hover:scale-105 active:scale-95 transition-transform"
                                >
                                  Remove
                                </button>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex justify-between mt-8">
                          <button
                            type="button"
                            onClick={prevSection}
                            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors hover:scale-102 active:scale-98"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={loading}
                            className={`px-6 py-3 font-medium rounded-md shadow-sm transition-colors flex items-center hover:scale-102 active:scale-98 ${
                              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
                            }`}
                          >
                            {loading ? (
                              <div className="flex items-center">
                                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                  />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0" />
                                </svg>
                                Submitting...
                              </div>
                            ) : (
                              <>
                                Submit
                                <Check className="h-4 w-4 ml-2" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    {isAdmin && (
                      <div className="mt-6 flex justify-center">
                        <button
                          type="button"
                          onClick={handleDownload}
                          disabled={downloadLoading}
                          className={`px-6 py-3 font-medium rounded-md shadow-sm transition-colors hover:scale-102 active:scale-98 ${
                            downloadLoading
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-green-600 hover:bg-green-700 text-white"
                          }`}
                        >
                          {downloadLoading ? (
                            <div className="flex items-center">
                              <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  fill="none"
                                />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0" />
                              </svg>
                              Downloading...
                            </div>
                          ) : (
                            "Download Excel"
                          )}
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </>
            )}
          </div>
        </div>

        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes scaleIn {
            from {
              transform: scale(0);
            }
            to {
              transform: scale(1);
            }
          }

          .scale-input {
            transform: scale(1.01);
            transition: transform 0.2s ease;
          }

          input:focus ~ .input-focus-line,
          textarea:focus ~ .input-focus-line,
          select:focus ~ .input-focus-line {
            width: 100%;
            transition: width 0.3s ease;
          }

          .hover\\:scale-102:hover {
            transform: scale(1.02);
            transition: transform 0.2s ease;
          }

          .active\\:scale-98:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }

          /* Contact button animations */
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
            }
          }

          @keyframes bounce {
            0%,
            20%,
            50%,
            80%,
            100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }

          .fixed a:first-child {
            animation: pulse 2s infinite;
          }

          .fixed a:last-child {
            animation: pulse 2s infinite 1s;
          }

          .fixed a:hover {
            animation: none;
          }
        `}</style>
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
      
    </>
  )
}
