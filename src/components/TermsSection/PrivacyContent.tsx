import TextLink from "../Links/TextLink";

export default function PrivacyContent() {
  return (
    <>
      <p className="mb-4">
        <em>Effective Date: 2025.01.01</em>
      </p>

      <p className="mb-4">
        This website allows users to log in using third-party authentication
        (such as Google or Github) to post comments. By logging in, you consent
        to the collection and limited use of your information as outlined below.
      </p>

      <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
        1. What Information I Collect
      </h2>
      <ul className="mb-3 list-disc pl-6">
        <li>
          Login credentials via OAuth provider (e.g., name, email address,
          profile picture)
        </li>
        <li>Public comments you post on this site</li>
      </ul>

      <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
        2. How I Use Your Information
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
        I do not sell, rent, or share your personal data with third parties.
        Authentication is handled via Firebase and your selected OAuth provider.
      </p>

      <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
        4. Your Rights
      </h2>
      <p className="mb-3 pl-3">
        If you wish to request data deletion or have privacy concerns, please
        contact me at:{" "}
        <TextLink
          href={"mailto:hi@rolandtoth.com"}
          className={"text-light-500"}
        >
          hi@rolandtoth.com
        </TextLink>
      </p>

      <h2 className="mb-3 w-max rounded-xl bg-dark-500 px-3 py-[2px] text-sm text-dark-100">
        5. Changes
      </h2>
      <p className="mb-3 pl-3">
        This policy may be updated occasionally. Continued use of the site after
        changes means you accept the updated policy.
      </p>
    </>
  );
}
