import Image from "next/image";
import Link from "next/link";
import s from "@/styles/Admin.module.css";

export default function BrandLogo() {
  return <Link href="/" className={s.logo} aria-label="Anondo Housing Society home">
    <Image src="/logo.jpg" alt="Anondo Housing Society" width={160} height={100} priority />
  </Link>;
}
