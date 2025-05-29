import InlineModal from "./InlineModal";
import PrivacyContent from "./PrivacyContent";
import TermsContent from "./TermsContent";

export default function TermsSection() {
  return (
    <div className="my-2 text-xsm">
      *by signing in, you consent to the website’s{" "}
      <InlineModal title="Terms of Service">
        <TermsContent />
      </InlineModal>{" "}
      and{" "}
      <InlineModal title="Privacy Policy">
        <PrivacyContent />
      </InlineModal>
    </div>
  );
}
