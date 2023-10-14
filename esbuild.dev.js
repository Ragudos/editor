import * as esbuild from "esbuild";

try {
    const ctx = await esbuild.context({
        bundle: true,
        minify: true,
        splitting: true,
        loader: {
            ".html": "copy",
            ".png": "file",
            ".svg": "file",
            ".webp": 'file',
            ".jpg": "file"
        },
        format: "esm",
        outdir: "dist",
        assetNames: "[name]-[hash]",
        platform: "neutral",
        entryPoints: ["./src/*.ts", "index.html"],
        logLevel: "silent",
        publicPath: "public",
        banner: {
            js: "(() => { (new EventSource(\"/esbuild\")).addEventListener('change', () => location.reload()); })();",
        },
    });

    const r = await ctx.serve({
        servedir: "dist",
        port: 3000,
    })

    console.log(`Development Server Started on ${r.host}:${r.port}`);
} catch (err) {
    console.error(err);
}
