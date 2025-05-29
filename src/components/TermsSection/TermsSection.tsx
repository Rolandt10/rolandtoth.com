import TextLink from "../Links/TextLink.astro";
import Modal from "../Modal/Modal";

export default function TermsSection() {
  return (
    <div className="my-2 text-xsm">
      *by signing in, you consent to the website’s{" "}
      <Modal
        trigger={
          <button className="cursor-pointer underline">Terms of Service</button>
        }
        title="Terms of Service"
      >
        <p className="mb-4">
          <em>
            Effective Date: <time dateTime="2025-01-01">2025.01.01</time>
          </em>
        </p>

        <p className="mb-4">
          By accessing and using this website, you agree to the following terms:
        </p>

        <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
          1. Account and Login
        </h2>
        <p className="pb-3 pl-3">
          Users may log in via third-party authentication (e.g., Google) to post
          comments. You are responsible for your login credentials and account
          activity.
        </p>

        <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
          2. User Conduct
        </h2>
        <p className="pb-3 pl-3">
          You agree not to post abusive, illegal, spammy, or offensive content.
          Comments violating these rules may be removed, and access may be
          revoked.
        </p>

        <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
          3. Content Ownership
        </h2>
        <p className="pb-3 pl-3">
          Comments you post remain your responsibility. By posting, you grant
          this site a non-exclusive license to display your content publicly.
        </p>

        <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
          4. No Warranty
        </h2>
        <p className="pb-3 pl-3">
          This site is provided “as is” without warranties of any kind.
          Availability or uninterrupted access is not guaranteed.
        </p>

        <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
          5. Limitation of Liability
        </h2>
        <p className="pb-3 pl-3">
          This site owner is not liable for any damages arising from the use of
          this site or user-generated content.
        </p>

        <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
          6. Changes
        </h2>
        <p className="pb-3 pl-3">
          These terms may change over time. Continued use of the site after
          changes constitutes acceptance of the new terms.
        </p>
      </Modal>{" "}
      and{" "}
      <Modal
        title="Privacy Policy"
        trigger={
          <button className="cursor-pointer underline">Privacy Policy</button>
        }
      >
        <p className="mb-4">
          <em>Effective Date: 2025.01.01</em>
        </p>

        <p className="mb-4">
          This website allows users to log in using third-party authentication
          (such as Google or Github) to post comments. By logging in, you
          consent to the collection and limited use of your information as
          outlined below.
        </p>

        <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
          1. What Information We Collect
        </h2>
        <ul className="mb-3 list-disc pl-6">
          <li>
            Login credentials via OAuth provider (e.g., name, email address,
            profile picture)
          </li>
          <li>Public comments you post on this site</li>
          <li>Basic usage data (IP address, browser type, visit timestamps)</li>
        </ul>

        <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
          2. How We Use Your Information
        </h2>
        <ul className="mb-3 list-disc pl-6">
          <li>To authenticate users and enable comment posting</li>
          <li>To display your name or profile image with comments</li>
          <li>To ensure the website functions correctly</li>
        </ul>

        <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
          3. Data Sharing
        </h2>
        <p className="mb-3 pl-3">
          We do not sell, rent, or share your personal data with third parties.
          Authentication is handled via Firebase and your selected OAuth
          provider.
        </p>

        <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
          4. Cookies
        </h2>
        <p className="mb-3 pl-3">
          This site may use cookies required for authentication and session
          management. No tracking or marketing cookies are used.
        </p>

        <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
          5. Your Rights
        </h2>
        <p className="mb-3 pl-3">
          If you wish to request data deletion or have privacy concerns, please
          contact me at:{" "}
          <a href="mailto:hi@rolandtoth.com" className="underline">
            hi@rolandtoth.com
          </a>
        </p>

        <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
          6. Changes
        </h2>
        <p className="mb-3 pl-3">
          This policy may be updated occasionally. Continued use of the site
          after changes means you accept the updated policy.
        </p>
      </Modal>
    </div>
  );
}
