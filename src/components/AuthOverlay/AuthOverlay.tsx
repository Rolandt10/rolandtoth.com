import { GithubIcon, GoogleIcon } from "../Icons/Icons";
import SocialLoginButton from "../SocialLoginButton/SocialLoginButton";
import { loginWithGoogle, loginWithGithub } from "../../utils/authProviders";

export default function AuthOverlay() {
  const loginGoogle = () => loginWithGoogle().catch(console.error);
  const loginGitHub = () => loginWithGithub().catch(console.error);

  return (
    <div
      className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 rounded-xl bg-white/75 backdrop-blur-sm"
      style={{
        clipPath: "inset(0 round 4px)",
      }}
    >
      <p className="w-max rounded-full bg-dark-500 px-5 py-1 text-center text-sm text-dark-100 shadow-md">
        Sign in to leave a comment
      </p>
      <div className="flex gap-2">
        <SocialLoginButton
          onClick={loginGoogle}
          type="button"
          label="Google"
          icon={
            <GoogleIcon
              size={15}
              viewBox="0 0 58 58"
              strokeWidth="4"
              className="text-dark-400"
            />
          }
        />
        <SocialLoginButton
          onClick={loginGitHub}
          type="button"
          label="Github"
          icon={<GithubIcon size={14} className="text-dark-400" />}
        />
      </div>
    </div>
  );
}
