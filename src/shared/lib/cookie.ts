type CookieOptions = {
  path?: string;
  domain?: string;
  expires?: Date | string;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
};

export const cookieUtil = {
  /**
   * Create or update a cookie
   * @param name - Cookie name
   * @param value - Cookie value
   * @param options - Cookie options
   */
  set: (name: string, value: string, options: CookieOptions = {}) => {
    const { path = "/", domain, expires, secure, sameSite = "Lax" } = options;

    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Path=${path}`;

    if (domain) cookieString += `; Domain=${domain}`;
    if (expires) {
      const expiryDate =
        expires instanceof Date ? expires.toUTCString() : expires;
      cookieString += `; Expires=${expiryDate}`;
    }
    if (secure) cookieString += "; Secure";
    if (sameSite) cookieString += `; SameSite=${sameSite}`;

    document.cookie = cookieString;
  },

  /**
   * Read a cookie by name
   * @param name - Cookie name
   * @returns The cookie value or null if not found
   */
  get: (name: string): string | null => {
    const cookies = document.cookie
      .split("; ")
      .reduce<Record<string, string>>((acc, cookie) => {
        const [key, val] = cookie.split("=");
        acc[decodeURIComponent(key)] = decodeURIComponent(val || "");
        return acc;
      }, {});

    return cookies[name] || null;
  },

  /**
   * Delete a cookie by name
   * @param name - Cookie name
   * @param options - Additional options like path or domain
   */
  delete: (name: string, options: CookieOptions = {}) => {
    cookieUtil.set(name, "", { ...options, expires: new Date(0) });
  },

  /**
   * Get all cookies
   * @returns An object containing all cookies
   */
  getAll: (): Record<string, string> => {
    return document.cookie
      .split("; ")
      .reduce<Record<string, string>>((acc, cookie) => {
        const [key, val] = cookie.split("=");
        acc[decodeURIComponent(key)] = decodeURIComponent(val || "");
        return acc;
      }, {});
  },
};
