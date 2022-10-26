import React from "react";
import { FlowAccount } from "../types/flowTypes";
import { Flex, Text } from "@chakra-ui/react";
import BaseButton from "./BaseButton";

type LogoutProps = {
	user: FlowAccount | undefined;
	logOut: () => void;
};

const LogoutButton = ({ user, logOut }: LogoutProps) => {
	return (
		<Flex w="230px" align="center" justify="space-between" my="30px">
            <Text>Logout:</Text>
			<BaseButton onClick={() => logOut()}>
				<Text>
					❎ {"  "}
					{user!.addr.substring(0, 6)}...
					{user!.addr.substring(user!.addr.length - 4)}
				</Text>
			</BaseButton>
		</Flex>
	);
};

export default LogoutButton;
