import React from "react";
import type { NextPage } from "next";
import {
  HeaderProvider,
  Language,
  LanguageProvider,
  List,
  LogoProvider,
  Menu,
  MenuProvider,
} from "./index.style";
import Image from "next/image";
import { MainLogo } from "../assets";
import Link from "next/link";

interface MenuInfoType {
  href: string;
  text: string;
}

const Header: NextPage = () => {
  const [menuInfo, setMenuInfo] = React.useState<MenuInfoType[]>([
    { href: "/home", text: "집" },
    { href: "/News", text: "뉴스" },
    { href: "/Financing", text: "투자" },
  ]);

  const [languageInfo, setLanguageInfo] = React.useState<string[]>([
    "EN",
    "KR",
    "JP",
  ]);

  return (
    <HeaderProvider>
      <LogoProvider>
        <Image src={MainLogo} alt={"로고"} />
      </LogoProvider>

      <MenuProvider>
        <Menu>
          {menuInfo.map((data, idx) => {
            return (
              <List key={idx}>
                <Link href={data.href}>
                  <a>{data.text}</a>
                </Link>
              </List>
            );
          })}
        </Menu>

        <LanguageProvider>
          {languageInfo.map((data, idx) => {
            return <Language key={idx}>{data}</Language>;
          })}
        </LanguageProvider>
      </MenuProvider>
    </HeaderProvider>
  );
};
export default Header;
