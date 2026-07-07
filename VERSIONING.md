# Versioned GitHub Pages Deployments

Runtime Studio publishes multiple site versions from this repository.

| Source | URL |
| --- | --- |
| `main` branch | https://abdullahchishti.github.io/runtimeStudio/ |
| Tag `v1.0` | https://abdullahchishti.github.io/runtimeStudio/v1.0/ |
| Tag `v2.0` | https://abdullahchishti.github.io/runtimeStudio/v2.0/ |

## How it works

- Pushes to `main` build with `NEXT_PUBLIC_BASE_PATH=/runtimeStudio` and deploy the site root on the `gh-pages` branch.
- Pushes to tags matching `v*` (for example `v1.0`, `v2.0`) build with `NEXT_PUBLIC_BASE_PATH=/runtimeStudio/v1.0` and deploy into a matching subfolder on `gh-pages`.
- Deployments use `peaceiris/actions-gh-pages` with `keep_files: true` so existing versions are preserved when a new version is published.

## GitHub Pages settings

In the repository **Settings → Pages**, set:

- **Source**: Deploy from a branch
- **Branch**: `gh-pages` / `/ (root)`

## Release a new version

1. Merge changes to `main`.
2. Create and push a version tag:

```bash
git tag v2.0
git push origin v2.0
```

The workflow builds and deploys to `https://abdullahchishti.github.io/runtimeStudio/v2.0/`.

## Local builds

Latest (same as `main` deploy):

```bash
npm run build:pages
```

Specific version (replace `1.0` with the target version):

```bash
VERSION=1.0 npm run build:pages:version
```

This sets:

- `NEXT_PUBLIC_BASE_PATH=/runtimeStudio/v1.0`
- `NEXT_PUBLIC_SITE_URL=https://abdullahchishti.github.io/runtimeStudio/v1.0`
- `NEXT_PUBLIC_APP_VERSION=1.0`
