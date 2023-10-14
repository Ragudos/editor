import * as esbuild from "esbuild";
import fs from "fs";

try {
    const build = await esbuild.build({
        bundle: true,
        minify: true,
        splitting: true,
        metafile: true,
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
        publicPath: "public",
        logLevel: "silent",
    });

    fs.writeFile("dist/meta.json", JSON.stringify(build.metafile));
} catch (err) {
    console.error(err);
}
