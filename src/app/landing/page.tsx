"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Shield, Clock, Video, Calendar, Zap, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-slate-200 bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500">
              <span className="text-sm font-bold text-white">O</span>
            </div>
            <span className="text-lg font-semibold text-slate-900">Odally</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Dashboard
            </Link>
            <Link href="#how-it-works" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              How It Works
            </Link>
            <Link href="#trust" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Security
            </Link>
            <Button asChild size="sm">
              <Link href="/dashboard">
                <span className="flex items-center gap-1.5">
                  Dashboard <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-up">
              <Badge variant="default" className="mb-6 border-sky-200">
                <Sparkles className="h-3 w-3 mr-1.5" />
                AI-Powered Meetings
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Let your{" "}
                <span className="text-sky-600">odally</span>{" "}
                show up for you.
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
                Schedule a meeting, give your agent the presentation, and let it handle the rest. From joining to presenting — fully automated.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" className="h-11 px-6 rounded-lg bg-sky-500 hover:bg-sky-600">
                  <Link href="/dashboard" className="flex items-center gap-2">
                    Schedule a Meeting <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-11 px-6 rounded-lg">
                  <Link href="#how-it-works" className="flex items-center gap-2">
                    <Play className="h-4 w-4" /> See How It Works
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-sky-500" /> No credit card
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-sky-500" /> Setup in 2 min
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-sky-500" /> Cancel anytime
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 flex items-center gap-2">
                      <Clock className="h-3 w-3" /> meet.agent.com/dashboard
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {/* Dashboard Preview */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Upcoming Meetings</h3>
                        <p className="text-xs text-slate-500">3 meetings scheduled for today</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 rounded-lg bg-slate-100" />
                        <div className="h-8 w-8 rounded-lg bg-slate-100" />
                      </div>
                    </div>
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 rounded-lg border border-slate-100 p-3 hover:border-sky-200 hover:bg-sky-50/50 transition-all">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
                          <Video className="h-5 w-5 text-sky-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-900 truncate">
                            {i === 1 ? "Product Demo" : i === 2 ? "Team Presentation" : "Client Review"}
                          </p>
                          <p className="text-xs text-slate-500">
                            {i === 1 ? "Today at 2:00 PM" : i === 2 ? "Today at 3:30 PM" : "Today at 5:00 PM"}
                          </p>
                        </div>
                        <Badge variant={i === 1 ? "default" : "outline"}>
                          {i === 1 ? "Live" : "Scheduled"}
                        </Badge>
                      </div>
                    ))}
                    <div className="flex gap-2 pt-2">
                      <div className="flex-1 h-20 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center">
                        <Video className="h-6 w-6 text-sky-400" />
                      </div>
                      <div className="flex-1 h-20 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-slate-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating cards */}
              <div className="absolute -left-8 -bottom-4 bg-white rounded-xl border border-slate-200 shadow-lg p-3 animate-float" style={{ animationDelay: "0s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-900">Joined</p>
                    <p className="text-[10px] text-slate-500">Google Meet</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 bg-white rounded-xl border border-slate-200 shadow-lg p-3 animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center">
                    <Play className="h-4 w-4 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-900">Playing</p>
                    <p className="text-[10px] text-slate-500">Video started</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-400 mb-6">Trusted by teams worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["Acme Corp", "TechFlow", "Streamline", "CloudScale", "DataPulse"].map((name) => (
              <div key={name} className="text-lg font-bold text-slate-300 tracking-tight">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">How it works</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Set up your meeting in four simple steps.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Schedule", desc: "Choose a date, time, and add the Google Meet link.", icon: Calendar },
              { step: "02", title: "Configure", desc: "Paste the Meet link, choose your video, and set options.", icon: Video },
              { step: "03", title: "Your Agent Joins", desc: "At the scheduled time, the agent launches and joins the meeting.", icon: Zap },
              { step: "04", title: "Present & Done", desc: "The agent presents your video and you review the log.", icon: Check },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-sky-400">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Everything you need</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">A complete automation suite for professional meeting attendance.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Smart Scheduling", desc: "Calendar integration with timezone-aware scheduling and recurring meeting support.", icon: Calendar },
              { title: "Video Management", desc: "Upload, manage, and preview presentation videos with metadata and thumbnails.", icon: Video },
              { title: "Browser Automation", desc: "Automated Google Meet joining with pre-join handling and state verification.", icon: Zap },
              { title: "Presentation Control", desc: "Automatic presentation mode activation with verified state detection.", icon: Play },
              { title: "Real-time Monitoring", desc: "Live execution tracking with state transitions and detailed activity logs.", icon: Clock },
              { title: "Auto Recovery", desc: "Automatic recovery from browser crashes, network failures, and presentation errors.", icon: Shield },
            ].map((item) => (
              <div key={item.title} className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-sky-200 hover:shadow-md transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Built for automation</h2>
              <p className="mt-4 text-lg text-slate-600">Your security and privacy are the foundation of this product.</p>
              <div className="mt-8 space-y-6">
                {[
                  { title: "Encrypted Credentials", desc: "All session data is encrypted at rest and in transit. We never see your session tokens." },
                  { title: "Private Video Storage", desc: "Videos are stored in private object storage with signed URLs. No public exposure." },
                  { title: "Controlled Browser Sessions", desc: "Each meeting runs in an isolated browser environment with no shared state." },
                  { title: "Execution Logs", desc: "Every action is logged with timestamps for complete audit trails." },
                  { title: "Automatic Recovery", desc: "Built-in retry logic handles transient failures without user intervention." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50">
                      <Shield className="h-4 w-4 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-4">
                  {[
                    { label: "CREDENTIALS", text: "AES-256-GCM Encrypted", color: "text-green-400" },
                    { label: "STORAGE", text: "Private + Signed URLs", color: "text-sky-400" },
                    { label: "SESSIONS", text: "Fully Isolated", color: "text-purple-400" },
                    { label: "AUDIT", text: "100% Logged", color: "text-amber-400" },
                    { label: "COMPLIANCE", text: "SOC 2 Type II", color: "text-green-400" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-3 border-b border-slate-800">
                      <span className="text-xs font-bold text-slate-500">{item.label}</span>
                      <span className={`text-sm font-medium ${item.color}`}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Ready to automate your meetings?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Start scheduling your Odally agent today. No credit card required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" className="h-11 px-8 rounded-lg bg-sky-500 hover:bg-sky-600">
              <Link href="/dashboard" className="flex items-center gap-2">
                Schedule a Meeting <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-8 rounded-lg">
              <Link href="#how-it-works" className="flex items-center gap-2">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500">
                  <span className="text-xs font-bold text-white">O</span>
                </div>
                <span className="text-base font-semibold text-slate-900">Odally</span>
              </div>
              <p className="text-sm text-slate-500">AI-powered meeting attendance. Schedule once, let your agent handle the rest.</p>
            </div>
            {[
              { title: "Product", links: ["Dashboard", "Calendar", "Videos", "Settings"] },
              { title: "Resources", links: ["Documentation", "API", "Status", "Changelog"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-slate-900 mb-3">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span className="text-sm text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">{link}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-slate-400">© 2026 Odally. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="cursor-pointer hover:text-slate-600">Privacy</span>
              <span className="cursor-pointer hover:text-slate-600">Terms</span>
              <span className="cursor-pointer hover:text-slate-600">Security</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
