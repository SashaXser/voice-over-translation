// JSON.stringify with new line in the end and double spaces before keys
export function prettyStringify(content: any) {
  const result = JSON.stringify(content, null, 2);
  return result ? result + "\n" : result;
}

// maybe make a lib-client for yandex translate and use it
export async function translate(text: string, langPair: string = "en-ru") {
  try {
    const res = await fetch(
      `https://browser.translate.yandex.net/api/v1/tr.json/translate?` +
        new URLSearchParams({
          srv: "browser_video_translation",
          text,
          lang: langPair,
        }),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 YaBrowser/24.7.0.0 Safari/537.36",
          Referer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          Origin: "https://www.youtube.com",
        },
        body: new URLSearchParams({
          maxRetryCount: "2",
          fetchAbortTimeout: "500",
        }),
      },
    );

    if (![200, 400, 413].includes(res.status)) {
      console.error(`API error: ${res.statusText} (${res.status})`);
      throw new Error("Unable to access Yandex API");
    }

    return ((await res.json()) as { text: string[] }).text[0];
  } catch (err) {
    console.log(
      `Failed to fetch translation for ${text}. Reason: ${err.message}`,
    );
    throw new Error("Internal server error");
  }
}
