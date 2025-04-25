import { Badge } from "@/components/ui/badge"

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-background">
      <div className="container max-w-4xl py-12 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <Badge variant="secondary" className="mb-6">Last updated: April 10th, 2025</Badge>

        <p className="text-muted-foreground">
          Welcome to Ebb, a product of Extremely Bad Builders LLC (“we,” “our,” or “us”). Your privacy is important to us, and we are committed to being transparent about how we handle your data.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Data Collection</h2>
          
          <h3 className="text-xl font-medium mb-2">Local Data Storage</h3>
          <p className="mb-3">
            Ebb is local-first and designed with privacy in mind. Sensitive information remains local, such as:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 mb-4">
            <li>App names</li>
            <li>Window names</li>
            <li>Mouse movements</li>
            <li>Keyboard interactions</li>
          </ul>
          <p className="mb-4">
            All of this data remains on your device locally and is never sent to our servers.
          </p>

          <h3 className="text-xl font-medium mb-2">Cloud-Stored Data</h3>
          <p className="mb-3">
            To enhance your experience, we store the following data on our servers:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 mb-4">
            <li>Aggregate Scores</li>
            <li>Focus Presets</li>
            <li>Friends List</li>
            <li>Licenses/Subscription Details</li>
            <li>Active Devices</li>
          </ul>
          <p className="mb-4">
            Additionally, when you log into Ebb using your Google account, we collect and store your email associated with your Google account. This is used for authentication, product updates, and notification reports, which can be opted out of at any time.
          </p>
          <p className="mb-4">
            This allows us to offer a seamless, cloud-powered experience while ensuring your sensitive data remains local.
          </p>

          <h3 className="text-xl font-medium mb-2">Third-Party Integrations (Spotify & Apple Music)</h3>
          <p className="mb-3">
            Ebb allows you to connect your Spotify and Apple Music accounts to enhance your experience. These integrations are completely free and allow you to pull in your music data directly.
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 mb-4">
            <li>We do not store or track any Spotify or Apple Music data on our servers.</li>
            <li>The connection is purely user-initiated and functions as a direct link between you and the music service.</li>
          </ul>
          <p className="mb-4">
            Please see the <a href="https://www.spotify.com/us/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:no-underline">Spotify privacy policy</a> and <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:no-underline">Apple Music privacy policy</a> for more information on how they handle your data.
          </p>
          <p className="mb-4">
             This setup allows us to offer a seamless, cloud-powered experience while ensuring your sensitive data remains local.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Analytics & Data Sharing</h2>
          <p>
            We use PostHog to collect anonymized analytics to improve our product. This data helps us understand how Ebb is used without identifying individual users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Data Control & Deletion</h2>
          <p className="mb-3">
            You have full control over your data. You can:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 mb-4">
            <li>Delete cloud data and unlink your Ebb account from your Google account</li>
            <li>Delete the data generated locally through the Ebb App</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Open Source Commitment</h2>
          <p>
            Ebb's tracking engine is powered by an open-source project we maintain, CodeClimbers. We believe in transparency and continuous improvement in tracking technologies. Our open-source commitment allows us to push forward privacy-conscious innovations while giving the community full visibility into how Ebb operates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Contact Information</h2>
          <p className="mb-3">
            If you have any questions or requests regarding this policy, please contact us at:
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