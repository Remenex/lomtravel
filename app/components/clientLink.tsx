"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomIcon from "./customicon";

type Props = {
  color?: string;
  radius?: string;
  padding?: string;
  signedText?: string | null | undefined;
  notSignedText?: string;
  signedUrl?: string;
  notSignedUrl?: string;
  signedIcon?: string;
  notSignedIcon?: string;
  action?: string;
  linkVisibility: string;
};

export default function ClientLink({
  color = "main",
  radius = "",
  padding = "",
  signedText = "",
  notSignedText = "",
  signedUrl = "#",
  notSignedUrl = "#",
  signedIcon = "",
  notSignedIcon = "",
  action = "",
  linkVisibility = "",
}: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Link
      href={session ? signedUrl : notSignedUrl}
      className={`bg-${color} rounded-${radius} ${padding} text-white flex justify-center items-center gap-3 hover:bg-title transition-all duration-300 ease-in-out ${linkVisibility}`}
      onClick={
        action === "signout" && session
          ? async () => {
              await signOut({ redirect: false });
              router.replace("/");
            }
          : undefined
      }
    >
      {session ? signedText : notSignedText}
      {(signedIcon || notSignedIcon) && (
        <CustomIcon name={session ? signedIcon : notSignedIcon} />
      )}
    </Link>
  );
}
