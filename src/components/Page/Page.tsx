import React from "react";

export default function Page({
	background = "white",
	children,
	className,
}: {
	background: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<section className={`bg-${background}  relative mx-auto p-4 md:p-8 lg:p-16 ${className}`}>{children}</section>
	);
}
