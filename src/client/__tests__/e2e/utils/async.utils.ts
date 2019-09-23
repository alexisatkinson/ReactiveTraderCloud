export function delay(ms: number): Promise<never> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

/**
 * Finds an item inside an array using an asynchronous matcher.
 * @param items Array to search
 * @param matcher Async matcher function.
 * @returns Promise resolving into the first item that matched. If none were found, the promise will resolve to `undefined`.
 */
export async function findAsync<T>(
  items: T[],
  matcher: (item: T, index?: number) => Promise<boolean>
): Promise<T> {
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    if (await matcher(item, index)) {
      return item;
    }
  }

  return undefined;
}

/**
 * Filters an array using an asynchronous predicate.
 * @param items Array to filter
 * @param predicate Async predicate function
 * @returns Promise resolving into an array of matching items. Is none were found, the promise will resolve into an empty array.
 */
export async function filterAsync<T>(
  items: T[],
  predicate: (item: T, index?: number) => Promise<boolean>
): Promise<T[]> {
  const results: T[] = [];

  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    const matches = await predicate(item, index);

    if (matches) {
      results.push(item);
    }
  }

  return results;
}

/**
 * Maps an array using an asynchronous mapper.
 * @param items Array to map.
 * @param mapper Async mapping function.
 * @returns Promise resolving into an array of the mapped items.
 */
export async function mapAsync<TIn, TOut>(
  items: TIn[],
  mapper: (item: TIn, index?: number) => Promise<TOut>
): Promise<TOut[]> {
  const results: TOut[] = [];

  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    const mappedItem = await mapper(item, index);

    results.push(mappedItem);
  }

  return results;
}

/**
 * Loops sequentially through an array.
 * @param items Array to loop through.
 * @param callback Action to be executed for each item.
 * @returns Promise resolving when all items have been looped through sequentially.
 */
export async function forEachAsync<T>(
  items: T[],
  callback: (item: T, index?: number) => Promise<void>
): Promise<void> {
  for (let index = 0; index < items.length; index++) {
    const item = items[index];

    await callback(item, index);
  }
}
