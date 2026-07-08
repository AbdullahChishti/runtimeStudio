export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export const runtimeBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  if (!path) {
    return runtimeBasePath || "/";
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (path === "/") {
    return runtimeBasePath || "/";
  }

  // Avoid double-prefixing if the path already carries the runtime basePath.
  if (runtimeBasePath && path.startsWith(`${runtimeBasePath}/`)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${runtimeBasePath}${normalizedPath}`;
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
