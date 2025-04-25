import { Badge } from "@/components/ui/badge"

export default function TermsOfServicePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-background">
      <div className="container max-w-4xl py-12 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
        <Badge variant="secondary" className="mb-6">Last updated: January 30th, 2025</Badge>

        <p className="text-muted-foreground">
          Welcome to Ebb, a desktop application for macOS developed by Extremely Bad Builders LLC (“we,” “our,” or “us”). By downloading, installing, or using Ebb, you agree to comply with the following Terms of Use. If you do not agree, do not use the software.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>
            By using Ebb, you acknowledge that you have read, understood, and agreed to these Terms of Use. We may update these terms from time to time, and your continued use of Ebb constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. License Grant</h2>
          <p className="mb-3">
            We grant you a non-exclusive, non-transferable, revocable license to use Ebb on a macOS device for personal or business use. This license does not grant you ownership of the software, and you may not:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 mb-4">
            <li>Modify, reverse engineer, decompile, or disassemble Ebb.</li>
            <li>Sell, distribute, or sublicense Ebb.</li>
            <li>Use Ebb for any illegal or unauthorized purpose.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Data & Privacy</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 mb-4">
            <li><strong>Local Data:</strong> Sensitive information such as app names, window names, mouse movements, and keyboard interactions remains on your device and is not sent to our servers.</li>
            <li><strong>Cloud Data:</strong> To enhance your experience, Ebb stores scores, sessions, streaks, and friends lists on our servers.</li>
            <li><strong>Analytics:</strong> We use PostHog for anonymized usage analytics to improve the product.</li>
            <li><strong>Data Control:</strong> You may remove your profile and delete stored data at any time.</li>
          </ul>
          <p>
            For more details, see our <a href="/privacy" className="text-blue-500 underline hover:no-underline">Privacy Policy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Open Source</h2>
          <p>
            Ebb's tracking engine is based on CodeClimbers, an open-source project maintained by Extremely Bad Builders LLC. This means certain aspects of the technology are publicly available and contribute to the broader developer community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Disclaimer of Warranties</h2>
          <p className="mb-3">
            Ebb is provided "as is" and "as available" without any warranties of any kind, including but not limited to:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 mb-4">
            <li>Fitness for a particular purpose.</li>
            <li>Non-infringement of third-party rights.</li>
            <li>Continuous availability, error-free operation, or compatibility with all macOS versions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
          <p className="mb-3">
            To the fullest extent permitted by law, Extremely Bad Builders LLC is not liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of Ebb, including but not limited to:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 mb-4">
            <li>Loss of data, productivity, or profits.</li>
            <li>Software conflicts or system failures.</li>
            <li>Security breaches caused by third-party software or user negligence.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to Ebb if you violate these Terms of Use. Upon termination, you must stop using and delete all copies of Ebb.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Governing Law</h2>
          <p>
            These Terms of Use are governed by and interpreted in accordance with the laws of [Your State/Country], without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Contact Information</h2>
          <p className="mb-3">
            For questions regarding these terms, please contact us at:
          </p>
          <ul className="list-none pl-4 space-y-1">
            <li>📧 Email: <a href="mailto:nathan@ebb.cool" className="text-blue-500 underline hover:no-underline">nathan@ebb.cool</a></li>
            <li>🏢 Company: Extremely Bad Builders LLC</li>
          </ul>
        </section>
      </div>
    </main>
  )
} 