import { SpinnerIcon } from "../svgs/SpinnerIcon";

export function LoadingScreen() {
  return (
    <div className="flex min-w-full min-h-screen">
      <div className="m-auto flex flex-col items-center gap-4 animate-bounce">
        <span className="text-lg  text-primary ">
          Something amazing is loading...
        </span>
        <SpinnerIcon className="w-8 h-8 text-primary" />
      </div>
    </div>
  );
}
