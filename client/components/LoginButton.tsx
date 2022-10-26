import React from "react";
import { FlowAccount } from "../types/flowTypes";
import { Flex, Button } from "@chakra-ui/react";
import BaseButton from "./BaseButton";

type LoginProps = {
	logIn: () => void;
};

const LoginButton = ({ logIn }: LoginProps) => {
	return (
			<BaseButton onClick={() => logIn()} title="Log in"/>
	);
};

export default LoginButton;
