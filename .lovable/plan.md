# Fix Vercel deployment

## Changes
- Remove the incorrect output-folder override that makes Vercel search for a nonexistent `client` directory.
- Let the app’s existing Vercel build integration publish its generated deployment output directly.
- Keep the portfolio itself and GitHub Pages setup unchanged.

## Verification
- Confirm the local preview build remains healthy.
- Commit the corrected Vercel configuration to the connected `sajjadmobiledev` repository so a fresh deployment can start.
