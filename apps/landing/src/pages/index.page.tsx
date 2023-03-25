import { Helmet } from 'react-helmet';

function Page() {

	return (
		<div className="flex w-full flex-col items-center px-4">
			<Helmet>
				<title>Chronowise — A focus timer from the future.</title>
				<meta
					name="description"
					content="Combine your drives and clouds into one database that you can organize and explore from any device. Designed for creators, hoarders and the painfully disorganized."
				/>
				<meta
					property="og:image"
					content="https://raw.githubusercontent.com/chronowise/.github/main/profile/chronowise_icon.png"
				/>
				<meta
					name="keywords"
					content="pomodoro, focus timer, chronowise"
				/>
				<meta name="author" content="Chronowise Technology Inc." />
			</Helmet>
			<div className="mt-22 lg:mt-28" id="content" aria-hidden="true" />
			<div className="mt-24 lg:mt-5" />

			<h1 className="fade-in-heading z-30 mb-3 px-2 text-center text-4xl font-black leading-tight text-white md:text-6xl">
				A focus timer from the future.
			</h1>
		</div>
	);
}

export { Page };