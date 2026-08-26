install: 
	pnpm install --frozen-lockfile

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	pnpm publish --dry-run

lint:
	pnpx oxlint .
