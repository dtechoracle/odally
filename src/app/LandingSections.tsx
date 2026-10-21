"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

function SimpleAgentStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Scheduled",
    "Joining meeting",
    "Presenting",
    "Meeting complete",
  ];

  // Auto-progress stepper every 2.4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full md:w-1/2 bg-[#f9f9f9] border border-[#ededed] rounded-2xl p-8 sm:p-10 shadow-sm relative">
      <div className="flex flex-col space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:w-px before:-translate-x-px before:bg-[#ededed]">
        {/* Active progress line */}
        <div
          className="absolute top-0 left-[11px] w-px -translate-x-px bg-[#38c6ec] transition-all duration-500 ease-out pointer-events-none"
          style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((label, index) => {
          const isActive = index === activeStep;
          const isPassed = index < activeStep;
          const isCompleteStep = index === 3;

          return (
            <div
              key={label}
              className="relative flex items-center gap-6 cursor-pointer select-none"
              onClick={() => setActiveStep(index)}
            >
              {/* Stepper Circle */}
              <div
                className={cn(
                  "w-[22px] h-[22px] rounded-full bg-[#ffffff] shrink-0 z-10 flex items-center justify-center transition-all duration-300",
                  isActive
                    ? isCompleteStep
                      ? "border-2 border-[#10b981]"
                      : "border-2 border-[#38c6ec]"
                    : isPassed
                    ? "border-2 border-[#38c6ec]"
                    : "border-2 border-[#ededed]"
                )}
              >
                {isActive ? (
                  <div
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      isCompleteStep ? "bg-[#10b981]" : "bg-[#38c6ec]"
                    )}
                  />
                ) : isPassed ? (
                  <div className="w-2 h-2 rounded-full bg-[#38c6ec]" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-[#b8b8b8]" />
                )}
              </div>

              {/* Step Label */}
              <span
                className={cn(
                  "text-[15px] tracking-[-0.0287em] transition-colors duration-300",
                  isActive
                    ? isCompleteStep
                      ? "font-semibold text-[#10b981]"
                      : "font-semibold text-[#000000]"
                    : isPassed
                    ? "font-medium text-[#4a4a4a]"
                    : "font-medium text-[#b8b8b8]"
                )}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function LandingSections() {
  return (
    <div className="bg-[#ffffff] text-[#000000] font-sans">
      
      {/* 4. SOCIAL PROOF / TRUST STRIP */}
      <section className="py-24 border-b border-[#ededed]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-[20px] font-medium tracking-[-0.02em] text-[#000000] mb-12">Built for meetings that shouldn't require you to be there.</h2>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 text-[15px] font-medium tracking-wide text-[#b8b8b8] uppercase">
            <span>Sales</span>
            <span>Product Demos</span>
            <span>Interviews</span>
            <span>Client Calls</span>
            <span>Internal Meetings</span>
            <span>Presentations</span>
          </div>
        </div>
      </section>

      {/* 5. THE PROBLEM */}
      <section className="py-32">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-[44px] md:text-[55.7px] font-regular tracking-[-0.0572em] leading-[1.1] mb-6">Not every meeting needs you.</h2>
            <p className="text-[16.1px] md:text-[20px] text-[#2e2e2e] tracking-[-0.0475em] leading-[1.45]">Some meetings need your presence. Others just need someone to show up, present the right information, and keep things moving.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-[800px] mx-auto">
            <div className="border border-[#ededed] p-10 rounded-2xl bg-[#f9f9f9]">
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] mb-6 border-b border-[#ededed] pb-4">Without the agent</h3>
              <ul className="space-y-4 text-[15px] text-[#b8b8b8] font-medium tracking-[-0.0287em]">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#ededed]"></span>Block your calendar</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#ededed]"></span>Join the call</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#ededed]"></span>Wait for your turn</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#ededed]"></span>Share your screen</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#ededed]"></span>Present the same material</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#ededed]"></span>Stay until the meeting ends</li>
              </ul>
            </div>
            <div className="border border-[#ededed] p-10 rounded-2xl bg-[#ffffff] relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#38c6ec]"></div>
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] mb-6 border-b border-[#ededed] pb-4">With the agent</h3>
              <ul className="space-y-4 text-[15px] text-[#000000] font-medium tracking-[-0.0287em]">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#38c6ec]"></span>Schedule it</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#38c6ec]"></span>Choose the presentation</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#38c6ec]"></span>Let the agent join</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#38c6ec]"></span>Let it present</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#38c6ec]"></span>Get your time back</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-32 bg-[#f2f2f2]">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-[34px] md:text-[44px] font-regular tracking-[-0.0572em] leading-[1.1] mb-20 text-center">Three steps. Then you're done.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <span className="text-[#38c6ec] font-semibold text-[15px] mb-4">01 — Schedule</span>
              <p className="text-[16.1px] text-[#2e2e2e] tracking-[-0.0475em] mb-8">Choose the date, time and meeting link.</p>
              <div className="bg-[#ffffff] border border-[#ededed] rounded-2xl overflow-hidden shadow-sm aspect-[4/5] relative flex items-center justify-center p-2">
                <img
                  src="/images/steps/step1-schedule.jpg"
                  alt="Meeting Details"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#000000] font-semibold text-[15px] mb-4">02 — Prepare</span>
              <p className="text-[16.1px] text-[#2e2e2e] tracking-[-0.0475em] mb-8">Select the video or presentation your agent should use.</p>
              <div className="bg-[#ffffff] border border-[#ededed] rounded-2xl p-6 shadow-sm aspect-[4/5] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="text-base font-bold text-slate-900">Select Presentation</div>
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between p-3 rounded-xl border-2 border-[#38c6ec] bg-sky-50/40">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center text-[#087c9f] font-bold text-xs">
                          MP4
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">Product Demo.mp4</p>
                          <p className="text-[11px] text-slate-500">12 mins • 1080p</p>
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-[#38c6ec] flex items-center justify-center text-white text-xs">✓</div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-slate-300">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                          MP4
                        </div>
                        <div>
                          <p className="text-xs font-medium text-slate-700">Client Walkthrough.mp4</p>
                          <p className="text-[11px] text-slate-400">24 mins • 1080p</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <div className="px-5 py-2 rounded-lg bg-black text-white text-xs font-medium">Next</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#000000] font-semibold text-[15px] mb-4">03 — Let it run</span>
              <p className="text-[16.1px] text-[#2e2e2e] tracking-[-0.0475em] mb-8">Your agent joins the meeting at the scheduled time and presents.</p>
              <div className="bg-[#ffffff] border border-[#ededed] rounded-2xl p-6 shadow-sm aspect-[4/5] flex flex-col justify-between">
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60">
                    <p className="text-xs font-bold text-slate-900 mb-1.5">Execution Log</p>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#38c6ec]"></span>
                      <span className="text-xs font-semibold text-slate-800">Completed</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 pl-4">October 12, 2026 · 2:02 PM</p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-100 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-slate-900">Execution</p>
                      <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Completed successfully
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                        <span>Execution</span>
                        <span>Finished</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-[#38c6ec] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="w-full py-2 text-center rounded-lg border border-slate-200 text-xs font-medium text-slate-700">All meetings</div>
                  <div className="w-full py-2 text-center rounded-lg bg-black text-white text-xs font-medium">Open Google Meet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. THE AGENT TIMELINE */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-[34px] sm:text-[40px] md:text-[44px] font-regular tracking-[-0.0572em] leading-[1.1] mb-6">
              When it's time, your agent shows up.
            </h2>
            <p className="text-[16.1px] text-[#2e2e2e] tracking-[-0.0475em] leading-[1.45] mb-8">
              At the scheduled time, your agent joins the meeting, gets ready, and presents the material you've selected.
            </p>
          </div>
          <SimpleAgentStepper />
        </div>
      </section>

      {/* 9. PRESENTATION LIBRARY */}
      <section className="py-32 bg-[#000000] text-white">
        <div className="max-w-[1000px] mx-auto px-6 text-center mb-16">
          <h2 className="text-[44px] font-regular tracking-[-0.0572em] leading-[1.1] mb-6">Give it something to present.</h2>
          <p className="text-[16.1px] text-[#b8b8b8] tracking-[-0.0475em] leading-[1.45] max-w-2xl mx-auto">Upload a presentation, product demo, walkthrough, training video, or anything else your meeting requires.</p>
        </div>
        <div className="max-w-[800px] mx-auto bg-[#111111] border border-[#2e2e2e] rounded-2xl overflow-hidden">
           <div className="px-6 py-4 border-b border-[#2e2e2e] flex items-center justify-between">
              <span className="text-[14.3px] font-medium text-[#ffffff] tracking-[-0.0447em]">Presentation Library</span>
           </div>
           <div className="divide-y divide-[#2e2e2e]">
             {['Product Demo.mp4', 'Client Walkthrough.mp4', 'Q3 Product Update.mp4', 'Onboarding Presentation.mp4'].map((file, i) => (
               <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-[#1a1a1a] transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#2e2e2e] rounded flex items-center justify-center group-hover:bg-[#38c6ec] transition-colors">
                      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-[#ffffff] border-b-[5px] border-b-transparent ml-1"></div>
                    </div>
                    <span className="text-[15px] font-medium text-[#ffffff]">{file}</span>
                  </div>
                  <span className="text-[14.3px] text-[#b8b8b8]">45 mins</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 11. USE CASES */}
      <section className="py-32 bg-[#f9f9f9]">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-[44px] md:text-[55.7px] font-regular tracking-[-0.0572em] leading-[1.1] mb-20 max-w-2xl">Built for meetings you don't need to sit through.</h2>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
             <div className="border-t border-[#000000] pt-6">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-[20px] font-semibold tracking-[-0.02em]">Product demos</h3>
                 <span className="text-[15px] text-[#b8b8b8] font-medium">01</span>
               </div>
               <p className="text-[16.1px] text-[#2e2e2e] tracking-[-0.0475em]">Let your agent walk through a product while you focus elsewhere.</p>
             </div>
             <div className="border-t border-[#ededed] pt-6 hover:border-[#000000] transition-colors">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-[20px] font-semibold tracking-[-0.02em]">Sales calls</h3>
                 <span className="text-[15px] text-[#b8b8b8] font-medium">02</span>
               </div>
               <p className="text-[16.1px] text-[#2e2e2e] tracking-[-0.0475em]">Present the same product material consistently to every prospect.</p>
             </div>
             <div className="border-t border-[#ededed] pt-6 hover:border-[#000000] transition-colors">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-[20px] font-semibold tracking-[-0.02em]">Client presentations</h3>
                 <span className="text-[15px] text-[#b8b8b8] font-medium">03</span>
               </div>
               <p className="text-[16.1px] text-[#2e2e2e] tracking-[-0.0475em]">Show up professionally without blocking your calendar.</p>
             </div>
             <div className="border-t border-[#ededed] pt-6 hover:border-[#000000] transition-colors">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-[20px] font-semibold tracking-[-0.02em]">Training</h3>
                 <span className="text-[15px] text-[#b8b8b8] font-medium">04</span>
               </div>
               <p className="text-[16.1px] text-[#2e2e2e] tracking-[-0.0475em]">Deliver repeatable educational presentations automatically.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 16. FINAL CTA */}
      <section className="py-24 md:py-40 bg-[#38c6ec] text-[#000000] text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-[55.7px] font-regular tracking-[-0.0572em] leading-[1.1] mb-8">Your calendar is already full.<br className="hidden sm:inline" />Your agent doesn't need a break.</h2>
          <p className="text-lg md:text-[20px] font-medium tracking-[-0.0475em] mb-12 opacity-90">Schedule your next meeting and let your agent handle the presentation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#000000] text-white flex items-center justify-center text-[16px] font-bold tracking-[-0.02em] hover:opacity-90 transition-opacity">Get Started</Link>
            <Link href="#how-it-works" className="w-full sm:w-auto h-14 px-8 rounded-full bg-transparent border-2 border-[#000000] text-[#000000] flex items-center justify-center text-[16px] font-bold tracking-[-0.02em] hover:bg-[#000000] hover:text-white transition-all">See How It Works</Link>
          </div>
        </div>
      </section>

      {/* 17. FOOTER */}
      <footer className="py-16 bg-[#ffffff] border-t border-[#ededed]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            <div className="max-w-[280px]">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-[26px] h-[25px]" viewBox="0 0 26 25" role="img" aria-label="Odally">
                  <rect x=".5" y=".5" width="25" height="24" rx="7" fill="#38c6ec" />
                  <ellipse cx="13" cy="12.5" rx="5.5" ry="6" stroke="white" strokeWidth="2.2" fill="none" />
                </svg>
                <span className="font-black text-[17.1px] tracking-[-0.0075em]">Odally</span>
              </div>
              <p className="text-[14.3px] text-[#b8b8b8] tracking-[-0.0447em]">An AI meeting agent that shows up and presents for you.</p>
            </div>
            
            <div className="flex flex-wrap gap-12 sm:gap-16 text-[15px] font-medium tracking-[-0.0287em]">
              <div className="flex flex-col gap-4">
                <span className="text-[#000000] font-semibold">Product</span>
                <Link href="#how" className="text-[#b8b8b8] hover:text-[#000000]">How it works</Link>
                <Link href="#features" className="text-[#b8b8b8] hover:text-[#000000]">Features</Link>
                <Link href="#pricing" className="text-[#b8b8b8] hover:text-[#000000]">Pricing</Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[#000000] font-semibold">Resources</span>
                <Link href="#blog" className="text-[#b8b8b8] hover:text-[#000000]">Blog</Link>
                <Link href="#faq" className="text-[#b8b8b8] hover:text-[#000000]">FAQ</Link>
                <Link href="#help" className="text-[#b8b8b8] hover:text-[#000000]">Help</Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[#000000] font-semibold">Company</span>
                <Link href="#about" className="text-[#b8b8b8] hover:text-[#000000]">About</Link>
                <Link href="#contact" className="text-[#b8b8b8] hover:text-[#000000]">Contact</Link>
                <Link href="#privacy" className="text-[#b8b8b8] hover:text-[#000000]">Privacy</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#ededed] pt-8 flex items-center justify-between text-[14.3px] text-[#b8b8b8]">
            <span>&copy; 2026 Odally</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
