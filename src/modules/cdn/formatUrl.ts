export default function formatUrl(filePath: string): string {
  if (!process.env.NEXT_PUBLIC_CDN) {
    throw new Error("CDN URL is not defined");
  }

  return `${process.env.NEXT_PUBLIC_CDN}${
    filePath.startsWith("/") ? filePath : `/${filePath}`
  }`;
}
