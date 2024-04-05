import Image from "next/image";

export default function Header() {
	return (
		<div className={`flex justify-between py-4 px-8`}>
			<div
				className={`text-center flex-1 flex justify-center items-center text-xl font-bold tracking-wider`}
			>
				ULTIMATE 
				<Image
					src="/favicon.png"
					alt="Logo"
					width={72}
					height={72}
					priority
				/>
				STORAGE
			</div>
		</div>
	)
}