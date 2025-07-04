## DEV

### Client

To run this client app use command `pnpm tauri dev`.

Required libraries:

#### Fedora
```bash
sudo dnf install -y glib2-devel gtk3-devel cairo-devel pango-devel atk-devel gdk-pixbuf2-devel webkit2gtk4.1-devel
```
---


  ➜  Local:   http://localhost:1420/
     Running DevCommand (`cargo  run --no-default-features --color always --`)
        Info Watching /home/shd/projects/cloud-notes/client/src-tauri for changes...
   Compiling tailwind-tauri v0.1.0 (/home/shd/projects/cloud-notes/client/src-tauri)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 12.25s
     Running `target/debug/tailwind-tauri`
Gdk-Message: 21:22:52.641: Error 71 (Protocol error) dispatching to Wayland display.
9:22:52 PM [vite] Internal server error: The service is no longer running
  Plugin: vite:esbuild
  File: /home/shd/projects/cloud-notes/client/src/main.tsx
      at /home/shd/projects/cloud-notes/client/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:716:38
      at sendRequest (/home/shd/projects/cloud-notes/client/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:597:36)
      at start (/home/shd/projects/cloud-notes/client/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:715:9)
      at Object.transform2 [as transform] (/home/shd/projects/cloud-notes/client/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:776:5)
      at /home/shd/projects/cloud-notes/client/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:2038:77
      at new Promise (<anonymous>)
      at Object.transform (/home/shd/projects/cloud-notes/client/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:2038:36)
      at transform (/home/shd/projects/cloud-notes/client/node_modules/.pnpm/esbuild@0.25.5/node_modules/esbuild/lib/main.js:1873:62)
      at transformWithEsbuild (file:///home/shd/projects/cloud-notes/client/node_modules/.pnpm/vite@6.3.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:9137:26)
      at async TransformPluginContext.transform (file:///home/shd/projects/cloud-notes/client/node_modules/.pnpm/vite@6.3.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:9199:24)
9:22:52 PM [vite] Pre-transform error: The service is no longer running
  Plugin: vite:esbuild
  File: /home/shd/projects/cloud-notes/client/src/main.tsx
 ELIFECYCLE  Command failed with exit code 1.
