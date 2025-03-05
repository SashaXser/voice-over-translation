const DEBUG_MODE: boolean;
const IS_BETA_VERSION: boolean;
const AVAILABLE_LOCALES: string[];

function GM_getValue(name: string, def: unknown = undefined): unknown;
function GM_getValue(name: string, def: unknown = undefined): Promise<unknown>;
function GM_setValue(
  name: string,
  value: string | boolean | number | undefined,
): unknown;
function GM_setValue(
  name: string,
  value: string | boolean | number | undefined,
): Promise<unknown>;
function GM_deleteValue(name: string): unknown;
function GM_deleteValue(name: string): Promise<unknown>;
function GM_listValues(): string[];
function GM_listValues(): Promise<string[]>;
