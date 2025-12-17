import React, { useState, useEffect, ChangeEvent } from "react";
import "../components/Popup.css";

interface PopupProps {
  show: boolean;
  onClose: () => void;
}

interface ApiResponse {
  message?: string;
}

const Popup: React.FC<PopupProps> = ({ show, onClose }) => {
  const [msg, setMsg] = useState<string>("");
  const [phonePlaceholder, setPhonePlaceholder] = useState<string>(
    "Enter 10 digit number"
  );
  const [phonePattern, setPhonePattern] = useState<string>("^[0-9]{7,15}$");

  useEffect(() => {
    fetch("https://getnos.io/Algo/main.php")
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        if (data?.message) {
          setMsg(data.message);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!show) return null;

  // Handle country code change
  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === "+91") {
      setPhonePlaceholder("Enter 10-digit number");
      setPhonePattern("^[0-9]{10}$");
    } else {
      setPhonePlaceholder("Enter 7–15 digits");
      setPhonePattern("^[0-9]{7,15}$");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        {/* Logo */}
        <div className="flex items-center justify-center py-4">
          <img src="/QA%20logo.png" alt="boatcraft" className="h-12 w-12" />
        </div>

        {/* Close button */}
        <span className="popup-close" onClick={onClose}>
          &times;
        </span>

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-blue-700 uppercase">
            Hurry: 7 Seats Left! Waitlist Extends to 2026
          </h2>
          <p className="text-sm text-gray-700 mt-1">
            Reserve your spot now for the 3-Day AI Sales Bootcamp
          </p>
        </div>

        {msg && <p className="api-msg">{msg}</p>}

        <form
          action="https://getnos.io/Algo/main.php"
          method="post"
          className="space-y-3"
        >
          {/* Full Name */}
          {/* Full Name + Last Name (side by side) */}
          <div className="name-row">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name*"
              required
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last Name*"
              required
            />
          </div>



          {/* Email */}
          <div className="name-row">
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            required
          />
           <input
              type="date"
              name="call_date"
              required
            />


          </div>

          {/* Phone Section */}
          <div className="phone-input-container flex gap-2">
            <select
              name="country_code"
              className="country-code"
              required
              defaultValue="+91"
              onChange={handleCountryChange}
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA / Canada)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+81">+81 (Japan)</option>
              <option value="+49">+49 (Germany)</option>
              <option value="+33">+33 (France)</option>
              <option value="+971">+971 (UAE)</option>
              <option value="+65">+65 (Singapore)</option>
              <option value="+977">+977 (Nepal)</option>
              <option value="+92">+92 (Pakistan)</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder={phonePlaceholder}
              required
              pattern={phonePattern}
              title="Enter a valid phone number"
              className="flex-1"
            />
          </div>

          {/* ===== Additional Dropdown Fields (stacked one by one) ===== */}
          {/* ===== Dropdowns side by side ===== */}
          {/* ===== Dropdowns side by side ===== */}
          <div className="dropdown-grid">
            <select name="goal" required>
              <option value="">
                What are you looking to gain with Quantum Algo?
              </option>
              <option value="Maximize trading profits without the hassle">
                Maximize trading profits without the hassle
              </option>
              <option value="Diversify my investment strategy">
                Diversify my investment strategy
              </option>
              <option value="Achieve financial freedom through automated trading">
                Achieve financial freedom through automated trading
              </option>
              <option value="Leverage expert-built algorithms for better returns">
                Leverage expert-built algorithms for better returns
              </option>
            </select>

            <select name="investment_ready" required>
              <option value="">Do you have $5000 to invest?</option>
              <option value="Yes, I have the funds available">
                Yes, I have the funds available
              </option>
              <option value="I can secure funding">
                I can secure funding
              </option>
              <option value="No, end this application">
                No, end this application
              </option>
            </select>

            <select name="commitment" required>
              <option value="">
                How committed are you to starting the done-for-you program?
              </option>
              <option value="Ready to start immediately">
                Ready to start immediately
              </option>
              <option value="Interested but need more details">
                Interested but need more details
              </option>
              <option value="Just exploring options">
                Just exploring options
              </option>
            </select>

            <select name="experience" required>
              <option value="">
                How would you describe your experience as a trader?
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* ✅ CALENDAR — OUTSIDE GRID */}
          {/* ===== Calendar Section ===== */}
          




          {/* Submit button */}
          <button
            type="submit"
            className="rounded-full px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-xl font-bold text-white bg-gradient-to-r from-[#a40d5f] to-[#a40d5f] shadow-[0_4px_20px_rgba(100,60,255,0.18)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none w-[80%]"
          >
            Yes! Save My Seat
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
