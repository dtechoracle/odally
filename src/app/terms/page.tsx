import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, FileText, Lock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Odally",
  description: "Terms and conditions governing the use of Odally AI Meeting Surrogate Agent.",
};

export default function TermsPage() {
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
            <Link href="/policy" className="text-slate-600 hover:text-slate-900">
              Privacy Policy
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold mb-4 border border-sky-100">
              <FileText className="h-3.5 w-3.5" />
              Legal Agreement
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Last updated: November 20, 2026 · Effective Date: November 20, 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-slate-700">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By signing in, accessing, or using <strong>Odally</strong> ("the Service", "we", "our", or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not access or use Odally.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">2. Description of the Service</h2>
              <p>
                Odally provides an autonomous AI meeting surrogate agent designed to attend, present on behalf of, and document meetings (including Google Meet sessions) on your explicit instruction. Features include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Automated calendar synchronization via Google Calendar API.</li>
                <li>Live presentation of pre-uploaded video presentations, documents, or structured talking points.</li>
                <li>Spoken text-to-speech audio injection and real-time caption monitoring.</li>
                <li>Post-meeting executive summaries, action item extraction, and follow-up email draft generation.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">3. User Responsibilities & Conduct</h2>
              <p>You agree to use Odally responsibly and comply with all applicable local, national, and international laws. Specifically, you agree that:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>You will only dispatch the Odally agent to meetings you are authorized to attend or host.</li>
                <li>You will notify other meeting participants that an AI agent is attending on your behalf (Odally automatically introduces itself upon joining to ensure transparency).</li>
                <li>You will not upload or transmit illegal, abusive, defamatory, or infringing materials through the Service.</li>
                <li>You are solely responsible for all actions taken and materials presented by your assigned bot in meetings.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">4. Google Account & Calendar Access</h2>
              <p>
                When you connect your Google Account, Odally requests permission to access your Google Calendar (<code>calendar.readonly</code>) to identify upcoming scheduled meetings and retrieve meeting join links (Google Meet URLs).
              </p>
              <p>
                We do not alter, delete, or create calendar events without your explicit request. You may revoke access at any time through your Google Account Security Settings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">5. Intellectual Property Rights</h2>
              <p>
                You retain complete ownership and intellectual property rights over all materials you provide to the Service, including video presentations, uploaded documents, briefing notes, and custom talking points.
              </p>
              <p>
                Odally retains all rights, title, and interest in and to the Service, its underlying algorithms, trademarks, and user interfaces.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">6. AI Processing & Third-Party APIs</h2>
              <p>
                Odally utilizes advanced artificial intelligence language models (including DeepSeek) to analyze meeting transcripts, attendee questions, and briefing materials. While we strive for extreme accuracy:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>AI-generated summaries, action items, and follow-up emails are provided for informational and productivity purposes and should be reviewed by you before sending.</li>
                <li>Odally is not liable for errors, omissions, or misinterpretations in AI-generated summaries or spoken responses.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">7. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account at our discretion if you violate these Terms or engage in fraudulent, harmful, or abusive behavior. You may terminate your account at any time by contacting support or deleting your account in settings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">8. Disclaimer of Warranties & Limitation of Liability</h2>
              <p>
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. To the fullest extent permitted by law, Odally shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">9. Contact Information</h2>
              <p>
                If you have questions or concerns regarding these Terms, please contact us at:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                <p className="font-semibold text-slate-900">Odally Support & Legal Team</p>
                <p className="text-slate-600 mt-0.5">Email: <a href="mailto:support@odally.com" className="text-sky-600 underline">support@odally.com</a></p>
                <p className="text-slate-600">Website: <a href="https://odally.com" className="text-sky-600 underline">https://odally.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
