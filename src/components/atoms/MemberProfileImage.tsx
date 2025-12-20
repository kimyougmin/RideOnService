import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {userStore} from "@/store/userStore";

interface MemberProfileImageProps {
  path: string;
  width: number;
  height: number;
}
function MemberProfileImage({ path, width, height }: Readonly<MemberProfileImageProps>) {
  const { profileImage} = userStore();
  return (
    <div className="rounded-full overflow-hidden w-fit">
      <Link href={path}>
        <Image src={profileImage} alt={`profileImage`} width={width} height={height}/>
      </Link>
    </div>
  );
}

export default MemberProfileImage;
