import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import BaseButton from "./BaseButton";

type MintProps = {
    mint: () => void;
};

const MintButton = ({ mint }: MintProps) => {
		return (
            <Flex flexDir="column" my="20px" justify="space-around" h="100px">
                <Text>Wallet connected! View your NFTs or...</Text>
                <BaseButton onClick={() => mint()} title="Mint"/>
            </Flex>
		);
};

export default MintButton;
