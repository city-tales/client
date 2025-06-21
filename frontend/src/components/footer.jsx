import React from 'react'

function footer() {
    return (
        <footer className="footer w-full bg-[#3B2F2F] text-[#FCF8F1] p-6 text-sm">
      <div className="container mx-auto flex flex-wrap justify-between">
        <nav className="mb-4">
          <h6 className="footer-title font-semibold">Services</h6>
          <a className="block link-hover">Branding</a>
          <a className="block link-hover">Design</a>
          <a className="block link-hover">Marketing</a>
          <a className="block link-hover">Advertisement</a>
        </nav>
        <nav className="mb-4">
          <h6 className="footer-title font-semibold">Company</h6>
          <a className="block link-hover">About us</a>
          <a className="block link-hover">Contact</a>
          <a className="block link-hover">Jobs</a>
          <a className="block link-hover">Press kit</a>
        </nav>
        <nav className="mb-4">
          <h6 className="footer-title font-semibold">Social</h6>
          <div className="flex gap-4">
            <a href="#"><img src="/assets/twitter-icon.svg" alt="Twitter" className="w-6 h-6" /></a>
            <a href="#"><img src="/assets/youtube-icon.svg" alt="YouTube" className="w-6 h-6" /></a>
            <a href="#"><img src="/assets/facebook-icon.svg" alt="Facebook" className="w-6 h-6" /></a>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default footer
