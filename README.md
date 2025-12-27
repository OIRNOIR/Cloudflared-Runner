# runners

Make sure there is a crontab. Run this as root!

```
*/5 * * * * systemd-cat -t "cloudflared-runner" /root/.deno/bin/deno --allow-read --allow-net --allow-write --allow-run /root/path/to/Cloudflared-Runner/index.ts
```
