export class Cookie {

    /**
     * Retrieves a cookie by it's name
     *
     * @param  {string} name: id of the cookie
     * @returns cookie value
     */
    public static getCookie(name: string): string {
        let myWindow: any = window;
        name = myWindow.escape(name);
        let regexp = new RegExp('(?:^' + name + '|;\\s*' + name + ')=(.*?)(?:;|$)', 'g');
        let result = regexp.exec(document.cookie);
        return (result === null) ? null : myWindow.unescape(result[1]);
    }

    /**
     * Save the Cookie
     *
     * @param  {string} name: cookie identification
     * @param  {string} value: cookie value
     * @param  {number} expires: cookie expiration date in days from now. 
     * If it's undefined the cookie is a session Cookie
     * @param  {string} path: path relative to the domain where the 
     * cookie should be avaiable. 
     * Default /
     * @param  {string} domain: domain where the cookie should be avaiable. 
     * Default current domain
     */
    public static setCookie(
        name: string,
        value: string,
        expires?: number,
        path?: string,
        domain?: string) {

        let myWindow: any = window;
        let cookieStr = myWindow.escape(name) + '=' + myWindow.escape(value) + ';';

        if (expires) {
            let dtExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
            cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
        }
        if (path) {
            cookieStr += 'path=' + path + ';';
        }
        if (domain) {
            cookieStr += 'domain=' + domain + ';';
        }

        // console.log(cookieStr);
        document.cookie = cookieStr;
    }

    /**
     * Removes specified Cookie
     *
     * @param  {string} name: cookie id
     * @param  {string} path: path relative to the domain where the cookie 
     * should be avaiable. 
     * Default /
     * @param  {string} domain: Domain where the cookie should be avaiable. 
     * Default current domain
     */
    public static deleteCookie(
        name: string,
        path?: string,
        domain?: string) {

        // If the cookie exists
        if (Cookie.getCookie(name)) {
            Cookie.setCookie(name, '', -1, path, domain);
        }
    }

}
