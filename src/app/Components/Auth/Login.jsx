
"use client"; 
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { FiArrowLeft, FiArrowRight, FiLock, FiUser, FiMail } from 'react-icons/fi';

const Login = () => {
    const [step, setStep] = useState('login');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        router.push('/dashboard'); 
    };

    // State to hold the 4 digits
    const [otpValues, setOtpValues] = React.useState(['', '', '', '']);
    // Refs to focus the inputs automatically
    const inputRefs = React.useRef([]);

    // Function to handle pasting
    const handlePaste = (e) => {
        const data = e.clipboardData.getData('text');
        if (!isNaN(Number(data)) && data.length >= 4) {
            const newOtp = data.slice(0, 4).split(''); 
            setOtpValues(newOtp);
            inputRefs.current[3]?.focus();
        }
    };

    const handleChange = (index, value) => {
        if (isNaN(Number(value))) return; 
        const newOtp = [...otpValues];
        newOtp[index] = value.substring(value.length - 1); 
        setOtpValues(newOtp);
        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="h-screen font-montserrat w-full bg-[#F0F2F5] flex items-center justify-center p-4 lg:p-8 overflow-hidden font-sans">
            <div className="w-full max-w-[1200px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[720px]">

                {/* LEFT SECTION (Always stays the same) */}
                <div className="hidden lg:flex lg:w-[50%] bg-[#0B1120] p-12 flex-col justify-between text-white relative">
                    <div className="flex items-center gap-2">
                        <div className="w-11 h-11 bg-gradient-to-br from-[#FF8C39] to-[#FF5C00] rounded-2xl flex items-center justify-center shadow-lg shadow-[#d252167a]">
                            <div className="flex items-end gap-[2px]">
                                <div className="w-1.5 h-3 bg-white rounded-full opacity-60"></div>
                                <div className="w-1.5 h-5 bg-white rounded-full"></div>
                                <div className="w-1.5 h-4 bg-white rounded-full opacity-80"></div>
                            </div>
                        </div>
                        <span className="text-xl font-bold tracking-tight">AdPro</span>
                    </div>

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/5">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs font-medium text-blue-100">Meta Ecosystem</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
                            Reach billions on <br />
                            <span className="text-[#3B82F6]">Social Media</span> instantly.
                        </h1>
                        <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                            Target precision demographics across Facebook, Instagram, and Messenger with automated audience segmentation.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <div className="w-8 h-1.5 bg-white rounded-full"></div>
                        <div className="w-2 h-1.5 bg-white/20 rounded-full"></div>
                        <div className="w-2 h-1.5 bg-white/20 rounded-full"></div>
                    </div>
                </div>

                {/* RIGHT SECTION (Dynamic Content) */}
                <div className="lg:w-[50%] p-8 lg:p-20 flex flex-col justify-center bg-white transition-all duration-300">

                    {/* --- STEP 1: LOGIN --- */}
                    {step === 'login' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="mb-10">
                                <h2 className="text-4xl font-bold text-[#111827] mb-3">Welcome back</h2>
                                <p className="text-gray-500 font-medium">Please enter your details to sign in.</p>
                            </div>
                            <form className="space-y-6" onSubmit={handleLogin}>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Username</label>
                                    <div className="relative">
                                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input type="text" placeholder="Enter your username" className="w-full pl-12 pr-4 py-4 bg-[#F9FAFB] border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#FF6A00]/20 focus:border-[#FF6A00]" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Password</label>
                                    <div className="relative">
                                        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input type="password" placeholder="Enter your password" className="w-full pl-12 pr-4 py-4 bg-[#F9FAFB] border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#FF6A00]/20 focus:border-[#FF6A00]" />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button onClick={() => setStep('forgot')} type="button" className="text-sm font-bold text-[#FF6A00] hover:text-[#E55F00]">Forgot password?</button>
                                </div>
                                <button type="submit" className="w-full bg-[#FF6A00] text-white cursor-pointer font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20 active:scale-[0.98]">
                                    Sign In <FaArrowRightToBracket className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    )}

                    {/* --- STEP 2: FORGOT PASSWORD (Email) --- */}
                    {step === 'forgot' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center">
                            <h2 className="text-3xl font-bold text-[#111827] mb-3">Forgot Password?</h2>
                            <p className="text-gray-500 mb-8">Enter your email to receive a 4-digit code.</p>
                            <div className="space-y-6 text-left">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                    <div className="relative">
                                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input type="email" placeholder="Enter your email" className="w-full pl-12 pr-4 py-4 bg-[#F9FAFB] border border-gray-200 rounded-2xl outline-none" />
                                    </div>
                                </div>
                                <button onClick={() => setStep('otp')} className="w-full bg-[#FF6A00] text-white cursor-pointer font-bold py-4 rounded-2xl">Send OTP</button>
                                <button onClick={() => setStep('login')} className="w-full flex items-center cursor-pointer justify-center gap-2 text-gray-500 font-bold"><FiArrowLeft /> Back to Login</button>
                            </div>
                        </div>
                    )}

                    {/* --- STEP 3: OTP VERIFICATION --- */}
                    {step === 'otp' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center flex flex-col items-center">
                            <h2 className="text-3xl font-bold text-[#111827] mb-2">Verification</h2>
                            <p className="text-gray-500 mb-8">Enter the 4-digit code</p>

                            <div className="flex gap-4 mb-8 ">
                                {otpValues.map((digit, i) => (
                                    <input
                                        key={i}
                                        ref={(el) => (inputRefs.current[i] = el)}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onPaste={handlePaste}
                                        onChange={(e) => handleChange(i, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(i, e)}
                                        className="w-16 h-16 text-center text-2xl font-bold bg-white border border-gray-200 rounded-2xl focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/10 outline-none transition-all"
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => setStep('reset')}
                                className="w-full max-w-[384px] mb-6 bg-[#FF6A00] text-white cursor-pointer font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform"
                            >
                                Verify Code
                            </button>
                            <button onClick={() => setStep('login')} className="w-full flex items-center cursor-pointer justify-center gap-2 text-gray-500 font-bold"><FiArrowLeft /> Back to Login</button>

                        </div>
                    )}

                    {/* --- STEP 4: CHANGE PASSWORD --- */}
                    {step === 'reset' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold text-[#111827] mb-2">Change Password</h2>
                                <p className="text-gray-500">Create a strong new password.</p>
                            </div>
                            <div className="space-y-6">
                                <input type="password" placeholder="New Password" className="w-full px-6 py-4 bg-[#F9FAFB] border border-gray-200 rounded-2xl outline-none" />
                                <input type="password" placeholder="Confirm Password" className="w-full px-6 py-4 bg-[#F9FAFB] border border-gray-200 rounded-2xl outline-none" />
                                <button onClick={() => setStep('login')} className="w-full bg-[#FF6A00] mb-6 text-white cursor-pointer font-bold py-4 rounded-2xl">Reset Password</button>
                            </div>
                            <button onClick={() => setStep('login')} className="w-full flex items-center cursor-pointer justify-center gap-2 text-gray-500 font-bold"><FiArrowLeft /> Back to Login</button>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Login;