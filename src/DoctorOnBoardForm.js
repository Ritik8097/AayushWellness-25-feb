
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const DoctorOnboardForm = () => {
    const [loading, setLoading] = useState(false);
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
    panCard: null,
    certificates: [],
  })

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const isAdmin = searchParams.get("admin") === "true"

  const handleChange = (e) => {
    setDoctorData({ ...doctorData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (name === "certificates") {
      setDoctorData((prev) => ({ ...prev, certificates: [...prev.certificates, ...files] }))
    } else {
      setDoctorData({ ...doctorData, [name]: files[0] })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true); // Start loader
    
    const formData = new FormData()

    Object.keys(doctorData).forEach((key) => {
      if (key === "certificates") {
        doctorData.certificates.forEach((file) => formData.append("certificates", file))
      } else {
        formData.append(key, doctorData[key])
      }
    })

    try {
      const response = await fetch("https://formbackend-n4tm.onrender.com/api/doctors/add", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        toast.success("Form Submitted successfully!")
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
          panCard: null,
          certificates: [],
        })
      } else {
        toast.error("Error adding doctor.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Error submitting form. Please try again.")
    }finally {
        setLoading(false); // Stop loader
      }
  }

  const handleDownload = async () => {
    try {
      const response = await fetch("https://formbackend-n4tm.onrender.com/api/doctors/download")
      if (!response.ok) throw new Error("Failed to download file")

      const blob = await response.blob()
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = "doctors.xlsx"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      alert("Error downloading file")
      console.error(error)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-8">
        {/* Company Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/png_footer_aw_1.png?v=1739967055"
            alt="Company Logo"
            className="h-20 object-contain"
          />
        </div>

        {/* Form Title */}
        <h1 className="  font-bold text-center  text-[#233f8f] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px]  mb-2">Doctor Onboarding Form</h1>

        {/* Notes */}
        <p className="text-center text-gray-600 mb-1">
          Please fill out all the required information to complete your onboarding process.
        </p>
        <p className="text-center text-gray-600 mb-6">All documents uploaded must be clear and legible.</p>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-xl bg-white text-red text-bold text-gray-900">Personal Information</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
          {/* Full Name Section */}
          <div>
            <label className="block text-bold font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={doctorData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={doctorData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={doctorData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={doctorData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-bold font-medium text-gray-700 mb-1">Address <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={doctorData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* City, State, Postal Code */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={doctorData.city}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={doctorData.state}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">Postal/ zip Code <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={doctorData.postalCode}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Divider for Professional Information */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-xl bg-white text-red text-bold text-gray-900">Medical Registration </span>
            </div>
          </div>

          {/* Registration Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">Registration Number <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="registrationNumber"
                placeholder="Registration Number"
                value={doctorData.registrationNumber}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">Registration Council <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="registrationCouncil"
                placeholder="Registration Council"
                value={doctorData.registrationCouncil}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">Registration Year <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="registrationYear"
                placeholder="Registration Year"
                value={doctorData.registrationYear}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-xl bg-white text-red text-bold text-gray-900">Education Details</span>
            </div>
          </div>

          {/* Education */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">Qualification <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                value={doctorData.qualification}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">Year of Completion <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="yearOfCompletion"
                placeholder="Year of Completion"
                value={doctorData.yearOfCompletion}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">College/Institute <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="collegeInstitute"
                placeholder="College/Institute"
                value={doctorData.collegeInstitute}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Professional Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">Years of Experience <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="yearsOfExperience"
                placeholder="Years of Experience"
                value={doctorData.yearsOfExperience}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-bold font-medium text-gray-700 mb-1">Speciality <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="specialty"
                placeholder="Specialty"
                value={doctorData.specialty}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-xl bg-white text-red text-bold text-gray-900">Establishment Basic Details</span>
            </div>
          </div>

          {/* Establishment Radio Buttons */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Establishment: <span className="text-red-500">*</span></label>
            <div className="space-y-2 flex flex-col">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="establishment"
                  value="I own an establishment"
                  checked={doctorData.establishment === "I own an establishment"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 appearance-none rounded-full border-2 checked:bg-blue-600 checked:border-transparent"
                />
                <span className="ml-2">I own an establishment</span>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="establishment"
                  value="I visit an establishment"
                  checked={doctorData.establishment === "I visit an establishment"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 appearance-none rounded-full border-2 checked:bg-blue-600 checked:border-transparent"
                />
                <span className="ml-2">I visit an establishment</span>
              </label>
            </div>

            {/* City and State Fields */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="city1"
                  placeholder="Enter City"
                  value={doctorData.city1}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="state1"
                  placeholder="Enter State"
                  value={doctorData.state1}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="mt-4">
            <label className="block font-medium text-gray-700 mb-1">Additional Notes </label>
            <textarea
              name="additionalNotes"
              placeholder="Additional Notes"
              value={doctorData.additionalNotes}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* Document Uploads */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-xl bg-white text-red text-bold text-gray-900">Document Upload</span>
            </div>
          </div>

          <div className="space-y-4">
  {/* PAN Card & Dr. License in one row */}
  <div className="flex flex-col md:flex-row justify-between gap-4">
    {/* PAN Card Upload */}
    <div className="w-full md:w-2/5">
      <label className="block font-medium text-gray-700 mb-2">
        PAN Card: <span className="text-red-500">*</span>
      </label>
      <div
        className="h-52 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer"
        onClick={() => document.getElementById("panUpload").click()}
      >
        <input
          type="file"
          name="panCard"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="panUpload"
        />
        <span className="text-sm text-gray-600 text-center">
          <span className="font-semibold text-primary-600">Browse File</span>
        </span>
      </div>
      {doctorData.panCard && (
        <p className="mt-2 text-sm text-gray-500 text-center">{doctorData.panCard.name}</p>
      )}
    </div>

    {/* Dr. License Upload */}
    <div className="w-full md:w-2/5">
      <label className="block font-medium text-gray-700 mb-2">
        Dcotor's Licence <span className="text-red-500">*</span>
      </label>
      <div
        className="h-52 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer"
        onClick={() => document.getElementById("certificatesUpload").click()}
      >
        <input
          type="file"
          name="certificates"
          accept=".pdf,.jpg,.png"
          multiple
          onChange={handleFileChange}
          className="hidden"
          id="certificatesUpload"
        />
        <span className="text-sm text-gray-600 text-center">
          <span className="font-semibold text-primary-600">Browse Files</span>
        </span>
      </div>
      {doctorData.certificates && doctorData.certificates.length > 0 && (
        <ul className="mt-2 text-sm text-gray-500 text-center">
          {Array.from(doctorData.certificates).map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
</div>


          {/* Submit Button */}
          <div className="flex justify-center pt-4">
      <ToastContainer />
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={loading} // Disable button while loading
        className={`px-6 py-3 font-medium rounded-md shadow-sm transition-colors ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        }`}
      >
        {loading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0116 0"
              />
            </svg>
            Submitting...
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </div>
          {isAdmin && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              >
                Download Excel
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default DoctorOnboardForm;





