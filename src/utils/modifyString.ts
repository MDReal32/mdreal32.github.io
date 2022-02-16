export const modifyString = (
  message: string,
  startIndex = 0,
  endIndex = 1,
  callback: (message: string) => string = e => e.toUpperCase()
) => callback(message.slice(startIndex, endIndex)) + message.slice(endIndex);
