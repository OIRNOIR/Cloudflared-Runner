# runners

Make sure there is a crontab. Run this as root!
`*/5 * * * * systemd-cat -t "cloudflared-runner" /root/.bun/bin/bun /root/path/to/Cloudflared-Runner/index.ts`

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
