#!/usr/bin/env zx
$.verbose = false;

const USER = process.env.USER;
const HOST = process.env.HOST;
const SSH_PORT = process.env.SSH_PORT;
const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH;
const LOCAL_PORT = process.env.LOCAL_PORT;
const REMOTE_PORT = process.env.REMOTE_PORT;

const missingArguments = [
  { name: 'USER', value: USER },
  { name: 'HOST', value: HOST },
  { name: 'SSH_PORT', value: SSH_PORT },
  { name: 'PRIVATE_KEY_PATH', value: PRIVATE_KEY_PATH },
  { name: 'LOCAL_PORT', value: LOCAL_PORT },
  { name: 'REMOTE_PORT', value: REMOTE_PORT },
].filter(arg => !arg.value).map(arg => arg.name);

if (missingArguments.length > 0) {
  console.log(`\nMissing Arguments: ${missingArguments.join(', ')}\n`);
  await $`exit 1`;
}

await $`sleep 1`;

console.log(`\nConnected to ${USER}@${HOST} on port ${SSH_PORT} | Forwarding 127.0.0.1:${LOCAL_PORT} -> ${HOST}:${REMOTE_PORT}...\n`);

try {
  await $`ssh -i ${PRIVATE_KEY_PATH} ${USER}@${HOST} -p ${SSH_PORT} -N -L ${LOCAL_PORT}:127.0.0.1:${REMOTE_PORT} -o ConnectTimeout=3`;
} catch (e) {
  console.log(`Unable to connect to ${USER}@${HOST}\n${e}`);
  await $`exit 1`;
}
