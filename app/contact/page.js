import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center h-[350px] px-4 md:px-6 bg-black">
        <div className="max-w-[850px] mx-auto z-20 relative">
          <h1 className="text-[40px] md:text-[54px] leading-[48px] md:leading-[74px] font-bold text-white">
            Contact Us
          </h1>
          <p className="max-w-[665px] mx-auto text-[18px] leading-[30px] font-normal font-poppins text-white mt-[25px]">
            Have a question or want to get started? Fill out the form and our SQL experts will get back to you soon.
          </p>
        </div>
      </div>
      {/* Main Section: Form and Address */}
      <div className="bg-black px-4 py-16 flex flex-col md:flex-row gap-12 max-w-5xl mx-auto w-full">
        {/* Left: Contact Form */}
        <div className="flex-1 bg-[#12092503] border border-white/20 rounded-2xl shadow-lg p-8 z-10">
          <h2 className="text-2xl font-bold text-white mb-4 text-center md:text-left">Send a Message</h2>
          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-white/80 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-black border border-white/20 text-white focus:outline-none focus:border-[#9B59FF] transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white/80 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-black border border-white/20 text-white focus:outline-none focus:border-[#9B59FF] transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white/80 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 rounded-lg bg-black border border-white/20 text-white focus:outline-none focus:border-[#9B59FF] transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full bg-[#9B59FF] hover:bg-[#7d3c98] text-white font-semibold py-2 rounded-full shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Right: Address/Contact Info */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start bg-[#12092503] border border-white/20 rounded-2xl shadow-lg p-8 z-10 min-h-[350px]">
          <h2 className="text-2xl font-bold text-white mb-4 text-center md:text-left">Contact Information</h2>
          <div className="text-white/80 text-[16px] leading-[28px] space-y-4 w-full">
            <div>
              <span className="font-semibold text-white">Email:</span> support@nexasql.com
            </div>
            <div>
              <span className="font-semibold text-white">Phone:</span> +1 (555) 123-4567
            </div>
            <div>
              <span className="font-semibold text-white">Address:</span> 123 Data Drive, Suite 100<br />SQL City, DB 54321
            </div>
            <div>
              <span className="font-semibold text-white">Hours:</span> Mon-Fri, 9am - 6pm (EST)
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 