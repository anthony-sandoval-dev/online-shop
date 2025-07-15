export async function Footer() {
	return (
		<footer className="w-full bg-neutral-50 p-6 text-neutral-800 md:py-12">
			<div className="container mt-8 flex max-w-7xl flex-col items-center justify-center gap-4 text-sm text-neutral-500 md:flex-row text-center">
				<div>
					<p>© {new Date().getFullYear()} Kiri Ecommerce</p>
					<p>
						<a href="https://github.com/anthony-sandoval-dev/online-shop">
							View Source Code under the AGPL license
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
