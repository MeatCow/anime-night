export const createListRequest = (genre: string, username: string) => ({
  url: 'https://www.randomanime.org/api/list/custom',
  headers: {
    accept: 'application/json, text/plain, */*',
    'accept-language':
      'en-US,en;q=0.9,fr;q=0.8,zh-TW;q=0.7,zh-CN;q=0.6,zh;q=0.5',
    authorization:
      'e95975fe462564212f9e3a269790564599f31bf4d85e7c1e8075cb46c14321f0',
    'content-type':
      'multipart/form-data; boundary=----WebKitFormBoundaryFfjOcu3D9Et37yRL',
    'sec-ch-ua':
      '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    Referer: 'https://www.randomanime.org/',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
  },
  data: `------WebKitFormBoundaryFfjOcu3D9Et37yRL\r\nContent-Disposition: form-data; name="base"\r\n\r\nexternal\r\n------WebKitFormBoundaryFfjOcu3D9Et37yRL\r\nContent-Disposition: form-data; name=\"included[]\"\r\n\r\n${genre}\r\n------WebKitFormBoundaryFfjOcu3D9Et37yRL\r\nContent-Disposition: form-data; name=external[site]"\r\n\r\nAniList\r\n------WebKitFormBoundaryFfjOcu3D9Et37yRL\r\nContent-Disposition: form-data; name=\"external[list]\"\r\n\r\n\r\n------WebKitFormBoundaryFfjOcu3D9Et37yRL\r\nContent-Disposition: form-data; name=\"external[onlyMyAnime]\"\r\n\r\nfalse\r\n------WebKitFormBoundaryFfjOcu3D9Et37yRL\r\nContent-Disposition: form-data; name="external[username]"\r\n\r\n${username}\r\n------WebKitFormBoundaryFfjOcu3D9Et37yRL--\r\n`,
});
