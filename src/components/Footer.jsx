import {FaRegCopyright} from "react-icons/fa"

function Footer() {
  const date = new Date();
  return <div className="flex justify-center items-end font-thin text-sm h-32">
    Copyright <FaRegCopyright/> {date.getUTCFullYear()} rocketonthemoon. All Rights Reserved
    </div>;
}

export default Footer;
