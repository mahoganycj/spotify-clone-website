import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BorderedButton } from "./BorderedButton";
import { ReactNode } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type  ThirdPartyAuthButtonProps = {
    icon: IconProp;
    provider: string;
}

export default function ThirdPartyAuthButton({ icon, provider }: ThirdPartyAuthButtonProps) {
  return (
    <BorderedButton className="flex gap-6 px-8 py-3 font-bold">
      <FontAwesomeIcon size="lg" icon={icon} />
      <span className="mx-auto">Continue with {provider}</span>
    </BorderedButton>
  );
}
