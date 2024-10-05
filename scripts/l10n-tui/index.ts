import { getAction, runAction } from "./actions/main";

async function main() {
  const action = await getAction();
  if (!action) {
    return;
  }

  await runAction(action);
}

await main();
