install: 
	pnpm install --frozen-lockfile

brain-games:
	node bin/brain-games.js

publish:
	pnpm publish --dry-run

lint:
	pnpx oxlint .
