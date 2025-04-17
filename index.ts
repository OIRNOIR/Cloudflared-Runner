import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const restartNeeded = fs.existsSync(path.join(__dirname, "restartNeeded.txt"));

try {
	await fetch("https://oirnoir.dev/");
	if (restartNeeded) {
		console.log(
			`${String(new Date())} - Back online! Restarting cloudflared...`,
		);
		exec("systemctl restart cloudflared");
		fs.rmSync(path.join(__dirname, "restartNeeded.txt"));
	}
} catch (err) {
	fs.writeFileSync(path.join(__dirname, "restartNeeded.txt"), "RESTART NEEDED");
	console.log(
		`Attempted ping at ${String(new Date())} failed. The connection is offline, and a cloudflared restart is needed.`,
	);
}
