import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type BaseButtonProps = {
	onClick: () => void;
	title?: string;
    children?: ReactNode;
};

const BaseButton = ({ onClick, title, children }: BaseButtonProps) => {
	return (
		<Button bgColor="#00ef8b" onClick={onClick}>
			{title ? title : children}
		</Button>
	);
};

export default BaseButton;
