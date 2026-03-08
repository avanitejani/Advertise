

import React from 'react'
import { LuRocket } from 'react-icons/lu'

const Dashboard = () => {
  return (
    <div className=" w-full font-montserrat h-full flex flex-col items-center justify-center bg-white overflow-hidden">

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-40 animate-pulse"
          style={{ background: 'radial-gradient(circle, #FF6B6B 0%, #FF8E53 100%)' }}
        />

        <div
          className="absolute w-[500px] h-[500px] translate-x-10 translate-y-10 rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #D6AFFF 0%, transparent 70%)' }}
        />

        <div
          className="absolute w-[350px] h-[350px] -translate-x-16 -translate-y-10 rounded-full blur-[90px] opacity-30"
          style={{ background: 'radial-gradient(circle, #FFD93D 0%, transparent 60%)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] shadow-xl shadow-orange-500/20">
          <LuRocket className="h-8 w-8 text-white -rotate-12" />
        </div>

        <h1 className="mb-2 text-[30px] md:text-[36px] font-bold tracking-tight text-[#1E293B]">
          Coming Soon
        </h1>
        <p className="text-[14px] md:text-[15px] font-medium text-slate-400 leading-relaxed">
          This feature is currently under development.
        </p>
      </div>

      <div className="absolute bottom-8 w-full text-center">
        <p className="text-[11px] text-slate-300 font-semibold uppercase tracking-[0.2em]">
          © 2025 AdPro. All rights reserved.
        </p>
      </div>

    </div>
  )
}

export default Dashboard