"use client";
import React, { useState } from "react";
import { loginUser, verifyOtp } from "@/lib/frontend_functions"; // Import your API functions
import { useAuth } from "@/app/context/AuthContext"; // Import the AuthContext

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const authContext = useAuth();
  if (!authContext) {
    throw new Error("AuthContext is null");
  }
  const { login } = authContext;

  const handleLoginRequest = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await loginUser({ email: email });
      setIsOtpSent(true);
      console.log("OTP sent to email:", email);
    } catch (error) {
      console.error("Failed to send OTP:", error);
    }
  };

  const handleOtpVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await verifyOtp({
        email: email,
        otp: otp,
      });
      if (res.data) {
        console.log("OTP verified successfully", res.data);
        login(res.data.jwt);
        // Redirect to a protected page (like a quiz)
        window.location.href = "/quiz";
      } else {
        console.log("OTP verification failed", res.error);
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {isOtpSent ? "Enter OTP" : "Sign in with Email"}
              </h1>
              <form
                className="space-y-4"
                onSubmit={
                  isOtpSent ? handleOtpVerification : handleLoginRequest
                }
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isOtpSent} // Disable email input after OTP is sent
                  />
                </div>
                {isOtpSent && (
                  <div>
                    <label
                      htmlFor="otp"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter OTP"
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {isOtpSent ? "Verify OTP" : "Send OTP"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
