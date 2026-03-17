import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {userStore} from "@/store/userStore";
import defaultImage from "../../../public/defaultImage.png"

interface MemberProfileImageProps {
  path: string;
  width: number;
  height: number;
}
function MyLoginBtn({ path, width, height }: Readonly<MemberProfileImageProps>) {
  const { profileImage} = userStore();
  return (
    <div className="rounded-full overflow-hidden w-fit">
      {}
      <Link href={path}>
        <Image src={profileImage ? profileImage : defaultImage} alt={`profileImage`} width={width} height={height}/>
      </Link>
    </div>
  );
}

export default MyLoginBtn;
