export interface BuildUrlParams {
  paths: string[];
  query: MapObject<string>;
}

export function buildUrl(baseUrl: string, parameters: BuildUrlParams): string {
  const paths = (parameters.paths || []).map(trimUrl);

  const urlSections = [trimUrl(baseUrl), ...paths];
  const url = urlSections.join('/');

  return Object.keys(parameters.query || {}).reduce((acc, key, index) => {
    const separator = index === 0 ? '?' : '&';
    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(parameters.query[key]);

    return `${acc}${separator}${encodedKey}=${encodedValue}`;
  }, url);
}

function trimUrl(url: string): string {
  if (url.endsWith('/')) {
    return url.substr(0, url.length - 1);
  }

  return url;
}
