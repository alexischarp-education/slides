#!/usr/bin/env node
// Scaffold a new Slidev deck under apps/ from templates/deck.
//
//   pnpm new:deck <slug> ["Titre du deck"]
//
// Example:  pnpm new:deck css "CSS — BUT MMI S1"
// Creates apps/css/ wired to @alexischarp/slides-theme.

import { existsSync } from 'node:fs';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const TEMPLATE = join(ROOT, 'templates', 'deck');
const APPS = join(ROOT, 'apps');

const usage = () => {
  console.log(`
Usage: pnpm new:deck <slug> ["Titre du deck"]

Exemple:
  pnpm new:deck css "CSS — BUT MMI S1"
  → crée apps/css/ (package @alexischarp/slides-css) basé sur le thème.
`);
};

const toSlug = (input) =>
  input
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const toTitle = (slug) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

const copyTemplate = async (src, dst, replace) => {
  await mkdir(dst, { recursive: true });
  for (const entry of await readdir(src, { withFileTypes: true })) {
    const from = join(src, entry.name);
    const to = join(dst, entry.name);
    if (entry.isDirectory()) {
      await copyTemplate(from, to, replace);
    } else {
      const content = await readFile(from, 'utf8');
      await writeFile(to, replace(content));
    }
  }
};

const main = async () => {
  const rawSlug = process.argv[2];
  if (!rawSlug || rawSlug.startsWith('-')) {
    usage();
    process.exit(1);
  }

  const slug = toSlug(rawSlug);
  if (!slug) {
    console.error(`✗ Slug invalide : "${rawSlug}" (utilise des lettres/chiffres, ex. "css").`);
    process.exit(1);
  }

  const title = process.argv.slice(3).join(' ').trim() || toTitle(slug);
  const name = `@alexischarp/slides-${slug}`;
  const target = join(APPS, slug);

  if (!existsSync(TEMPLATE)) {
    console.error(`✗ Template introuvable : ${TEMPLATE}`);
    process.exit(1);
  }
  if (existsSync(target)) {
    console.error(`✗ apps/${slug} existe déjà — choisis un autre slug.`);
    process.exit(1);
  }

  const replace = (text) => text.replaceAll('{{SLUG}}', slug).replaceAll('{{TITLE}}', title).replaceAll('{{NAME}}', name);

  await copyTemplate(TEMPLATE, target, replace);

  console.log(`
✓ Deck créé : apps/${slug}  (${name})  «${title}»

Prochaines étapes :
  pnpm install
  pnpm --filter ${name} dev
`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
