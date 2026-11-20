import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Database, Trash2, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Odally",
  description: "Learn how Odally collects, protects, and handles your data, including Google user data.",
};

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 font-sans antialiased">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-900 font-bold text-lg hover:opacity-80 transition-opacity">
            <svg width="26" height="25" viewBox="0 0 26 25" aria-label="Odally">
              <rect x=".5" y=".5" width="25" height="24" rx="7" fill="#38c6ec" />
              <ellipse cx="13" cy="12.5" rx="5.5" ry="6" stroke="white" strokeWidth="2.2" fill="none" />
            </svg>
            <span>Odally</span>
          </Link>
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/terms" className="text-slate-600 hover:text-slate-900">
              Terms of Service
            </Link>
            <Link href="/" className="flex items-center gap-1 text-sky-600 hover:text-sky-700">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 shadow-xs space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-4 border border-emerald-100">
              <Shield className="h-3.5 w-3.5" />
              Privacy & Security
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Last updated: November 20, 2026 · Effective Date: November 20, 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-slate-700">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
              <p>
                At <strong>Odally</strong> ("we", "our", or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and disclose information when you access or use Odally and its associated services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
              <p>We collect only the information necessary to provide and operate the Odally meeting surrogate service:</p>
              
              <div className="space-y-3 pl-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900">A. Account Information (via Google OAuth)</p>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    When you authenticate using Google Sign-In, we collect your primary Google profile information: your name, email address, profile avatar image, and unique user identifier.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900">B. Google Calendar Data</p>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    With your explicit permission, we access your Google Calendar via the <code>https://www.googleapis.com/auth/calendar.readonly</code> scope to retrieve upcoming scheduled events, meeting titles, scheduled times, and meeting join links (e.g. Google Meet URLs) to enable automated bot scheduling.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900">C. Presentation Materials & Briefings</p>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Video presentation recordings, documents (.docx, .pdf, .txt), custom talking points, watched keyword alerts, and intro greetings you upload to brief your agent.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900">D. Meeting Intelligence & Captions</p>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Real-time closed captions and chat messages captured during the Google Meet call to detect attendee questions, track participant mentions, and synthesize post-meeting executive summaries and action items.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">3. How We Use Your Information</h2>
              <p>We use the collected information exclusively to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Display your upcoming meetings on the calendar and allow 1-click agent dispatch.</li>
                <li>Join Google Meet sessions on your behalf to present your materials and monitor discussion.</li>
                <li>Generate post-meeting executive summaries, action item checklists, and 1-click follow-up email drafts.</li>
                <li>Send transactional notifications regarding agent status (e.g., meeting joined, meeting finished).</li>
              </ul>
            </section>

            {/* Google API Limited Use Disclosure - Crucial for Verification */}
            <section className="space-y-3 p-5 rounded-xl bg-sky-50/70 border border-sky-200">
              <h2 className="text-lg font-bold text-sky-950 flex items-center gap-2">
                <Shield className="h-5 w-5 text-sky-600" />
                4. Google API Services User Data Policy (Limited Use Disclosure)
              </h2>
              <p className="text-sky-900 text-sm leading-relaxed">
                <strong>Odally's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer" className="underline font-semibold text-sky-800">Google API Services User Data Policy</a>, including the Limited Use requirements.</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-sky-800">
                <li>We do <strong>NOT</strong> sell Google user data to third parties, data brokers, or advertising networks.</li>
                <li>We do <strong>NOT</strong> use Google user data for advertising or marketing profiling.</li>
                <li>We do <strong>NOT</strong> use or transfer Google user data to train generalized AI/ML models without your explicit consent.</li>
                <li>Humans do not read your Google Calendar data unless you explicitly request support, or required for security investigations.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">5. Data Sharing & Third-Party Processors</h2>
              <p>
                We do not sell, rent, or trade your personal information. We only share data with trusted infrastructure providers required to operate Odally:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li><strong>Cloud Storage & Database Providers:</strong> Encrypted hosting of databases and media assets (AWS, Neon, Cloudflare).</li>
                <li><strong>AI Processing:</strong> Encrypted API calls to LLM inference providers (DeepSeek) to summarize meeting transcripts and generate action items. Data sent is transient and strictly governed by developer privacy agreements.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">6. Data Retention & Deletion</h2>
              <p>
                We retain your account data and meeting summaries only as long as your account remains active.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>You can delete any individual meeting, document, or video presentation at any time directly in your dashboard.</li>
                <li>You can request complete deletion of your account and all associated data by emailing <a href="mailto:privacy@odally.com" className="text-sky-600 underline">privacy@odally.com</a>. Upon request, all stored data will be permanently wiped within 30 days.</li>
                <li>You can revoke Odally's access to your Google account at any time via <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer" className="text-sky-600 underline">Google Account Permissions</a>.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">7. Data Security</h2>
              <p>
                We implement industry-standard administrative, physical, and technical security safeguards:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>All data in transit is encrypted using modern TLS (HTTPS).</li>
                <li>Sensitive authentication tokens (such as Google OAuth refresh tokens) are encrypted at rest.</li>
                <li>Playwright worker sessions run in isolated, stateless containers that terminate upon meeting completion.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any material changes will be announced on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">9. Contact Us</h2>
              <p>
                If you have questions, feedback, or data privacy requests regarding this policy, please reach out to:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                <p className="font-semibold text-slate-900">Odally Privacy Officer</p>
                <p className="text-slate-600 mt-0.5">Email: <a href="mailto:privacy@odally.com" className="text-sky-600 underline">privacy@odally.com</a></p>
                <p className="text-slate-600">Website: <a href="https://odally.com/policy" className="text-sky-600 underline">https://odally.com/policy</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
