export default function Footer() {
    return (
      <footer className="bg-[#365436] text-white py-6 mt-10 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg font-semibold">NutriBytes</p>
          <p className="text-sm text-gray-200 mt-2">Making Healthy Eating Fun & Rewarding</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-200 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-200 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-200 hover:text-white">Contact Us</a>
          </div>
          <p className="text-xs text-gray-300 mt-4">© 2025 NutriBytes. All rights reserved.</p>
        </div>
      </footer>
    );
  }