import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa6";
import Button from "../Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
           <Link to={'/'}>
            <Image src={logo} />
           </Link>
          </div>
          <div className="">
            <ul className="flex items-center gap-x-4">
              <li>
                <Link to={"/"}  className="flex items-center">
                  Home <FaAngleDown />
                </Link>
              </li>

              <li>
                <Link to={"/about"}  className="flex items-center">
                  About <FaAngleDown />
                </Link>
              </li>

              <li className="flex items-center">
                Service <FaAngleDown />
              </li>
              <li className="flex items-center">
                Home <FaAngleDown />
              </li>
            </ul>
          </div>
          <div className="">
            <Button btnTxt={"Contact Us"} className={"text-white"} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
