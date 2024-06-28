Example of shared modules not being resolved by `@module-federation/nextjs-plugin` when installed as a dependency at the root of a monorepo.

- `pnpm install`
- `pnpm dev`

Causes error:

```
No required version specified and unable to automatically determine one.
Unable to find required version for "next" in description file (<...>/apps/app1/package.json).
It need to be in dependencies, devDependencies or peerDependencies.
```
